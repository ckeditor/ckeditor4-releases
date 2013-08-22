var prolexis = {};
prolexis.urlPrlx = 'http://' + document.domain + ':9103/webservice/proxyDiagPlWs.php';

prolexis.request = function (html, callback) {
  var self = this,
  callback = callback || {};

  this.type = [
    'Orthographe',
    'Grammaire',
    'Typographie',
    'Contexte',
    'Fréquences',
    'Presse'
  ];

  var xmlRequestBefore = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\
  xmlns:prol="http://www.prolexis.com/ProLexisService"\
  xmlns:obj="http://objects.mtn.mtnj.prolexis.com">\
  <soapenv:Header/>\n\
  <soapenv:Body>\n\
    <prol:analyze>\n\
      <prol:in0>\n\
        <obj:currentOffset>0</obj:currentOffset>\n\
        <obj:text>';
  var xmlRequestAfter = '</obj:text>\n\
      </prol:in0>\n\
      <prol:in1>?</prol:in1>\n\
    </prol:analyze>\n\
  </soapenv:Body>\n\
  </soapenv:Envelope>';

  this.parser = new parserNodeHtml(html);

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
    var objError = {id: index, ignore: false},
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
};

prolexis.getHightlightText = function () {
  var self = this,
  classLink = '',
  baseOffset = 0,
  text = this.getText(),
  hightlightText = '';

  this.currentError = this.currentError || this.errors[0];

  $.each( this.errors, function (index, error) {
    classLink = (self.currentError.id === index) ? 'class="active"' : '';

    if (!error.ignore) {
      hightlightText += text.substr(baseOffset, error.header.location.offset - baseOffset);
      hightlightText += '<a ' + classLink + ' href="javascript:void(0);" ';
      hightlightText += 'onclick="active(this);parent.CKEDITOR.plugins.prolexis.loadError(' + index + ');">';
      hightlightText += error.data.label + '</a>';
      baseOffset = error.header.location.offset + error.data.label.length;
    }
  });

  hightlightText += text.substr(baseOffset);
  return hightlightText;
};

prolexis.getHtml = function () {
  return this.parser.getHtml();
};

prolexis.getText = function () {
  return this.parser.getText();
};

prolexis.correction = function (correction) {
  var diffOffset = this.parser.strReplaceNodeText(
    this.currentError.header.location.offset,
    this.currentError.header.location.length,
    correction
  );

  $.each(this.errors.slice(this.currentError.id), function (index, error) {
    error.header.location.offset += diffOffset;
  });

  this.currentError.ignore = true;
};

prolexis.ignore = function () {
  this.currentError.ignore = true;
};

prolexis.replaceAll = function () {
  var self = this;
  $.each(this.errors, function (index, error) {
    self.correction(error.data.corrections[0]);
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
};