CKEDITOR.plugins.add( 'catalogimage', {
  requires: 'widget',
  icons: 'catalogimage',
  init: function (editor) {
    CKEDITOR.dialog.add('catalogimageDialog', this.path + 'dialogs/catalogimage.js');

    editor.ui.addButton('catalogimage', {
      label: 'Add Catalog Image',
      command: 'catalogimage',
      icon: this.path + 'images/catalogimage.png'
    });

    editor.widgets.add('catalogimage', {
      dialog: 'catalogimageDialog',
      init: function () {
        var width = this.element.find('img').getItem(0).getAttribute('width');
        var img = this.element.find('img').getItem(0).getAttribute('src');
        var link = this.element.find('a').getItem(0).getAttribute('href');

        if (width)
          this.setData('width', width);
        if (img) {
          this.setData('img_url', img);
        }
        if (link) {
          this.setData('img_link', link);
        }

        if (this.element.hasClass('align-left'))
          this.setData('align', 'left');
        if (this.element.hasClass('align-right'))
          this.setData('align', 'right');
        if (this.element.hasClass('align-center'))
          this.setData('align', 'center');
      },
      data: function () {
        if (this.data.width === '') {
          this.element.find('img').getItem(0).setAttribute('width', '');
        } else {
          this.element.find('img').getItem(0).setAttribute('width', this.data.width);
        }

        if (this.data.img_url === '') {
          this.element.find('img').getItem(0).setAttribute('src', '');
        } else {
          this.element.find('img').getItem(0).setAttribute('src', this.data.img_url);
        }

        if (this.data.img_link === '') {
          this.element.find('a').getItem(0).setAttribute('href', '');
        } else {
          this.element.find('a').getItem(0).setAttribute('href', this.data.img_link);
        }

        this.element.removeClass('inline');
        this.element.removeClass('align-left');
        this.element.removeClass('align-right');
        this.element.removeClass('align-center');
        if (this.data.align) {
          this.element.addClass('align-' + this.data.align);
        }
        if (this.data.align !== 'center') {
          this.element.addClass('inline');
        }
      },

      template:
        '<div class="catalog-image">' +
          '<figure class="caption">' +
            '<a href="" target="_blank"><img src="" width="150px"/></a>' +
            '<figcaption class="catalog-caption">Caption</figcaption>' +
          '</figure>' +
        '</div>',
      editables: {
        caption: {
          selector: '.catalog-caption',
          allowedContent: 'strong em'
        }
      },
      allowedContent: 'div(!catalog-image,inline,align-left,align-right,align-center);' +
        'figure(!caption);a;img;figcaption(!catalog-caption);',
      // requiredContent: 'div(!digcol-image)',
      upcast: function (element) {
        return element.name == 'div' && element.hasClass('inline');
      }
    });
  }
});
