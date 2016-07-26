(function () {
    // Custom style.
    var markAsNotes = new CKEDITOR.style({
        element: 'span',
        attributes: {
            'class': 'notes'
        }
    });

    CKEDITOR.plugins.add('MarkAsNotes', {
        icons: 'MarkAsNotes',
        init: function(editor) {
            editor.attachStyleStateChange(markAsNotes, function(state) {
                !editor.readOnly && editor.getCommand('MarkAsNotes').setState(state);
            });

            editor.addCommand('MarkAsNotes', new CKEDITOR.styleCommand(markAsNotes));

            editor.ui.addButton('MarkAsNotes', {
                label: 'Mark as Notes (SHIFT+ALT+N)',
                command: 'MarkAsNotes',
                toolbar: 'MarkAsNotes'
            });

            editor.setKeystroke(CKEDITOR.SHIFT + CKEDITOR.ALT + 78, 'MarkAsNotes'); // SHIFT+ALT+N
        }
    });
})();
