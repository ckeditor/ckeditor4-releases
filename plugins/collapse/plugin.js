(function () {
    CKEDITOR.plugins.add('Collapse', {
        onLoad: function () {
            CKEDITOR.document.appendStyleSheet(this.path + "css/collapse.css");
        },
        init: function (editor) {
            editor.on('instanceReady',initializePlugin);

            editor.addCommand('Collapse', {
                exec: function (editor) {
                    var commandState = editor.getCommand('Collapse').state;
                    if (commandState === CKEDITOR.TRISTATE_OFF) {
                        commandState = CKEDITOR.TRISTATE_ON;
                        modifyPlugins('none');
                        document.querySelector('.cke_contents').classList.add('collapsed');
                    } else {
                        commandState = CKEDITOR.TRISTATE_OFF;
                        modifyPlugins('inherit');
                        document.querySelector('.cke_contents').classList.remove('collapsed');
                    }
                    editor.getCommand('Collapse').setState(commandState);
                }
            });

            editor.ui.addButton('Collapse', {
                label: 'Collapse Editor',
                command: 'Collapse',
                toolbar: 'Collapse'
            });

            function initializePlugin(){
                var collapseButtons = document.querySelectorAll('.cke_button__collapse');
                if (collapseButtons.length) {
                    collapseButtons.forEach(function (collapseButton) {
                        if(!collapseButton.parentElement.classList.contains('collapse-toolbox')){
                            collapseButton.parentElement.classList.add('collapse-toolbox');
                            collapseButton.parentElement.parentElement.classList.add('collapse-toolbar');
                            var newlineElement = document.createElement('br');
                            newlineElement.classList.add('plugins-newline-seperator');
                            var collapseToolbar = collapseButton.parentElement.parentElement;
                            collapseToolbar.parentElement.insertBefore(newlineElement, collapseToolbar.nextSibling);
                        }
                    });
                }
            }

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
                var toolbars = editor.toolbox.toolbars.slice(collapseIndex);
                toolbars.forEach(function (toolbar) {
                    document.getElementById(toolbar.id).style.display = displayStyle;
                });
            }
        }
    });
})();