/*jslint indent: 2, maxlen: 80 */
/*globals CKEDITOR */

CKEDITOR.plugins.add('cataloglink', {
  init: function (editor) {
    'use strict';

    editor.addCommand(
      'cataloglinkDialog',
      new CKEDITOR.dialogCommand('cataloglinkDialog')
    );

    editor.ui.addButton('cataloglink', {
      label: 'Insert Catalog Link',
      command: 'cataloglinkDialog',
      icon: this.path + 'images/cataloglink.png',
      toolbar: 'nypl'
    });

    if (editor.contextMenu) {
      editor.addMenuGroup('catalogLinkGroup');
      editor.addMenuItem('catalogLinkItem', {
        label: 'Edit Catalog Link',
        icon: this.path + 'images/cataloglink.png',
        command: 'cataloglinkDialog',
        group: 'catalogLinkGroup'
      });
      editor.contextMenu.addListener(function (element) {
        var catalogElement = element.getAscendant('a', true);
        if (catalogElement &&
            catalogElement.getAttribute('class') === 'catalog-link') {
          return { catalogLinkItem: CKEDITOR.TRISTATE_OFF };
        }
      })
    }

    CKEDITOR.dialog.add('cataloglinkDialog', function (editor) {
      return {
        title: 'Catalog Link Properties',
        minWidth: 400,
        minHeight: 200,
        contents: [
          {
            id: 'tab1',
            label: 'Add a Catalog link (Id or keywords)',
            elements: [
              {
                type: 'text',
                id: 'text',
                label: 'Text',
                setup: function (element) {
                  this.setValue(element.getText());
                },
                commit: function (element) {
                  var text = this.getValue();
                  if (text) {
                    element.setText(text);
                  } else if (!this.insertMode) {
                    element.removeText(text);
                  }
                }
              },
              {
                type: 'text',
                id: 'id',
                label: 'Id',
                setup: function (element) {
                  this.setValue(element.getAttribute('data-id'));
                },
                commit: function (element) {
                  var id = this.getValue();
                  if (id) {
                    element.setAttribute('data-id', id);
                  } else if (!this.insertMode) {
                    element.removeAttribute('data-id');
                  }
                }
              },
              {
                type: 'text',
                id: 'keywords',
                label: 'Keywords',
                setup: function (element) {
                  this.setValue(element.getAttribute('data-keywords'));
                },
                commit: function (element) {
                  var keywords = this.getValue();
                  if (keywords) {
                    element.setAttribute('data-keywords', keywords);
                  } else if (!this.insertMode) {
                    element.removeAttribute('data-keywords');
                  }
                }
              }
            ]
          }
        ],

        onShow: function () {
          var selection = editor.getSelection(),
            element = selection.getStartElement();

          if (element) {
            element = element.getAscendant('a', true);
          }

          if (!element || element.getName() !== 'a') {
            element = editor.document.createElement('a');
            this.insertMode = true;
          } else {
            this.insertMode = false;
          }

          this.element = element;

          if (!this.insertMode) {
            this.setupContent(this.element);
          }
        },

        onOk: function () {
          var base = 'http://browse.nypl.org/iii/encore/search/',
            dialog = this,
            id = dialog.getValueOf('tab1', 'id'),
            text = dialog.getValueOf('tab1', 'text'),
            keywords = dialog.getValueOf('tab1', 'keywords'),
            keywordsArr = keywords.split(' ').join('%20'),
            cataloglink = dialog.element,
            search = '',
            link = '';

          dialog.commitContent(cataloglink);

          if (dialog.insertMode) {
            editor.insertElement(cataloglink);
          }

          if (id) {
            search += id;
          }
          if (keywords) {
            search += '%20' + keywordsArr;
          }

          link = base + 'C__S' + search + '__Orightresult__U?lang=eng&suite=def';

          cataloglink.setAttribute('data-id', id);
          cataloglink.setAttribute('data-keywords', keywords);

          cataloglink.setAttribute('class', 'catalog-link');
          cataloglink.setAttribute('title', text);
          cataloglink.setText(text);
          cataloglink.setAttribute('data-cke-saved-href', link);
          cataloglink.setAttribute('href', link);
        }
      };
    });
  }
});