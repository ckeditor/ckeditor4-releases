/*jslint indent: 2, maxlen: 80 */
/*globals CKEDITOR */

CKEDITOR.dialog.add('digitalcollectionDialog', function (editor) {
  'use strict';

  return {
    title: 'Edit Digital Collection Image',
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
            id: 'img_id',
            type: 'text',
            label: 'Image ID',
            validate: CKEDITOR.dialog
              .validate.notEmpty("Image ID cannot be empty"),
            setup: function (widget) {
              this.setValue(widget.data.img_id);
            },
            commit: function (widget) {
              widget.setData('img_id', this.getValue());
            }
          },
          {
            id: 'img_uuid',
            type: 'text',
            label: 'Image UUID',
            validate: CKEDITOR.dialog
              .validate.notEmpty("Image UUID cannot be empty"),
            setup: function (widget) {
              this.setValue(widget.data.img_uuid);
            },
            commit: function (widget) {
              widget.setData('img_uuid', this.getValue());
            }
          }
        ]
      }
    ]
  };
});