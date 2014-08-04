/*jslint indent: 2, maxlen: 80 */
/*globals CKEDITOR */

CKEDITOR.dialog.add('digitalcollectionDialog', function (editor) {
  'use strict';

  return {
    title: 'Digital Collection Image',
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
            id: 'img_id',
            type: 'text',
            label: 'Image ID',
            required: true,
            validate: CKEDITOR.dialog
              .validate.notEmpty("The Image ID field cannot be empty. " +
                "Please use the ID for the image from Digital Collections."),
            setup: function (widget) {
              this.setValue(widget.data.img_id);
            },
            commit: function (widget) {
              widget.setData('img_id', this.getValue());
            }
          },
          {
            id: 'img_url',
            type: 'text',
            label: 'Image URL',
            required: true,
            validate: CKEDITOR.dialog
              .validate.notEmpty("The Image URL cannot be empty. Please use " +
                "The URL for the image from Digital Collections."),
            setup: function (widget) {
              this.setValue(widget.data.img_url);
            },
            commit: function (widget) {
              widget.setData('img_url', this.getValue());
            }
          }
        ]
      }
    ]
  };
});