(function () {
    // Custom style.
    var excludeFromNewsGate = new CKEDITOR.style({
        element: 'span',
        attributes: {
            'class': 'exclude-from-newsgate'
        }
    });

    CKEDITOR.plugins.add('ExcludeFromNewsGate', {
        icons: 'ExcludeFromNewsGate',
        init: function(editor) {
            editor.attachStyleStateChange(excludeFromNewsGate, function(state) {
                !editor.readOnly && editor.getCommand('ExcludeFromNewsGate').setState(state);
            });

            editor.addCommand('ExcludeFromNewsGate', new CKEDITOR.styleCommand(excludeFromNewsGate));

            editor.ui.addButton('ExcludeFromNewsGate', {
                label: 'Exclude From NewsGate (SHIFT+ALT+E)',
                command: 'ExcludeFromNewsGate',
                toolbar: 'ExcludeFromNewsGate'
            });

            editor.setKeystroke(CKEDITOR.SHIFT + CKEDITOR.ALT + 69, 'ExcludeFromNewsGate'); // SHIFT+ALT+E
        }
    });
})();
