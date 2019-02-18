(function () {
    CKEDITOR.plugins.add('CopyText', {
        icons: 'CopyText',
        requires: 'notification',
        onLoad: function () {
            CKEDITOR.addCss(
                '.cke_button__copytext_icon {opacity: 0.4;}'
            )
        },
        init: function (editor) {
            editor.addCommand('CopyText', {
                exec: function (editor) {
                    const content = editor.getData();

                    const manuallyTypedContent = content.replace(/<div[\s\S]*<\/div>/g, '')
                    const manuallyTypedPlainContent = angular.element(manuallyTypedContent).text();

                    const dummyTextArea = document.createElement('textarea');
                    dummyTextArea.value = manuallyTypedPlainContent;

                    document.body.appendChild(dummyTextArea);
                    dummyTextArea.select();

                    let notification;
                    try {
                        document.execCommand('copy');
                        notification = new CKEDITOR.plugins.notification(editor, { message: 'Content successfully copied to clipboard', type: 'success' });
                    }
                    catch (err) {
                        notification = new CKEDITOR.plugins.notification(editor, { message: 'Failed to copy content to clipboard', type: 'error' });
                    }
                    document.body.removeChild(dummyTextArea);
                    notification.show();
                }
            });
            editor.ui.addButton('CopyText', {
                label: 'Copy Story Text',
                command: 'CopyText',
                toolbar: 'CopyText'
            });
        }
    });
})();