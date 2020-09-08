<<<<<<< HEAD
﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){CKEDITOR.dialog.add("link",function(g){var l=CKEDITOR.plugins.link,m=function(){var a=this.getDialog(),b=a.getContentElement("target","popupFeatures"),a=a.getContentElement("target","linkTargetName"),k=this.getValue();if(b&&a)switch(b=b.getElement(),b.hide(),a.setValue(""),k){case "frame":a.setLabel(g.lang.link.targetFrameName);a.getElement().show();break;case "popup":b.show();a.setLabel(g.lang.link.targetPopupName);a.getElement().show();break;default:a.setValue(k),a.getElement().hide()}},
f=function(a){a.target&&this.setValue(a.target[this.id]||"")},h=function(a){a.advanced&&this.setValue(a.advanced[this.id]||"")},i=function(a){a.target||(a.target={});a.target[this.id]=this.getValue()||""},j=function(a){a.advanced||(a.advanced={});a.advanced[this.id]=this.getValue()||""},c=g.lang.common,b=g.lang.link,d;return{title:b.title,minWidth:350,minHeight:230,contents:[{id:"info",label:b.info,title:b.info,elements:[{id:"linkType",type:"select",label:b.type,"default":"url",items:[[b.toUrl,"url"],
[b.toAnchor,"anchor"],[b.toEmail,"email"]],onChange:function(){var a=this.getDialog(),b=["urlOptions","anchorOptions","emailOptions"],k=this.getValue(),e=a.definition.getContents("upload"),e=e&&e.hidden;"url"==k?(g.config.linkShowTargetTab&&a.showPage("target"),e||a.showPage("upload")):(a.hidePage("target"),e||a.hidePage("upload"));for(e=0;e<b.length;e++){var c=a.getContentElement("info",b[e]);c&&(c=c.getElement().getParent().getParent(),b[e]==k+"Options"?c.show():c.hide())}a.layout()},setup:function(a){this.setValue(a.type||
"url")},commit:function(a){a.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:c.protocol,"default":"http://",items:[["http://‎","http://"],["https://‎","https://"],["ftp://‎","ftp://"],["news://‎","news://"],[b.other,""]],setup:function(a){a.url&&this.setValue(a.url.protocol||"")},commit:function(a){a.url||(a.url={});a.url.protocol=this.getValue()}},{type:"text",id:"url",label:c.url,required:!0,onLoad:function(){this.allowOnChange=
!0},onKeyUp:function(){this.allowOnChange=!1;var a=this.getDialog().getContentElement("info","protocol"),b=this.getValue(),k=/^((javascript:)|[#\/\.\?])/i,c=/^(http|https|ftp|news):\/\/(?=.)/i.exec(b);c?(this.setValue(b.substr(c[0].length)),a.setValue(c[0].toLowerCase())):k.test(b)&&a.setValue("");this.allowOnChange=!0},onChange:function(){if(this.allowOnChange)this.onKeyUp()},validate:function(){var a=this.getDialog();return a.getContentElement("info","linkType")&&"url"!=a.getValueOf("info","linkType")?
!0:!g.config.linkJavaScriptLinksAllowed&&/javascript\:/.test(this.getValue())?(alert(c.invalidValue),!1):this.getDialog().fakeObj?!0:CKEDITOR.dialog.validate.notEmpty(b.noUrl).apply(this)},setup:function(a){this.allowOnChange=!1;a.url&&this.setValue(a.url.url);this.allowOnChange=!0},commit:function(a){this.onChange();a.url||(a.url={});a.url.url=this.getValue();this.allowOnChange=!1}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().show()}},{type:"button",
id:"browse",hidden:"true",filebrowser:"info:url",label:c.browseServer}]},{type:"vbox",id:"anchorOptions",width:260,align:"center",padding:0,children:[{type:"fieldset",id:"selectAnchorText",label:b.selectAnchor,setup:function(){d=l.getEditorAnchors(g);this.getElement()[d&&d.length?"show":"hide"]()},children:[{type:"hbox",id:"selectAnchor",children:[{type:"select",id:"anchorName","default":"",label:b.anchorName,style:"width: 100%;",items:[[""]],setup:function(a){this.clear();this.add("");if(d)for(var b=
0;b<d.length;b++)d[b].name&&this.add(d[b].name);a.anchor&&this.setValue(a.anchor.name);(a=this.getDialog().getContentElement("info","linkType"))&&"email"==a.getValue()&&this.focus()},commit:function(a){a.anchor||(a.anchor={});a.anchor.name=this.getValue()}},{type:"select",id:"anchorId","default":"",label:b.anchorId,style:"width: 100%;",items:[[""]],setup:function(a){this.clear();this.add("");if(d)for(var b=0;b<d.length;b++)d[b].id&&this.add(d[b].id);a.anchor&&this.setValue(a.anchor.id)},commit:function(a){a.anchor||
(a.anchor={});a.anchor.id=this.getValue()}}],setup:function(){this.getElement()[d&&d.length?"show":"hide"]()}}]},{type:"html",id:"noAnchors",style:"text-align: center;",html:'<div role="note" tabIndex="-1">'+CKEDITOR.tools.htmlEncode(b.noAnchors)+"</div>",focus:!0,setup:function(){this.getElement()[d&&d.length?"hide":"show"]()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",
label:b.emailAddress,required:!0,validate:function(){var a=this.getDialog();return!a.getContentElement("info","linkType")||"email"!=a.getValueOf("info","linkType")?!0:CKEDITOR.dialog.validate.notEmpty(b.noEmail).apply(this)},setup:function(a){a.email&&this.setValue(a.email.address);(a=this.getDialog().getContentElement("info","linkType"))&&"email"==a.getValue()&&this.select()},commit:function(a){a.email||(a.email={});a.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:b.emailSubject,
setup:function(a){a.email&&this.setValue(a.email.subject)},commit:function(a){a.email||(a.email={});a.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:b.emailBody,rows:3,"default":"",setup:function(a){a.email&&this.setValue(a.email.body)},commit:function(a){a.email||(a.email={});a.email.body=this.getValue()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}}]},{id:"target",requiredContent:"a[target]",label:b.target,title:b.target,
elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"select",id:"linkTargetType",label:c.target,"default":"notSet",style:"width : 100%;",items:[[c.notSet,"notSet"],[b.targetFrame,"frame"],[b.targetPopup,"popup"],[c.targetNew,"_blank"],[c.targetTop,"_top"],[c.targetSelf,"_self"],[c.targetParent,"_parent"]],onChange:m,setup:function(a){a.target&&this.setValue(a.target.type||"notSet");m.call(this)},commit:function(a){a.target||(a.target={});a.target.type=this.getValue()}},{type:"text",id:"linkTargetName",
label:b.targetFrameName,"default":"",setup:function(a){a.target&&this.setValue(a.target.name)},commit:function(a){a.target||(a.target={});a.target.name=this.getValue().replace(/\W/gi,"")}}]},{type:"vbox",width:"100%",align:"center",padding:2,id:"popupFeatures",children:[{type:"fieldset",label:b.popupFeatures,children:[{type:"hbox",children:[{type:"checkbox",id:"resizable",label:b.popupResizable,setup:f,commit:i},{type:"checkbox",id:"status",label:b.popupStatusBar,setup:f,commit:i}]},{type:"hbox",
children:[{type:"checkbox",id:"location",label:b.popupLocationBar,setup:f,commit:i},{type:"checkbox",id:"toolbar",label:b.popupToolbar,setup:f,commit:i}]},{type:"hbox",children:[{type:"checkbox",id:"menubar",label:b.popupMenuBar,setup:f,commit:i},{type:"checkbox",id:"fullscreen",label:b.popupFullScreen,setup:f,commit:i}]},{type:"hbox",children:[{type:"checkbox",id:"scrollbars",label:b.popupScrollBars,setup:f,commit:i},{type:"checkbox",id:"dependent",label:b.popupDependent,setup:f,commit:i}]},{type:"hbox",
children:[{type:"text",widths:["50%","50%"],labelLayout:"horizontal",label:c.width,id:"width",setup:f,commit:i},{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:b.popupLeft,id:"left",setup:f,commit:i}]},{type:"hbox",children:[{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:c.height,id:"height",setup:f,commit:i},{type:"text",labelLayout:"horizontal",label:b.popupTop,widths:["50%","50%"],id:"top",setup:f,commit:i}]}]}]}]},{id:"upload",label:b.upload,title:b.upload,hidden:!0,
filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:c.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:c.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:b.advanced,title:b.advanced,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",id:"advId",requiredContent:"a[id]",label:b.id,setup:h,commit:j},{type:"select",id:"advLangDir",requiredContent:"a[dir]",label:b.langDir,
"default":"",style:"width:110px",items:[[c.notSet,""],[b.langDirLTR,"ltr"],[b.langDirRTL,"rtl"]],setup:h,commit:j},{type:"text",id:"advAccessKey",requiredContent:"a[accesskey]",width:"80px",label:b.acccessKey,maxLength:1,setup:h,commit:j}]},{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",label:b.name,id:"advName",requiredContent:"a[name]",setup:h,commit:j},{type:"text",label:b.langCode,id:"advLangCode",requiredContent:"a[lang]",width:"110px","default":"",setup:h,commit:j},{type:"text",
label:b.tabIndex,id:"advTabIndex",requiredContent:"a[tabindex]",width:"80px",maxLength:5,setup:h,commit:j}]}]},{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:b.advisoryTitle,requiredContent:"a[title]","default":"",id:"advTitle",setup:h,commit:j},{type:"text",label:b.advisoryContentType,requiredContent:"a[type]","default":"",id:"advContentType",setup:h,commit:j}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:b.cssClasses,requiredContent:"a(cke-xyz)",
"default":"",id:"advCSSClasses",setup:h,commit:j},{type:"text",label:b.charset,requiredContent:"a[charset]","default":"",id:"advCharset",setup:h,commit:j}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:b.rel,requiredContent:"a[rel]","default":"",id:"advRel",setup:h,commit:j},{type:"text",label:b.styles,requiredContent:"a{cke-xyz}","default":"",id:"advStyles",validate:CKEDITOR.dialog.validate.inlineStyle(g.lang.common.invalidInlineStyle),setup:h,commit:j}]}]}]}],onShow:function(){var a=
this.getParentEditor(),b=a.getSelection(),c=null;(c=l.getSelectedLink(a))&&c.hasAttribute("href")?b.getSelectedElement()||b.selectElement(c):c=null;a=l.parseLinkAttributes(a,c);this._.selectedElement=c;this.setupContent(a)},onOk:function(){var a={};this.commitContent(a);var b=g.getSelection(),c=l.getLinkAttributes(g,a);if(this._.selectedElement){var e=this._.selectedElement,d=e.data("cke-saved-href"),f=e.getHtml();e.setAttributes(c.set);e.removeAttributes(c.removed);if(d==f||"email"==a.type&&-1!=
f.indexOf("@"))e.setHtml("email"==a.type?a.email.address:c.set["data-cke-saved-href"]),b.selectElement(e);delete this._.selectedElement}else b=b.getRanges()[0],b.collapsed&&(a=new CKEDITOR.dom.text("email"==a.type?a.email.address:c.set["data-cke-saved-href"],g.document),b.insertNode(a),b.selectNodeContents(a)),c=new CKEDITOR.style({element:"a",attributes:c.set}),c.type=CKEDITOR.STYLE_INLINE,c.applyToRange(b,g),b.select()},onLoad:function(){g.config.linkShowAdvancedTab||this.hidePage("advanced");g.config.linkShowTargetTab||
this.hidePage("target")},onFocus:function(){var a=this.getContentElement("info","linkType");a&&"url"==a.getValue()&&(a=this.getContentElement("info","url"),a.select())}}})})();
=======
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

'use strict';

( function() {
	CKEDITOR.dialog.add( 'link', function( editor ) {
		var plugin = CKEDITOR.plugins.link,
			initialLinkText;

		function createRangeForLink( editor, link ) {
			var range = editor.createRange();

			range.setStartBefore( link );
			range.setEndAfter( link );

			return range;
		}

		function insertLinksIntoSelection( editor, data ) {
			var attributes = plugin.getLinkAttributes( editor, data ),
				ranges = editor.getSelection().getRanges(),
				style = new CKEDITOR.style( {
					element: 'a',
					attributes: attributes.set
				} ),
				rangesToSelect = [],
				range,
				text,
				nestedLinks,
				i,
				j;

			style.type = CKEDITOR.STYLE_INLINE; // need to override... dunno why.

			for ( i = 0; i < ranges.length; i++ ) {
				range = ranges[ i ];

				// Use link URL as text with a collapsed cursor.
				if ( range.collapsed ) {
					// Short mailto link text view (https://dev.ckeditor.com/ticket/5736).
					text = new CKEDITOR.dom.text( data.linkText || ( data.type == 'email' ?
						data.email.address : attributes.set[ 'data-cke-saved-href' ] ), editor.document );
					range.insertNode( text );
					range.selectNodeContents( text );
				} else if ( initialLinkText !== data.linkText ) {
					text = new CKEDITOR.dom.text( data.linkText, editor.document );

					// Shrink range to preserve block element.
					range.shrink( CKEDITOR.SHRINK_TEXT );

					// Use extractHtmlFromRange to remove markup within the selection. Also this method is a little
					// smarter than range#deleteContents as it plays better e.g. with table cells.
					editor.editable().extractHtmlFromRange( range );

					range.insertNode( text );
				}

				// Editable links nested within current range should be removed, so that the link is applied to whole selection.
				nestedLinks = range._find( 'a' );

				for	( j = 0; j < nestedLinks.length; j++ ) {
					nestedLinks[ j ].remove( true );
				}


				// Apply style.
				style.applyToRange( range, editor );

				rangesToSelect.push( range );
			}

			editor.getSelection().selectRanges( rangesToSelect );
		}

		function editLinksInSelection( editor, selectedElements, data ) {
			var attributes = plugin.getLinkAttributes( editor, data ),
				ranges = [],
				element,
				href,
				textView,
				newText,
				i;

			for ( i = 0; i < selectedElements.length; i++ ) {
				// We're only editing an existing link, so just overwrite the attributes.
				element = selectedElements[ i ];
				href = element.data( 'cke-saved-href' );
				textView = element.getHtml();

				element.setAttributes( attributes.set );
				element.removeAttributes( attributes.removed );


				if ( data.linkText && initialLinkText != data.linkText ) {
					// Display text has been changed.
					newText = data.linkText;
				} else if ( href == textView || data.type == 'email' && textView.indexOf( '@' ) != -1 ) {
					// Update text view when user changes protocol (https://dev.ckeditor.com/ticket/4612).
					// Short mailto link text view (https://dev.ckeditor.com/ticket/5736).
					newText = data.type == 'email' ? data.email.address : attributes.set[ 'data-cke-saved-href' ];
				}

				if ( newText ) {
					element.setText( newText );
				}

				ranges.push( createRangeForLink( editor, element ) );
			}

			// We changed the content, so need to select it again.
			editor.getSelection().selectRanges( ranges );
		}

		// Handles the event when the "Target" selection box is changed.
		var targetChanged = function() {
				var dialog = this.getDialog(),
					popupFeatures = dialog.getContentElement( 'target', 'popupFeatures' ),
					targetName = dialog.getContentElement( 'target', 'linkTargetName' ),
					value = this.getValue();

				if ( !popupFeatures || !targetName )
					return;

				popupFeatures = popupFeatures.getElement();
				popupFeatures.hide();
				targetName.setValue( '' );

				switch ( value ) {
					case 'frame':
						targetName.setLabel( editor.lang.link.targetFrameName );
						targetName.getElement().show();
						break;
					case 'popup':
						popupFeatures.show();
						targetName.setLabel( editor.lang.link.targetPopupName );
						targetName.getElement().show();
						break;
					default:
						targetName.setValue( value );
						targetName.getElement().hide();
						break;
				}

			};

		// Handles the event when the "Type" selection box is changed.
		var linkTypeChanged = function() {
				var dialog = this.getDialog(),
					partIds = [ 'urlOptions', 'anchorOptions', 'emailOptions', 'telOptions' ],
					typeValue = this.getValue(),
					uploadTab = dialog.definition.getContents( 'upload' ),
					uploadInitiallyHidden = uploadTab && uploadTab.hidden;

				if ( typeValue == 'url' ) {
					if ( editor.config.linkShowTargetTab )
						dialog.showPage( 'target' );
					if ( !uploadInitiallyHidden )
						dialog.showPage( 'upload' );
				} else {
					dialog.hidePage( 'target' );
					if ( !uploadInitiallyHidden )
						dialog.hidePage( 'upload' );
				}

				for ( var i = 0; i < partIds.length; i++ ) {
					var element = dialog.getContentElement( 'info', partIds[ i ] );
					if ( !element )
						continue;

					element = element.getElement().getParent().getParent();
					if ( partIds[ i ] == typeValue + 'Options' )
						element.show();
					else
						element.hide();
				}

				dialog.layout();
			};

		var setupParams = function( page, data ) {
				if ( data[ page ] )
					this.setValue( data[ page ][ this.id ] || '' );
			};

		var setupPopupParams = function( data ) {
				return setupParams.call( this, 'target', data );
			};

		var setupAdvParams = function( data ) {
				return setupParams.call( this, 'advanced', data );
			};

		var commitParams = function( page, data ) {
				if ( !data[ page ] )
					data[ page ] = {};

				data[ page ][ this.id ] = this.getValue() || '';
			};

		var commitPopupParams = function( data ) {
				return commitParams.call( this, 'target', data );
			};

		var commitAdvParams = function( data ) {
				return commitParams.call( this, 'advanced', data );
			};

		var commonLang = editor.lang.common,
			linkLang = editor.lang.link,
			anchors;

		return {
			title: linkLang.title,
			minWidth: ( CKEDITOR.skinName || editor.config.skin ) == 'moono-lisa' ? 450 : 350,
			minHeight: 240,
			contents: [ {
				id: 'info',
				label: linkLang.info,
				title: linkLang.info,
				elements: [ {
					type: 'text',
					id: 'linkDisplayText',
					label: linkLang.displayText,
					setup: function() {
						this.enable();

						this.setValue( editor.getSelection().getSelectedText() );

						// Keep inner text so that it can be compared in commit function. By obtaining value from getData()
						// we get value stripped from new line chars which is important when comparing the value later on.
						initialLinkText = this.getValue();
					},
					commit: function( data ) {
						data.linkText = this.isEnabled() ? this.getValue() : '';
					}
				},
				{
					id: 'linkType',
					type: 'select',
					label: linkLang.type,
					'default': 'url',
					items: [
						[ linkLang.toUrl, 'url' ],
						[ linkLang.toAnchor, 'anchor' ],
						[ linkLang.toEmail, 'email' ],
						[ linkLang.toPhone, 'tel' ]
					],
					onChange: linkTypeChanged,
					setup: function( data ) {
						this.setValue( data.type || 'url' );
					},
					commit: function( data ) {
						data.type = this.getValue();
					}
				},
				{
					type: 'vbox',
					id: 'urlOptions',
					children: [ {
						type: 'hbox',
						widths: [ '25%', '75%' ],
						children: [ {
							id: 'protocol',
							type: 'select',
							label: commonLang.protocol,
							'default': 'http://',
							items: [
								// Force 'ltr' for protocol names in BIDI. (https://dev.ckeditor.com/ticket/5433)
								[ 'http://\u200E', 'http://' ],
								[ 'https://\u200E', 'https://' ],
								[ 'ftp://\u200E', 'ftp://' ],
								[ 'news://\u200E', 'news://' ],
								[ linkLang.other, '' ]
							],
							setup: function( data ) {
								if ( data.url )
									this.setValue( data.url.protocol || '' );
							},
							commit: function( data ) {
								if ( !data.url )
									data.url = {};

								data.url.protocol = this.getValue();
							}
						},
						{
							type: 'text',
							id: 'url',
							label: commonLang.url,
							required: true,
							onLoad: function() {
								this.allowOnChange = true;
							},
							onKeyUp: function() {
								this.allowOnChange = false;
								var protocolCmb = this.getDialog().getContentElement( 'info', 'protocol' ),
									url = this.getValue(),
									urlOnChangeProtocol = /^(http|https|ftp|news):\/\/(?=.)/i,
									urlOnChangeTestOther = /^((javascript:)|[#\/\.\?])/i;

								var protocol = urlOnChangeProtocol.exec( url );
								if ( protocol ) {
									this.setValue( url.substr( protocol[ 0 ].length ) );
									protocolCmb.setValue( protocol[ 0 ].toLowerCase() );
								} else if ( urlOnChangeTestOther.test( url ) ) {
									protocolCmb.setValue( '' );
								}

								this.allowOnChange = true;
							},
							onChange: function() {
								if ( this.allowOnChange ) // Dont't call on dialog load.
								this.onKeyUp();
							},
							validate: function() {
								var dialog = this.getDialog();

								if ( dialog.getContentElement( 'info', 'linkType' ) && dialog.getValueOf( 'info', 'linkType' ) != 'url' )
									return true;

								if ( !editor.config.linkJavaScriptLinksAllowed && ( /javascript\:/ ).test( this.getValue() ) ) {
									alert( commonLang.invalidValue ); // jshint ignore:line
									return false;
								}

								if ( this.getDialog().fakeObj ) // Edit Anchor.
								return true;

								var func = CKEDITOR.dialog.validate.notEmpty( linkLang.noUrl );
								return func.apply( this );
							},
							setup: function( data ) {
								this.allowOnChange = false;
								if ( data.url )
									this.setValue( data.url.url );
								this.allowOnChange = true;

							},
							commit: function( data ) {
								// IE will not trigger the onChange event if the mouse has been used
								// to carry all the operations https://dev.ckeditor.com/ticket/4724
								this.onChange();

								if ( !data.url )
									data.url = {};

								data.url.url = this.getValue();
								this.allowOnChange = false;
							}
						} ],
						setup: function() {
							if ( !this.getDialog().getContentElement( 'info', 'linkType' ) )
								this.getElement().show();
						}
					},
					{
						type: 'button',
						id: 'browse',
						hidden: 'true',
						filebrowser: 'info:url',
						label: commonLang.browseServer
					} ]
				},
				{
					type: 'vbox',
					id: 'anchorOptions',
					width: 260,
					align: 'center',
					padding: 0,
					children: [ {
						type: 'fieldset',
						id: 'selectAnchorText',
						label: linkLang.selectAnchor,
						setup: function() {
							anchors = plugin.getEditorAnchors( editor );

							this.getElement()[ anchors && anchors.length ? 'show' : 'hide' ]();
						},
						children: [ {
							type: 'hbox',
							id: 'selectAnchor',
							children: [ {
								type: 'select',
								id: 'anchorName',
								'default': '',
								label: linkLang.anchorName,
								style: 'width: 100%;',
								items: [
									[ '' ]
								],
								setup: function( data ) {
									this.clear();
									this.add( '' );

									if ( anchors ) {
										for ( var i = 0; i < anchors.length; i++ ) {
											if ( anchors[ i ].name )
												this.add( anchors[ i ].name );
										}
									}

									if ( data.anchor )
										this.setValue( data.anchor.name );

									var linkType = this.getDialog().getContentElement( 'info', 'linkType' );
									if ( linkType && linkType.getValue() == 'email' )
										this.focus();
								},
								commit: function( data ) {
									if ( !data.anchor )
										data.anchor = {};

									data.anchor.name = this.getValue();
								}
							},
							{
								type: 'select',
								id: 'anchorId',
								'default': '',
								label: linkLang.anchorId,
								style: 'width: 100%;',
								items: [
									[ '' ]
								],
								setup: function( data ) {
									this.clear();
									this.add( '' );

									if ( anchors ) {
										for ( var i = 0; i < anchors.length; i++ ) {
											if ( anchors[ i ].id )
												this.add( anchors[ i ].id );
										}
									}

									if ( data.anchor )
										this.setValue( data.anchor.id );
								},
								commit: function( data ) {
									if ( !data.anchor )
										data.anchor = {};

									data.anchor.id = this.getValue();
								}
							} ],
							setup: function() {
								this.getElement()[ anchors && anchors.length ? 'show' : 'hide' ]();
							}
						} ]
					},
					{
						type: 'html',
						id: 'noAnchors',
						style: 'text-align: center;',
						html: '<div role="note" tabIndex="-1">' + CKEDITOR.tools.htmlEncode( linkLang.noAnchors ) + '</div>',
						// Focus the first element defined in above html.
						focus: true,
						setup: function() {
							this.getElement()[ anchors && anchors.length ? 'hide' : 'show' ]();
						}
					} ],
					setup: function() {
						if ( !this.getDialog().getContentElement( 'info', 'linkType' ) )
							this.getElement().hide();
					}
				},
				{
					type: 'vbox',
					id: 'emailOptions',
					padding: 1,
					children: [ {
						type: 'text',
						id: 'emailAddress',
						label: linkLang.emailAddress,
						required: true,
						validate: function() {
							var dialog = this.getDialog();

							if ( !dialog.getContentElement( 'info', 'linkType' ) || dialog.getValueOf( 'info', 'linkType' ) != 'email' )
								return true;

							var func = CKEDITOR.dialog.validate.notEmpty( linkLang.noEmail );
							return func.apply( this );
						},
						setup: function( data ) {
							if ( data.email )
								this.setValue( data.email.address );

							var linkType = this.getDialog().getContentElement( 'info', 'linkType' );
							if ( linkType && linkType.getValue() == 'email' )
								this.select();
						},
						commit: function( data ) {
							if ( !data.email )
								data.email = {};

							data.email.address = this.getValue();
						}
					},
					{
						type: 'text',
						id: 'emailSubject',
						label: linkLang.emailSubject,
						setup: function( data ) {
							if ( data.email )
								this.setValue( data.email.subject );
						},
						commit: function( data ) {
							if ( !data.email )
								data.email = {};

							data.email.subject = this.getValue();
						}
					},
					{
						type: 'textarea',
						id: 'emailBody',
						label: linkLang.emailBody,
						rows: 3,
						'default': '',
						setup: function( data ) {
							if ( data.email )
								this.setValue( data.email.body );
						},
						commit: function( data ) {
							if ( !data.email )
								data.email = {};

							data.email.body = this.getValue();
						}
					} ],
					setup: function() {
						if ( !this.getDialog().getContentElement( 'info', 'linkType' ) )
							this.getElement().hide();
					}
				},
				{
					type: 'vbox',
					id: 'telOptions',
					padding: 1,
					children: [ {
						type: 'tel',
						id: 'telNumber',
						label: linkLang.phoneNumber,
						required: true,
						validate: validateTelNumber,
						setup: function( data ) {
							if ( data.tel ) {
								this.setValue( data.tel );
							}

							var linkType = this.getDialog().getContentElement( 'info', 'linkType' );
							if ( linkType && linkType.getValue() == 'tel' ) {
								this.select();
							}
						},
						commit: function( data ) {
							data.tel = this.getValue();
						}
					} ],
					setup: function() {
						if ( !this.getDialog().getContentElement( 'info', 'linkType' ) ) {
							this.getElement().hide();
						}
					}
				} ]
			},
			{
				id: 'target',
				requiredContent: 'a[target]', // This is not fully correct, because some target option requires JS.
				label: linkLang.target,
				title: linkLang.target,
				elements: [ {
					type: 'hbox',
					widths: [ '50%', '50%' ],
					children: [ {
						type: 'select',
						id: 'linkTargetType',
						label: commonLang.target,
						'default': 'notSet',
						style: 'width : 100%;',
						'items': [
							[ commonLang.notSet, 'notSet' ],
							[ linkLang.targetFrame, 'frame' ],
							[ linkLang.targetPopup, 'popup' ],
							[ commonLang.targetNew, '_blank' ],
							[ commonLang.targetTop, '_top' ],
							[ commonLang.targetSelf, '_self' ],
							[ commonLang.targetParent, '_parent' ]
						],
						onChange: targetChanged,
						setup: function( data ) {
							if ( data.target )
								this.setValue( data.target.type || 'notSet' );
							targetChanged.call( this );
						},
						commit: function( data ) {
							if ( !data.target )
								data.target = {};

							data.target.type = this.getValue();
						}
					},
					{
						type: 'text',
						id: 'linkTargetName',
						label: linkLang.targetFrameName,
						'default': '',
						setup: function( data ) {
							if ( data.target )
								this.setValue( data.target.name );
						},
						commit: function( data ) {
							if ( !data.target )
								data.target = {};

							data.target.name = this.getValue().replace( /([^\x00-\x7F]|\s)/gi, '' );
						}
					} ]
				},
				{
					type: 'vbox',
					width: '100%',
					align: 'center',
					padding: 2,
					id: 'popupFeatures',
					children: [ {
						type: 'fieldset',
						label: linkLang.popupFeatures,
						children: [ {
							type: 'hbox',
							children: [ {
								type: 'checkbox',
								id: 'resizable',
								label: linkLang.popupResizable,
								setup: setupPopupParams,
								commit: commitPopupParams
							},
							{
								type: 'checkbox',
								id: 'status',
								label: linkLang.popupStatusBar,
								setup: setupPopupParams,
								commit: commitPopupParams

							} ]
						},
						{
							type: 'hbox',
							children: [ {
								type: 'checkbox',
								id: 'location',
								label: linkLang.popupLocationBar,
								setup: setupPopupParams,
								commit: commitPopupParams

							},
							{
								type: 'checkbox',
								id: 'toolbar',
								label: linkLang.popupToolbar,
								setup: setupPopupParams,
								commit: commitPopupParams

							} ]
						},
						{
							type: 'hbox',
							children: [ {
								type: 'checkbox',
								id: 'menubar',
								label: linkLang.popupMenuBar,
								setup: setupPopupParams,
								commit: commitPopupParams

							},
							{
								type: 'checkbox',
								id: 'fullscreen',
								label: linkLang.popupFullScreen,
								setup: setupPopupParams,
								commit: commitPopupParams

							} ]
						},
						{
							type: 'hbox',
							children: [ {
								type: 'checkbox',
								id: 'scrollbars',
								label: linkLang.popupScrollBars,
								setup: setupPopupParams,
								commit: commitPopupParams

							},
							{
								type: 'checkbox',
								id: 'dependent',
								label: linkLang.popupDependent,
								setup: setupPopupParams,
								commit: commitPopupParams

							} ]
						},
						{
							type: 'hbox',
							children: [ {
								type: 'text',
								widths: [ '50%', '50%' ],
								labelLayout: 'horizontal',
								label: commonLang.width,
								id: 'width',
								setup: setupPopupParams,
								commit: commitPopupParams

							},
							{
								type: 'text',
								labelLayout: 'horizontal',
								widths: [ '50%', '50%' ],
								label: linkLang.popupLeft,
								id: 'left',
								setup: setupPopupParams,
								commit: commitPopupParams

							} ]
						},
						{
							type: 'hbox',
							children: [ {
								type: 'text',
								labelLayout: 'horizontal',
								widths: [ '50%', '50%' ],
								label: commonLang.height,
								id: 'height',
								setup: setupPopupParams,
								commit: commitPopupParams

							},
							{
								type: 'text',
								labelLayout: 'horizontal',
								label: linkLang.popupTop,
								widths: [ '50%', '50%' ],
								id: 'top',
								setup: setupPopupParams,
								commit: commitPopupParams

							} ]
						} ]
					} ]
				} ]
			},
			{
				id: 'upload',
				label: linkLang.upload,
				title: linkLang.upload,
				hidden: true,
				filebrowser: 'uploadButton',
				elements: [ {
					type: 'file',
					id: 'upload',
					label: commonLang.upload,
					style: 'height:40px',
					size: 29
				},
				{
					type: 'fileButton',
					id: 'uploadButton',
					label: commonLang.uploadSubmit,
					filebrowser: 'info:url',
					'for': [ 'upload', 'upload' ]
				} ]
			},
			{
				id: 'advanced',
				label: linkLang.advanced,
				title: linkLang.advanced,
				elements: [ {
					type: 'vbox',
					padding: 1,
					children: [ {
						type: 'hbox',
						widths: [ '45%', '35%', '20%' ],
						children: [ {
							type: 'text',
							id: 'advId',
							requiredContent: 'a[id]',
							label: linkLang.id,
							setup: setupAdvParams,
							commit: commitAdvParams
						},
						{
							type: 'select',
							id: 'advLangDir',
							requiredContent: 'a[dir]',
							label: linkLang.langDir,
							'default': '',
							style: 'width:110px',
							items: [
								[ commonLang.notSet, '' ],
								[ linkLang.langDirLTR, 'ltr' ],
								[ linkLang.langDirRTL, 'rtl' ]
							],
							setup: setupAdvParams,
							commit: commitAdvParams
						},
						{
							type: 'text',
							id: 'advAccessKey',
							requiredContent: 'a[accesskey]',
							width: '80px',
							label: linkLang.acccessKey,
							maxLength: 1,
							setup: setupAdvParams,
							commit: commitAdvParams

						} ]
					},
					{
						type: 'hbox',
						widths: [ '45%', '35%', '20%' ],
						children: [ {
							type: 'text',
							label: linkLang.name,
							id: 'advName',
							requiredContent: 'a[name]',
							setup: setupAdvParams,
							commit: commitAdvParams

						},
						{
							type: 'text',
							label: linkLang.langCode,
							id: 'advLangCode',
							requiredContent: 'a[lang]',
							width: '110px',
							'default': '',
							setup: setupAdvParams,
							commit: commitAdvParams

						},
						{
							type: 'text',
							label: linkLang.tabIndex,
							id: 'advTabIndex',
							requiredContent: 'a[tabindex]',
							width: '80px',
							maxLength: 5,
							setup: setupAdvParams,
							commit: commitAdvParams

						} ]
					} ]
				},
				{
					type: 'vbox',
					padding: 1,
					children: [ {
						type: 'hbox',
						widths: [ '45%', '55%' ],
						children: [ {
							type: 'text',
							label: linkLang.advisoryTitle,
							requiredContent: 'a[title]',
							'default': '',
							id: 'advTitle',
							setup: setupAdvParams,
							commit: commitAdvParams

						},
						{
							type: 'text',
							label: linkLang.advisoryContentType,
							requiredContent: 'a[type]',
							'default': '',
							id: 'advContentType',
							setup: setupAdvParams,
							commit: commitAdvParams

						} ]
					},
					{
						type: 'hbox',
						widths: [ '45%', '55%' ],
						children: [ {
							type: 'text',
							label: linkLang.cssClasses,
							requiredContent: 'a(cke-xyz)', // Random text like 'xyz' will check if all are allowed.
							'default': '',
							id: 'advCSSClasses',
							setup: setupAdvParams,
							commit: commitAdvParams

						},
						{
							type: 'text',
							label: linkLang.charset,
							requiredContent: 'a[charset]',
							'default': '',
							id: 'advCharset',
							setup: setupAdvParams,
							commit: commitAdvParams

						} ]
					},
					{
						type: 'hbox',
						widths: [ '45%', '55%' ],
						children: [ {
							type: 'text',
							label: linkLang.rel,
							requiredContent: 'a[rel]',
							'default': '',
							id: 'advRel',
							setup: setupAdvParams,
							commit: commitAdvParams
						},
						{
							type: 'text',
							label: linkLang.styles,
							requiredContent: 'a{cke-xyz}', // Random text like 'xyz' will check if all are allowed.
							'default': '',
							id: 'advStyles',
							validate: CKEDITOR.dialog.validate.inlineStyle( editor.lang.common.invalidInlineStyle ),
							setup: setupAdvParams,
							commit: commitAdvParams
						} ]
					},
					{
						type: 'hbox',
						widths: [ '45%', '55%' ],
						children: [ {
							type: 'checkbox',
							id: 'download',
							requiredContent: 'a[download]',
							label: linkLang.download,
							setup: function( data ) {
								if ( data.download !== undefined )
									this.setValue( 'checked', 'checked' );
							},
							commit: function( data ) {
								if ( this.getValue() ) {
									data.download = this.getValue();
								}
							}
						} ]
					} ]
				} ]
			} ],
			onShow: function() {
				var editor = this.getParentEditor(),
					selection = editor.getSelection(),
					displayTextField = this.getContentElement( 'info', 'linkDisplayText' ).getElement().getParent().getParent(),
					elements = plugin.getSelectedLink( editor, true ),
					firstLink = elements[ 0 ] || null;

				// Fill in all the relevant fields if there's already one link selected.
				if ( firstLink && firstLink.hasAttribute( 'href' ) ) {
					// Don't change selection if some element is already selected.
					// For example - don't destroy fake selection.
					if ( !selection.getSelectedElement() && !selection.isInTable() ) {
						selection.selectElement( firstLink );
					}
				}

				var data = plugin.parseLinkAttributes( editor, firstLink );

				// Here we'll decide whether or not we want to show Display Text field.
				if ( elements.length <= 1 && plugin.showDisplayTextForElement( firstLink, editor ) ) {
					displayTextField.show();
				} else {
					displayTextField.hide();
				}

				// Record down the selected element in the dialog.
				this._.selectedElements = elements;

				this.setupContent( data );
			},
			onOk: function() {
				var data = {};

				// Collect data from fields.
				this.commitContent( data );

				if ( !this._.selectedElements.length ) {
					insertLinksIntoSelection( editor, data );
				} else {
					editLinksInSelection( editor, this._.selectedElements, data );

					delete this._.selectedElements;
				}
			},
			onLoad: function() {
				if ( !editor.config.linkShowAdvancedTab )
					this.hidePage( 'advanced' ); //Hide Advanded tab.

				if ( !editor.config.linkShowTargetTab )
					this.hidePage( 'target' ); //Hide Target tab.
			},
			// Inital focus on 'url' field if link is of type URL.
			onFocus: function() {
				var linkType = this.getContentElement( 'info', 'linkType' ),
					urlField;

				if ( linkType && linkType.getValue() == 'url' ) {
					urlField = this.getContentElement( 'info', 'url' );
					urlField.select();
				}
			}
		};
	} );

	function validateTelNumber() {
		var dialog = this.getDialog(),
			editor = dialog._.editor,
			regExp =  editor.config.linkPhoneRegExp,
			msg = editor.config.linkPhoneMsg,
			linkLang = editor.lang.link,
			messageWhenEmpty = CKEDITOR.dialog.validate.notEmpty( linkLang.noTel ).apply( this );

		if ( !dialog.getContentElement( 'info', 'linkType' ) || dialog.getValueOf( 'info', 'linkType' ) != 'tel' ) {
			return true;
		}

		if ( messageWhenEmpty !== true ) {
			return messageWhenEmpty;
		}

		if ( regExp ) {
			return CKEDITOR.dialog.validate.regex( regExp, msg ).call( this );
		}
	}
} )();
// jscs:disable maximumLineLength
/**
 * The e-mail address anti-spam protection option. The protection will be
 * applied when creating or modifying e-mail links through the editor interface.
 *
 * Two methods of protection can be chosen:
 *
 * 1. The e-mail parts (name, domain, and any other query string) are
 *     assembled into a function call pattern. Such function must be
 *     provided by the developer in the pages that will use the contents.
 * 2. Only the e-mail address is obfuscated into a special string that
 *     has no meaning for humans or spam bots, but which is properly
 *     rendered and accepted by the browser.
 *
 * Both approaches require JavaScript to be enabled.
 *
 *		// href="mailto:tester@ckeditor.com?subject=subject&body=body"
 *		config.emailProtection = '';
 *
 *		// href="<a href=\"javascript:void(location.href=\'mailto:\'+String.fromCharCode(116,101,115,116,101,114,64,99,107,101,100,105,116,111,114,46,99,111,109)+\'?subject=subject&body=body\')\">e-mail</a>"
 *		config.emailProtection = 'encode';
 *
 *		// href="javascript:mt('tester','ckeditor.com','subject','body')"
 *		config.emailProtection = 'mt(NAME,DOMAIN,SUBJECT,BODY)';
 *
 * @since 3.1.0
 * @cfg {String} [emailProtection='' (empty string = disabled)]
 * @member CKEDITOR.config
 */
>>>>>>> 4.12.1
