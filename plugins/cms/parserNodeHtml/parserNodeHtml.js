/*global $:false */
/*global CKEDITOR:false */
'use strict';

CKEDITOR.plugins.add( 'parserNodeHtml', {
  init: function() {
    CKEDITOR.plugins.ParserNodeHtml = ParserNodeHtml;
  }
});

var ParserNodeHtml = function (html) {
  var plainOffset = 0,
  htmlOffset = 0,
  self = this;

  var parser = new CKEDITOR.htmlParser();

  this.parsedHtml = [];

  parser.onText = function (text) {
    self.parsedHtml.push({
      offset: { html: htmlOffset, plain: plainOffset },
      type: 'text',
      data : {
        text: text
      }
    });

    plainOffset += text.length;
    htmlOffset += text.length;
  };
  parser.onTagOpen = function(tagName, attributes, selfClosing) {
    var html = '';

    $.each(attributes, function (name, value) {
      html += ' ' + name + '="' + value + '"'; // ex: _class="foo bar"
    });

    html = '<' + tagName + html + '>'; // ex: <p> ou <br>

    self.parsedHtml.push({
      offset: htmlOffset,
      type: 'openMarkup',
      data: {
        html: html,
        tagName: tagName,
        selfClosing: selfClosing,
        attributes: attributes
      }
    });

    htmlOffset = html.length;
  };
  parser.onTagClose = function(tagName) {
    var html = '</' + tagName + '>'; // ex: </p>

    self.parsedHtml.push({
      offset: htmlOffset,
      type: 'closeMarkup',
      data: {
        html: html,
        tagName: tagName
      }
    });

    htmlOffset = html.length;
  };

  parser.parse(html);
};

ParserNodeHtml.prototype.strReplace = function (offset, length, newStr) {
  var complete = false,
  tmpOffset = 0,
  tmpLength = 0,
  tmpNodeText = '',
  tmpStr = '',
  delta = newStr.length - length,
  strStack = newStr.slice();

  this.parsedHtml.map( function (node) {

    if (!complete && node.type === 'text'&&
      offset >= node.offset.plain &&
      offset < node.offset.plain + node.data.text.length) {

      tmpOffset = offset - node.offset.plain;
      tmpLength = node.data.text.length - tmpOffset;
      tmpStr = strStack.substr(0, tmpLength);

      tmpNodeText = node.data.text.substr(0, tmpOffset);
      tmpNodeText += tmpStr;

      strStack = strStack.substr(tmpStr.length);
      complete = strStack.length === 0;

      tmpNodeText += complete?node.data.text.substr(tmpOffset + length):'';

      offset = tmpOffset + tmpLength;
      length = length - tmpStr.length;

      node.data.text = tmpNodeText;
    }

    else if (complete && node.type === 'text') {
      node.offset.html += delta;
      node.offset.plain += delta;
    }

    else if (complete && node.type !== 'text') {
      node.offset += delta;
    }

  });

  return delta;
};

ParserNodeHtml.prototype.strWrap = function (offset, length, left, right) {
  var tmpOffset = 0,
  delta = 0,
  tmpText = '',
  tmpLength = 0,
  leftWrapFlag = false,
  rightWrapFlag = false;

  this.parsedHtml.map( function (node) {

    if (!leftWrapFlag && !rightWrapFlag &&
      node.type === 'text' &&
      offset >= node.offset.plain &&
      offset < (node.offset.plain + node.data.text.length)) {

      tmpOffset = offset - node.offset.plain;

      tmpText = node.data.text.substr(0, tmpOffset) + left;

      delta = left.length;
      leftWrapFlag = true;

      if (length <= node.data.text.substr(tmpOffset).length) {
        tmpText += node.data.text.substr(tmpOffset, length) + right;
        tmpText += node.data.text.substr(tmpOffset + length);
        delta += right.length;
        rightWrapFlag = true;
      } else if (node.data.text.substr(tmpOffset).length) {
        tmpText += node.data.text.substr(tmpOffset);
        tmpLength = node.data.text.substr(tmpOffset).length;
      }

      node.data.text = tmpText;
    }

    else if (leftWrapFlag && !rightWrapFlag &&
      node.type === 'text' &&
      (offset + length) >= node.offset.plain &&
      (offset + length) < (node.offset.plain + node.data.text.length)) {

      tmpOffset = length - tmpLength;

      tmpText = node.data.text.substr(0, tmpOffset) + right;
      tmpText += node.data.text.substr(tmpOffset);

      node.data.text = tmpText;
      node.offset.html += delta;
      node.offset.plain += delta;

      delta += right.length;
      rightWrapFlag = true;
    }

    else if (delta > 0 && node.type === 'text') {
      node.offset.html += delta;
      node.offset.plain += delta;
    }

    else if (delta > 0 && node.type !== 'text') {
      node.offset += delta;
    }

  });

  return delta;
};

ParserNodeHtml.prototype.getHtml = function () {
  return this.parsedHtml.reduce( function (output, node) {
    return output + (node.type === 'text'?node.data.text:node.data.html);
  }, '');
};

ParserNodeHtml.prototype.getText = function () {
  return this.parsedHtml.reduce( function (output, node) {
    return output + (node.type === 'text'?node.data.text:'');
  }, '');
};