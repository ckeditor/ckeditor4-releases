/*jslint indent: 2, maxlen: 80 */
/*globals CKEDITOR */

CKEDITOR.plugins.add('catalogimage', {
  requires: 'widget',
  icons: 'catalogimage',
  init: function (editor) {
    'use strict';

    CKEDITOR.dialog.add(
      'catalogimageDialog',
      this.path + 'dialogs/catalogimage.js'
    );

    editor.ui.addButton('catalogimage', {
      label: 'Add Catalog Image',
      command: 'catalogimage',
      icon: this.path + 'images/catalogimage.png',
      toolbar: 'nypl'
    });

    // if (editor.contextMenu) {
    //   editor.addMenuGroup('catalogImageGroup');
    //   editor.addMenuItem('catalogImageItem', {
    //     label: 'Edit Catalog Image',
    //     icon: this.path + 'images/catalogimage.png',
    //     command: 'catalogimageDialog',
    //     group: 'catalogImageGroup'
    //   });
    //   editor.contextMenu.addListener(function (element) {
    //     var catalogElement = element.getAscendant('figure', true);
    //     if (catalogElement &&
    //         catalogElement.getAttribute('class').indexOf('catalog-image') !== 0) {
    //       return { catalogImageItem: CKEDITOR.TRISTATE_OFF };
    //     }
    //   });
    // }

    editor.widgets.add('catalogimage', {
      dialog: 'catalogimageDialog',
      init: function () {
        var img = this.element.find('img').getItem(0),
          link = this.element.find('a').getItem(0),
          alt = img.getAttribute('alt'),
          width = img.getAttribute('width'),
          img_url = img.getAttribute('src'),
          img_link = link.getAttribute('href');

        if (alt && alt !== undefined) {
          this.setData('alt', alt);
        }
        if (width) {
          this.setData('width', width);
        }
        if (img_url) {
          this.setData('img_url', img_url);
        }
        if (img_link) {
          this.setData('img_link', img_link);
        }

        if (this.element.hasClass('align-left')) {
          this.setData('align', 'left');
        }
        if (this.element.hasClass('align-right')) {
          this.setData('align', 'right');
        }
        if (this.element.hasClass('align-center')) {
          this.setData('align', 'center');
        }
      },
      data: function () {
        var img = this.element.find('img').getItem(0),
          link = this.element.find('a').getItem(0);

        if (this.data.alt === '') {
          img.setAttribute('alt', '');
        } else {
          img.setAttribute('alt', this.data.alt);
        }

        if (this.data.width === '') {
          img.setAttribute('width', '');
        } else {
          img.setAttribute('width', this.data.width);
        }

        if (this.data.img_url === '') {
          img.setAttribute('src', '');
        } else {
          img.setAttribute('src', this.data.img_url);
          img.setAttribute('data-cke-saved-src', this.data.img_url);
        }

        if (this.data.img_link === '') {
          link.setAttribute('href', '');
        } else {
          link.setAttribute('href', this.data.img_link);
          link.setAttribute('data-cke-saved-href', this.data.img_link)
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
          '<figure class="catalog-image caption">' +
            '<a href="">' +
            '<img src="" width="150px" alt=""/></a>' +
            '<figcaption class="catalog-caption">Caption</figcaption>' +
          '</figure>',
      editables: {
        caption: {
          selector: '.catalog-caption',
          allowedContent: 'strong em'
        }
      },
      allowedContent:
        // 'div(!catalog-image,inline,align-left,align-right,align-center);' +
        'figure(!catalog-image, caption);a;img;figcaption(!catalog-caption);',
      // requiredContent: 'div(catalog-image)',
      upcast: function (element) {
        return element.name === 'figure' && element.hasClass('catalog-image');
      }
    });
  }
});
