CKEDITOR.plugins.add( 'digitalcollection', {
  requires: 'widget',
  icons: 'digitalcollection',
  init: function (editor) {
    CKEDITOR.dialog.add('digitalcollectionDialog', this.path + 'dialogs/digitalcollection.js');

    editor.widgets.add('digitalcollection', {
      dialog: 'digitalcollectionDialog',
      init: function () {
        var width = this.element.find('img').getItem(0).getAttribute('width');
        var img = this.element.find('img').getItem(0).data('id');
        var uuid = this.element.find('a').getItem(0).data('uuid');

        if (width)
          this.setData('width', width);
        if (img) {
          this.setData('img_id', img);
        }
        if (uuid) {
          this.setData('img_uuid', uuid);
        }

        if (this.element.hasClass('align-left'))
          this.setData('align', 'left');
        if (this.element.hasClass('align-right'))
          this.setData('align', 'right');
        if (this.element.hasClass('align-center'))
          this.setData('align', 'center');
      },
      data: function () {
        if (this.data.width == '') {
          this.element.find('img').getItem(0).setAttribute('width', '');
        } else {
          this.element.find('img').getItem(0).setAttribute('width', this.data.width);
        }

        if (this.data.img_id == '') {
          this.element.find('img').getItem(0).setAttribute('data-id', '');
          this.element.find('img').getItem(0).setAttribute('src', '');
        } else {
          this.element.find('img').getItem(0).setAttribute('data-id', this.data.img_id);
          this.element.find('img').getItem(0).setAttribute('src', 'http://images.nypl.org/index.php?id='+this.data.img_id+'&t=w');
        }

        if (this.data.img_uuid == '') {
          this.element.find('a').getItem(0).setAttribute('data-uuid', '');
          this.element.find('a').getItem(0).setAttribute('href', '');
        } else {
          this.element.find('a').getItem(0).setAttribute('data-uuid', this.data.img_uuid);
          this.element.find('a').getItem(0).setAttribute('href', 'http://digitalcollections.nypl.org/items/'+this.data.img_uuid);
        }

        this.element.removeClass('align-left');
        this.element.removeClass('align-right');
        this.element.removeClass('align-center');
        if (this.data.align) {
          this.element.addClass('align-' + this.data.align);
        }
      },
      button: 'Add Digital Collections image',
      template:
        '<div class="inline">' +
          '<figure>' +
            '<a href=""><img data-id src="" class="digColImage" width="300px"/></a>' +
            '<figcaption class="dcCaption">Caption</figcaption>' +
          '</figure>' +
        '</div>',
      editables: {
        caption: {
          selector: '.dcCaption',
          allowedContent: 'strong em'
        }
      },
      allowedContent: 'div(!inline,align-left,align-right,align-center,data-width);' +
        'figure;a;img(!digColImage);figcaption(!dcCaption);',
      // requiredContent: 'div(!inline,align-left,align-right,align-center,data-width)',
      upcast: function (element) {
        return element.name == 'div' && element.hasClass('inline');
      }
    });
  }
});
