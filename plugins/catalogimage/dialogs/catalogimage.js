/*jslint indent: 2, maxlen: 80 */
/*globals CKEDITOR */

CKEDITOR.dialog.add('catalogimageDialog', function (editor) {
  'use strict';
  return {
    title: 'Edit Catalog Image',
    minWidth: 200,
    minHeight: 100,
    contents: [
      {
        id: 'info',
        elements: [
          {
            id: 'align',
            type: 'select',
            label: 'Align',
            items: [
              [ editor.lang.common.notSet, '' ],
              [ editor.lang.common.alignLeft, 'left' ],
              [ editor.lang.common.alignRight, 'right' ],
              [ editor.lang.common.alignCenter, 'center' ]
            ],
            setup: function (widget) {
              this.setValue(widget.data.align);
            },
            commit: function (widget) {
              widget.setData('align', this.getValue());
            }
          },
          {
            id: 'width',
            type: 'text',
            label: 'Width (px)',
            setup: function (widget) {
              this.setValue(widget.data.width);
            },
            commit: function (widget) {
              widget.setData('width', this.getValue());
            }
          },
          {
            id: 'alt',
            type: 'text',
            label: 'Alt Text',
            setup: function (widget) {
              this.setValue(widget.data.alt);
            },
            commit: function (widget) {
              widget.setData('alt', this.getValue());
            }
          },
          {
            id: 'img_url',
            type: 'text',
            label: 'Image URL',
            validate: CKEDITOR.dialog
              .validate.notEmpty("Image URL cannot be empty"),
            setup: function (widget) {
              this.setValue(widget.data.img_url);
            },
            commit: function (widget) {
              widget.setData('img_url', this.getValue());
            }
          },
          {
            id: 'img_link',
            type: 'text',
            label: 'Image Link',
            validate: CKEDITOR.dialog
              .validate.notEmpty("Image Link cannot be empty"),
            setup: function (widget) {
              this.setValue(widget.data.img_link);
            },
            commit: function (widget) {
              widget.setData('img_link', this.getValue());
            }
          }
        ]
      }
    ]
  };
});