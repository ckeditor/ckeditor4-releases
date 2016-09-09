(function () {
    CKEDITOR.plugins.add('CopyCheck', {
        icons: 'CopyCheck',
        onLoad: function() {
            CKEDITOR.addCss(
                'img.notes {' +
                    'cursor: pointer;' +
                    'height: 18px;' +
                    'width: 22px;' +
                    'position: relative;' +
                    'top: -2px;' +
                '}'
            );
        },
        init: function(editor) {
            var cqImage = this.path + 'icons/CopyCheckReverse.png';
            editor.addCommand('CopyCheck', {
                exec: function (editor) {
                    editor.insertHtml('<img class="notes" title="Copy checked" src="' + cqImage + '">');
                }
            });

            editor.ui.addButton('CopyCheck', {
                label: 'Insert CQ Flag (ALT+Q)',
                command: 'CopyCheck',
                toolbar: 'CopyCheck'
            });

            editor.setKeystroke(CKEDITOR.ALT + 81, 'CopyCheck'); // ALT+Q
        }
    });
})();
