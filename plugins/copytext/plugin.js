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

                    const contentDOM = document.createElement('div');
                    contentDOM.innerHTML = content;

                    // remove assetcards (images/videos/etc.)
                    const embeds = contentDOM.querySelectorAll('.assetcard');
                    embeds.forEach(function (embed) { embed.remove(); });

                    // remove 'Add related links' 
                    const relatedLinks = contentDOM.querySelectorAll('p>span');
                    relatedLinks.forEach(function (relatedLink) { relatedLink.remove(); });

                    // remove empty tags
                    const emptyTags = contentDOM.querySelectorAll(':empty');
                    emptyTags.forEach(function (emptyTag) { emptyTag.remove(); });

                    const manuallyTypedPlainContent = contentDOM.innerText;

                    const dummyTextArea = document.createElement('textarea');
                    dummyTextArea.value = manuallyTypedPlainContent;

                    document.body.appendChild(dummyTextArea);
                    dummyTextArea.select();

                    var notification;
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
