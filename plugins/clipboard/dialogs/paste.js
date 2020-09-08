<<<<<<< HEAD
﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("paste",function(c){function h(a){var b=new CKEDITOR.dom.document(a.document),f=b.getBody(),d=b.getById("cke_actscrpt");d&&d.remove();f.setAttribute("contenteditable",!0);if(CKEDITOR.env.ie&&8>CKEDITOR.env.version)b.getWindow().on("blur",function(){b.$.selection.empty()});b.on("keydown",function(a){var a=a.data,b;switch(a.getKeystroke()){case 27:this.hide();b=1;break;case 9:case CKEDITOR.SHIFT+9:this.changeFocus(1),b=1}b&&a.preventDefault()},this);c.fire("ariaWidget",new CKEDITOR.dom.element(a.frameElement));
b.getWindow().getFrame().removeCustomData("pendingFocus")&&f.focus()}var e=c.lang.clipboard;c.on("pasteDialogCommit",function(a){a.data&&c.fire("paste",{type:"auto",dataValue:a.data})},null,null,1E3);return{title:e.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?370:350,minHeight:CKEDITOR.env.quirks?250:245,onShow:function(){this.parts.dialog.$.offsetHeight;this.setupContent();this.parts.title.setHtml(this.customTitle||e.title);this.customTitle=null},onLoad:function(){(CKEDITOR.env.ie7Compat||
CKEDITOR.env.ie6Compat)&&"rtl"==c.lang.dir&&this.parts.contents.setStyle("overflow","hidden")},onOk:function(){this.commitContent()},contents:[{id:"general",label:c.lang.common.generalTab,elements:[{type:"html",id:"securityMsg",html:'<div style="white-space:normal;width:340px">'+e.securityMsg+"</div>"},{type:"html",id:"pasteMsg",html:'<div style="white-space:normal;width:340px">'+e.pasteMsg+"</div>"},{type:"html",id:"editing_area",style:"width:100%;height:100%",html:"",focus:function(){var a=this.getInputElement(),
b=a.getFrameDocument().getBody();!b||b.isReadOnly()?a.setCustomData("pendingFocus",1):b.focus()},setup:function(){var a=this.getDialog(),b='<html dir="'+c.config.contentsLangDirection+'" lang="'+(c.config.contentsLanguage||c.langCode)+'"><head><style>body{margin:3px;height:95%}</style></head><body><script id="cke_actscrpt" type="text/javascript">window.parent.CKEDITOR.tools.callFunction('+CKEDITOR.tools.addFunction(h,a)+",this);<\/script></body></html>",f=CKEDITOR.env.air?"javascript:void(0)":CKEDITOR.env.ie?
"javascript:void((function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+'})())"':"",d=CKEDITOR.dom.element.createFromHtml('<iframe class="cke_pasteframe" frameborder="0"  allowTransparency="true" src="'+f+'" role="region" aria-label="'+e.pasteArea+'" aria-describedby="'+a.getContentElement("general","pasteMsg").domId+'" aria-multiple="true"></iframe>');d.on("load",function(a){a.removeListener();a=d.getFrameDocument();a.write(b);c.focusManager.add(a.getBody());
CKEDITOR.env.air&&h.call(this,a.getWindow().$)},a);d.setCustomData("dialog",a);a=this.getElement();a.setHtml("");a.append(d);if(CKEDITOR.env.ie){var g=CKEDITOR.dom.element.createFromHtml('<span tabindex="-1" style="position:absolute" role="presentation"></span>');g.on("focus",function(){setTimeout(function(){d.$.contentWindow.focus()})});a.append(g);this.focus=function(){g.focus();this.fire("focus")}}this.getInputElement=function(){return d};CKEDITOR.env.ie&&(a.setStyle("display","block"),a.setStyle("height",
d.$.offsetHeight+2+"px"))},commit:function(){var a=this.getDialog().getParentEditor(),b=this.getInputElement().getFrameDocument().getBody(),c=b.getBogus(),d;c&&c.remove();d=b.getHtml();setTimeout(function(){a.fire("pasteDialogCommit",d)},0)}}]}]}});
=======
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.dialog.add( 'paste', function( editor ) {
	var lang = editor.lang.clipboard,
		clipboard = CKEDITOR.plugins.clipboard,
		lastDataTransfer;

	function onPasteFrameLoad( win ) {
		var doc = new CKEDITOR.dom.document( win.document ),
			body = doc.getBody(),
			script = doc.getById( 'cke_actscrpt' );

		script && script.remove();

		body.setAttribute( 'contenteditable', true );

		// Forward dataTransfer (#13883).
		body.on( clipboard.mainPasteEvent, function( evt ) {
			var dataTransfer = clipboard.initPasteDataTransfer( evt );

			if ( !lastDataTransfer ) {
				lastDataTransfer = dataTransfer;
			} else
			// For two paste with the same dataTransfer we can use that dataTransfer (two internal pastes are
			// considered as an internal paste).
			if ( dataTransfer != lastDataTransfer ) {
				// If there were two paste with different DataTransfer objects create a new, empty, data transfer
				// and use it (one internal and one external paste are considered as external paste).
				lastDataTransfer = clipboard.initPasteDataTransfer();
			}
		} );

		// IE before version 8 will leave cursor blinking inside the document after
		// editor blurred unless we clean up the selection. (#4716)
		if ( CKEDITOR.env.ie && CKEDITOR.env.version < 8 ) {
			doc.getWindow().on( 'blur', function() {
				doc.$.selection.empty();
			} );
		}

		doc.on( 'keydown', function( e ) {
			var domEvent = e.data,
				key = domEvent.getKeystroke(),
				processed;

			switch ( key ) {
				case 27:
					this.hide();
					processed = 1;
					break;

				case 9:
				case CKEDITOR.SHIFT + 9:
					this.changeFocus( 1 );
					processed = 1;
			}

			processed && domEvent.preventDefault();
		}, this );

		editor.fire( 'ariaWidget', new CKEDITOR.dom.element( win.frameElement ) );

		// Handle pending focus.
		if ( doc.getWindow().getFrame().removeCustomData( 'pendingFocus' ) )
			body.focus();
	}

	// If pasteDialogCommit wasn't canceled by e.g. editor.getClipboardData
	// then fire paste event.
	// Do not use editor#paste, because it would start from beforePaste event.
	editor.on( 'pasteDialogCommit', function( evt ) {
		if ( evt.data ) {
			editor.fire( 'paste', {
				type: 'auto',
				dataValue: evt.data.dataValue,
				method: 'paste',
				dataTransfer: evt.data.dataTransfer || clipboard.initPasteDataTransfer()
			} );
		}
	}, null, null, 1000 );

	return {
		title: lang.paste,

		minWidth: CKEDITOR.env.ie && CKEDITOR.env.quirks ? 370 : 350,
		minHeight: CKEDITOR.env.quirks ? 250 : 245,
		onShow: function() {
			// FIREFOX BUG: Force the browser to render the dialog to make the to-be-
			// inserted iframe editable. (#3366)
			this.parts.dialog.$.offsetHeight;

			this.setupContent();

			// Reset committed indicator.
			this._.committed = false;
		},

		onLoad: function() {
			if ( ( CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat ) && editor.lang.dir == 'rtl' )
				this.parts.contents.setStyle( 'overflow', 'hidden' );
		},

		onOk: function() {
			this.commitContent();
		},

		contents: [ {
			id: 'general',
			label: editor.lang.common.generalTab,
			elements: [
				{
					type: 'html',
					id: 'pasteMsg',
					html: '<div style="white-space:normal;width:340px">' + lang.pasteMsg + '</div>'
				},
				{
					type: 'html',
					id: 'editing_area',
					style: 'width:100%;height:100%',
					html: '',
					focus: function() {
						var iframe = this.getInputElement(),
							doc = iframe.getFrameDocument(),
							body = doc.getBody();

						// Frame content may not loaded at the moment.
						if ( !body || body.isReadOnly() )
							iframe.setCustomData( 'pendingFocus', 1 );
						else
							body.focus();
					},
					setup: function() {
						var dialog = this.getDialog();
						var htmlToLoad = '<html dir="' + editor.config.contentsLangDirection + '"' +
							' lang="' + ( editor.config.contentsLanguage || editor.langCode ) + '">' +
							'<head><style>body{margin:3px;height:95%;word-break:break-all;}</style></head><body>' +
							'<script id="cke_actscrpt" type="text/javascript">' +
							'window.parent.CKEDITOR.tools.callFunction(' + CKEDITOR.tools.addFunction( onPasteFrameLoad, dialog ) + ',this);' +
							'</script></body>' +
							'</html>';

						var src =
							CKEDITOR.env.air ?
								'javascript:void(0)' : // jshint ignore:line
							( CKEDITOR.env.ie && !CKEDITOR.env.edge ) ?
								'javascript:void((function(){' + encodeURIComponent( // jshint ignore:line
									'document.open();' +
									'(' + CKEDITOR.tools.fixDomain + ')();' +
									'document.close();'
								) + '})())"'
							: '';

						var iframe = CKEDITOR.dom.element.createFromHtml( '<iframe' +
							' class="cke_pasteframe"' +
							' frameborder="0" ' +
							' allowTransparency="true"' +
							' src="' + src + '"' +
							' aria-label="' + lang.pasteArea + '"' +
							' aria-describedby="' + dialog.getContentElement( 'general', 'pasteMsg' ).domId + '"' +
							'></iframe>' );

						// Reset last data transfer.
						lastDataTransfer = null;

						iframe.on( 'load', function( e ) {
							e.removeListener();

							var doc = iframe.getFrameDocument();
							doc.write( htmlToLoad );

							editor.focusManager.add( doc.getBody() );

							if ( CKEDITOR.env.air )
								onPasteFrameLoad.call( this, doc.getWindow().$ );
						}, dialog );

						iframe.setCustomData( 'dialog', dialog );

						var container = this.getElement();
						container.setHtml( '' );
						container.append( iframe );

						// IE need a redirect on focus to make
						// the cursor blinking inside iframe. (#5461)
						if ( CKEDITOR.env.ie && !CKEDITOR.env.edge ) {
							var focusGrabber = CKEDITOR.dom.element.createFromHtml( '<span tabindex="-1" style="position:absolute" role="presentation"></span>' );
							focusGrabber.on( 'focus', function() {
								// Since fixDomain is called in src attribute,
								// IE needs some slight delay to correctly move focus.
								setTimeout( function() {
									iframe.$.contentWindow.focus();
								} );
							} );
							container.append( focusGrabber );

							// Override focus handler on field.
							this.focus = function() {
								focusGrabber.focus();
								this.fire( 'focus' );
							};
						}

						this.getInputElement = function() {
							return iframe;
						};

						// Force container to scale in IE.
						if ( CKEDITOR.env.ie ) {
							container.setStyle( 'display', 'block' );
							container.setStyle( 'height', ( iframe.$.offsetHeight + 2 ) + 'px' );
						}
					},
					commit: function() {
						var editor = this.getDialog().getParentEditor(),
							body = this.getInputElement().getFrameDocument().getBody(),
							bogus = body.getBogus(),
							html;
						bogus && bogus.remove();

						// Saving the contents so changes until paste is complete will not take place (#7500)
						html = body.getHtml();

						this.getDialog()._.committed = true;

						editor.fire( 'pasteDialogCommit', {
							dataValue: html,
							// Avoid error if there was no paste so lastDataTransfer is null.
							dataTransfer: lastDataTransfer || clipboard.initPasteDataTransfer()
						} );
					}
				}
			]
		} ]
	};
} );

/**
 * Internal event to pass the paste dialog data to the listeners.
 *
 * This event was not available in versions 4.7.0-4.8.0.
 *
 * @private
 * @event pasteDialogCommit
 * @member CKEDITOR.editor
 * @param {CKEDITOR.editor} editor This editor instance.
 */
>>>>>>> 4.12.1
