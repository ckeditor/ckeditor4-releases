/*global $:false */
/*global CKEDITOR:false */
'use strict';

var prolexis = {};
prolexis.urlPrlx = 'http://' + document.domain + ':9103/webservice/proxyDiagPlWs.php';
prolexis.type = [
  'Orthographe',
  'Grammaire',
  'Typographie',
  'Contexte',
  'Fréquences',
  'Presse'
];

prolexis.request = function (html, callback) {
  var self = this;

  callback = callback || {};

  var xmlRequestBefore = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"';
  xmlRequestBefore += ' xmlns:prol="http://www.prolexis.com/ProLexisService"';
  xmlRequestBefore += ' xmlns:obj="http://objects.mtn.mtnj.prolexis.com">';
  xmlRequestBefore += '<soapenv:Header/>';
  xmlRequestBefore += '<soapenv:Body>';
  xmlRequestBefore += '<prol:analyze>';
  xmlRequestBefore += '<prol:in0>';
  xmlRequestBefore += '<obj:currentOffset>0</obj:currentOffset>';
  xmlRequestBefore += '<obj:text>';
  var xmlRequestAfter = '</obj:text>';
  xmlRequestAfter += '</prol:in0>';
  xmlRequestAfter += '<prol:in1>?</prol:in1>';
  xmlRequestAfter += '</prol:analyze>';
  xmlRequestAfter += '</soapenv:Body>';
  xmlRequestAfter += '</soapenv:Envelope>';

  this.parser = new CKEDITOR.plugins.ParserNodeHtml(html);

  $.ajax({
    type: 'POST',
    url: self.urlPrlx,
    data: xmlRequestBefore + this.getText() + xmlRequestAfter
  })
  .done(function (xmlDoc) {
    self.parseXmlErrors(xmlDoc.getElementsByTagName('Error'));
    callback();
  });
};

prolexis.parseXmlErrors = function (xmlErrors) {
  var self = this;

  this.errors = [];

  $.each(xmlErrors, function (index, xmlError) {
    var objError = {ignore: false},
      xmlContainer = {},
      getTagContent = function (node, tag) {
        return node.getElementsByTagName(tag)[0].textContent;
      };

    objError.header = {
      type: +getTagContent(xmlError, 'type'),
      code: getTagContent(xmlError, 'code'),
      duplicateErrorCount: +getTagContent(xmlError, 'duplicateErrorCount'),
      duplicateNextErrorId: getTagContent(xmlError, 'duplicateNextErrorId')
    };

    xmlContainer = xmlError.getElementsByTagName('contextLocation')[0];
    objError.header.contextLocation = {
      length: +getTagContent(xmlContainer, 'length'),
      offset: +getTagContent(xmlContainer, 'offset')
    };

    xmlContainer = xmlError.getElementsByTagName('location')[0];
    objError.header.location = {
      length: +getTagContent(xmlContainer, 'length'),
      offset: +getTagContent(xmlContainer, 'offset')
    };

    objError.data = {
      correctionLabel: getTagContent(xmlError, 'correctionLabel'),
      diagnosis: getTagContent(xmlError, 'diagnosis'),
      explanation: getTagContent(xmlError, 'explanation'),
      flags: getTagContent(xmlError, 'flags'),
      label: getTagContent(xmlError, 'label')
    };

    objError.data.corrections = [];
    $.each(xmlError.getElementsByTagName('ArrayOfString')[0].getElementsByTagName('string'),
    function (index, wordXml) {
      objError.data.corrections.push(wordXml.textContent);
    });

    self.errors.push(objError);
  });

  this.errors.sort(function (err1, err2) {
    return err1.header.location.offset > err2.header.location.offset;
  });
};

prolexis.getHightlightText = function () {
  var self = this,
  classLink = '',
  left = '',
  diffOffset = 0,
  errors = $.extend(true, [], this.errors),
  parserHighlight = new CKEDITOR.plugins.ParserNodeHtml(this.getHtml());

  this.currentError = this.currentError || this.errors[0];

  $.each(errors, function (index, error) {
    classLink = (self.currentError.index === index) ? ' class="active"' : '';

    if (!error.ignore) {
      left = '<a' + classLink + ' href="javascript:void(0);" ';
      left += 'onclick="active(this);parent.CKEDITOR.plugins.prolexis.loadError(' + index + ');">';

      diffOffset = parserHighlight.strWrap(
        error.header.location.offset,
        error.header.location.length,
        left,
        '</a>'
      );

      self.changeOffsetError(errors, index, diffOffset);
    }
  });

  return parserHighlight.getHtml();
};

prolexis.changeOffsetError = function (list, index, addValue) {
  $.each(list.slice(index) || [], function (index, error) {
    error.header.location.offset += addValue;
  });

  return list;
};

prolexis.getHtml = function () {
  return this.parser.getHtml();
};

prolexis.getText = function () {
  return this.parser.getText();
};

prolexis.correction = function (index, correction) {
  var error = this.errors[index],
  diffOffset = this.parser.strReplace(
    error.header.location.offset,
    error.header.location.length,
    correction
  );

  this.changeOffsetError(this.errors, index, diffOffset);

  error.ignore = true;
};

prolexis.ignore = function () {
  this.currentError.ignore = true;
};

prolexis.replaceAll = function () {
  var self = this;
  $.each(this.errors, function (index, error) {
    if(!error.ignore) self.correction(index, error.data.corrections[0]);
  });
};

prolexis.ignoreAll = function () {
  $.each(this.errors, function (index, error) {
    error.ignore = true;
  });
};

prolexis.addToDictionary = function () {
};

prolexis.getError = function (index) {
  return this.errors[index];
};

prolexis.setError = function (index) {
  this.currentError = this.errors[index];
  this.currentError.index = index;
};


//------------------------------------------------------

CKEDITOR.dialog.add( 'prolexisDialog', function ( editor ) {
  var iframeTextSrc = CKEDITOR.basePath + CKEDITOR.plugins.basePath + 'cms/prolexis/dialogs/text.html',
  iframeErrorSrc = CKEDITOR.basePath + CKEDITOR.plugins.basePath + 'cms/prolexis/dialogs/error.html';

  var iframeHightlightText = '<iframe src="'+ iframeTextSrc + '" style="width:100%;height: 350px;';
  iframeHightlightText += 'border: 1px solid #AEB3B9;overflow: auto;background:#fff; border-radius: 3px;"';
  iframeHightlightText += '></iframe>';

  var iframeHightlightError = '<iframe src="'+ iframeErrorSrc + '" style="width:100%;height: 50%;';
  iframeHightlightError += 'border: 1px solid #AEB3B9;overflow: auto;background:#fff; border-radius: 3px;"';
  iframeHightlightError += '></iframe>';

  var dialogDefiniton = {
    title: 'Correcteur',
    minWidth: 800,
    minHeight:650,

    contents: [{
      id: 'main',

      elements: [{
        id : 'hightlightText',
        type : 'html',
        html: iframeHightlightText
      },{
        type: 'hbox',
        widths: [ '50%', '25%', '25%'],
        children: [{
          type: 'vbox',
          align: 'left',
          children: [{
            id : 'hightlightError',
            type : 'html',
            html: iframeHightlightError
          },{
            id: 'txtReplace',
            type: 'text',
            label: 'Remplacer par'
          },{
            id: 'listSuggest',
            type: 'select',
            style: 'height:auto',
            label: 'Suggestions',
            size: 5,
            items: []
          }]
        },{
          type: 'vbox',
          align: 'left',
          children: [{
            id: 'btnReplace',
            type: 'button',
            style: 'width:100%',
            label: 'Remplacer',
            title: 'Remplacer',
            onClick: function() {
              var document = CKEDITOR.document,
              dialog = this._.dialog,
              $replaceBy = $(document.getById(dialog.getContentElement('main', 'txtReplace').domId).$).find('input'),
              $hightlightTextFrame = $(document.getById(dialog.getContentElement('main', 'hightlightText').domId).$.contentDocument.body);

              prolexis.correction(prolexis.currentError.index, $replaceBy.val());

              $hightlightTextFrame.html(prolexis.getHightlightText());
            }
          },{
            id: 'btnReplaceAll',
            type: 'button',
            style: 'width:100%',
            label: 'Remplacer tout',
            title: 'Remplacer tout',
            onClick: function() {
              var document = CKEDITOR.document,
              dialog = this._.dialog,
              $hightlightTextFrame = $(document.getById(dialog.getContentElement('main', 'hightlightText').domId).$.contentDocument.body);

              prolexis.replaceAll();

              $hightlightTextFrame.html(prolexis.getHightlightText());
            }
          },{
            id: 'btnAddDic',
            type: 'button',
            style: 'width:100%',
            label: 'Ajouter au dictionnaire',
            title: 'Ajouter au dictionnaire',
            onClick: function() {
              prolexis.addToDictionary();
            }
          }]
        },{
          type: 'vbox',
          align: 'left',
          children: [{
            id: 'btnIgnore',
            type: 'button',
            style: 'width:100%',
            label: 'Ignorer',
            title: 'Ignorer',
            onClick: function() {
              var document = CKEDITOR.document,
              dialog = this._.dialog,
              $replaceBy = $(document.getById(dialog.getContentElement('main', 'txtReplace').domId).$).find('input'),
              $hightlightTextFrame = $(document.getById(dialog.getContentElement('main', 'hightlightText').domId).$.contentDocument.body);

              prolexis.ignore($replaceBy.val());

              $hightlightTextFrame.html(prolexis.getHightlightText());
            }
          }, {
            id: 'btnIgnoreAll',
            type: 'button',
            style: 'width:100%',
            label: 'Ignorer tout',
            title: 'Ignorer tout',
            onClick: function() {
              var document = CKEDITOR.document,
              dialog = this._.dialog,
              $hightlightTextFrame = $(document.getById(dialog.getContentElement('main', 'hightlightText').domId).$.contentDocument.body);

              prolexis.ignoreAll();

              $hightlightTextFrame.html(prolexis.getHightlightText());
            }
          }]
        }]
      }]

    }],
    buttons: [
      CKEDITOR.dialog.okButton( editor, {
        label: 'Appliquer les corrections'
      }),
      CKEDITOR.dialog.cancelButton
    ],
    onOk: function() {
      editor.setData(prolexis.getHtml());
      CKEDITOR.dialog.fire('cancel');
    },
    onShow: function() {

      var document = CKEDITOR.document,
      dialog = this;

      var $hightlightTextFrame = $(document.getById(dialog.getContentElement('main', 'hightlightText').domId).$.contentDocument.body),
      $type = $(document.getById(dialog.getContentElement('main', 'hightlightError').domId).$.contentDocument.body).find('.type'),
      $diagnosis = $(document.getById(dialog.getContentElement('main', 'hightlightError').domId).$.contentDocument.body).find('.diagnosis'),
      $suggests = $(document.getById(dialog.getContentElement('main', 'listSuggest').domId).$).find('select'),
      $replaceBy = $(document.getById(dialog.getContentElement('main', 'txtReplace').domId).$).find('input');

      prolexis.request(editor.getSnapshot(), function () {

        $hightlightTextFrame.html(prolexis.getHightlightText());

        CKEDITOR.plugins.prolexis = {
          loadError: function (index) {
            var error = prolexis.getError(index),
            first = true;

            $type.text(prolexis.type[error.header.type - 1]);
            $diagnosis.text(error.data.diagnosis.replace(';', ' '));

            $suggests.empty();
            $suggests.on('change', function () {
              $replaceBy.val($suggests.find(':selected').val());
            });

            $.each(error.data.corrections || [], function (index, correction) {
              if(first) $replaceBy.val(correction);
              $suggests.append($('<option>').val(correction).text(correction));
              first = false;
            });

            $suggests.find('option:eq(0)').prop('selected', true);
            prolexis.setError(index);
          }
        };

        CKEDITOR.plugins.prolexis.loadError(0);
      });
    }
  };

  return dialogDefiniton;
});