/*jslint indent: 2, maxlen: 80 */
/*globals CKEDITOR */

CKEDITOR.dialog.add('catalogimageDialog', function (editor) {
  'use strict';
  return {
    title: 'Catalog Image',
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
            required: true,
            validate: CKEDITOR.dialog
              .validate.notEmpty("Please fill out the Alternative Text field."),
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
            required: true,
            validate: CKEDITOR.dialog
              .validate.notEmpty("The Image URL field cannot be empty. " +
                "Please add the URL for the image."),
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
            label: 'Catalog Link',
            required: true,
            validate: CKEDITOR.dialog
              .validate.notEmpty("The Encore Destination Link field cannot be empty. " +
                "Please add a URL to link the image to."),
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