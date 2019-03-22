(function () {
    CKEDITOR.plugins.add('Collapse', {

        afterInit: function () {
            var collapseButton = document.querySelector('.cke_button__collapse');
            if (collapseButton) {
                if (window.innerWidth <= 768) {
                    var collapseToolbox = collapseButton.parentElement;
                    collapseToolbox.style.background = 'transparent';
                    collapseToolbox.style.border = 'none';

                    var collapseToolbar = collapseToolbox.parentElement;
                    collapseToolbar.style.cssFloat = 'right';
                    const newlineElement = document.createElement('br');
                    newlineElement.style.lineHeight = '33px';
                    collapseToolbar.parentElement.insertBefore(newlineElement, collapseToolbar.nextSibling);
                }
                else {
                    collapseButton.parentElement.parentElement.remove();
                }
            }
        },
        onLoad: function () {
            CKEDITOR.document.appendStyleSheet(this.path + "css/collapse.css");
        },
        init: function (editor) {
            function modifyPlugins (displayStyle) {
                var collapseIndex = editor.toolbox.toolbars.length;
                for (var toolbarIndex = 0; toolbarIndex < editor.toolbox.toolbars.length; toolbarIndex++) {
                    var toolbar = editor.toolbox.toolbars[ toolbarIndex ];
                    for (var itemsIndex = 0; itemsIndex < toolbar.items.length; itemsIndex++) {
                        var item = toolbar.items[ itemsIndex ];
                        if (item.button && item.button.command === 'Collapse') {
                            collapseIndex = toolbarIndex + 1;
                            break;
                        }
                    }
                }
                const toolbars = editor.toolbox.toolbars.slice(collapseIndex);
                toolbars.forEach(({ id }) => {
                    document.getElementById(id).style.display = displayStyle;
                });
            }

            editor.addCommand('Collapse', {
                exec: function (editor) {
                    var commandState = editor.getCommand('Collapse').state;
                    if (commandState === CKEDITOR.TRISTATE_OFF) {
                        commandState = CKEDITOR.TRISTATE_ON;
                        modifyPlugins('none');
                    } else {
                        commandState = CKEDITOR.TRISTATE_OFF;
                        modifyPlugins('inherit');
                    }
                    editor.getCommand('Collapse').setState(commandState);
                }
            });
            editor.ui.addButton('Collapse', {
                label: 'Collapse Editor',
                command: 'Collapse',
                toolbar: 'Collapse'
            });
        }
    });
})();
