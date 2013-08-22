CKEDITOR.plugins.add( 'prolexis', {
  requires : ['parserNodeHtml'],
  icons: 'prolexis',
  init: function(editor) {
    editor.addCommand( 'prolexisDialog', new CKEDITOR.dialogCommand( 'prolexisDialog' ) );
    editor.ui.addButton( 'prolexis', {
      label: 'Correcteur',
      command: 'prolexisDialog',
      toolbar: 'insert'
    });

    CKEDITOR.dialog.add( 'prolexisDialog', this.path + 'dialogs/prolexis.js' );
  }
});