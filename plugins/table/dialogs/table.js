<<<<<<< HEAD
﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){function r(a){for(var e=0,l=0,k=0,m,g=a.$.rows.length;k<g;k++){m=a.$.rows[k];for(var d=e=0,c,b=m.cells.length;d<b;d++)c=m.cells[d],e+=c.colSpan;e>l&&(l=e)}return l}function o(a){return function(){var e=this.getValue(),e=!!(CKEDITOR.dialog.validate.integer()(e)&&0<e);e||(alert(a),this.select());return e}}function n(a,e){var l=function(g){return new CKEDITOR.dom.element(g,a.document)},n=a.editable(),m=a.plugins.dialogadvtab;return{title:a.lang.table.title,minWidth:310,minHeight:CKEDITOR.env.ie?
310:280,onLoad:function(){var g=this,a=g.getContentElement("advanced","advStyles");if(a)a.on("change",function(){var a=this.getStyle("width",""),b=g.getContentElement("info","txtWidth");b&&b.setValue(a,!0);a=this.getStyle("height","");(b=g.getContentElement("info","txtHeight"))&&b.setValue(a,!0)})},onShow:function(){var g=a.getSelection(),d=g.getRanges(),c,b=this.getContentElement("info","txtRows"),h=this.getContentElement("info","txtCols"),p=this.getContentElement("info","txtWidth"),f=this.getContentElement("info",
"txtHeight");"tableProperties"==e&&((g=g.getSelectedElement())&&g.is("table")?c=g:0<d.length&&(CKEDITOR.env.webkit&&d[0].shrink(CKEDITOR.NODE_ELEMENT),c=a.elementPath(d[0].getCommonAncestor(!0)).contains("table",1)),this._.selectedElement=c);c?(this.setupContent(c),b&&b.disable(),h&&h.disable()):(b&&b.enable(),h&&h.enable());p&&p.onChange();f&&f.onChange()},onOk:function(){var g=a.getSelection(),d=this._.selectedElement&&g.createBookmarks(),c=this._.selectedElement||l("table"),b={};this.commitContent(b,
c);if(b.info){b=b.info;if(!this._.selectedElement)for(var h=c.append(l("tbody")),e=parseInt(b.txtRows,10)||0,f=parseInt(b.txtCols,10)||0,i=0;i<e;i++)for(var j=h.append(l("tr")),k=0;k<f;k++)j.append(l("td")).appendBogus();e=b.selHeaders;if(!c.$.tHead&&("row"==e||"both"==e)){j=new CKEDITOR.dom.element(c.$.createTHead());h=c.getElementsByTag("tbody").getItem(0);h=h.getElementsByTag("tr").getItem(0);for(i=0;i<h.getChildCount();i++)f=h.getChild(i),f.type==CKEDITOR.NODE_ELEMENT&&!f.data("cke-bookmark")&&
(f.renameNode("th"),f.setAttribute("scope","col"));j.append(h.remove())}if(null!==c.$.tHead&&!("row"==e||"both"==e)){j=new CKEDITOR.dom.element(c.$.tHead);h=c.getElementsByTag("tbody").getItem(0);for(k=h.getFirst();0<j.getChildCount();){h=j.getFirst();for(i=0;i<h.getChildCount();i++)f=h.getChild(i),f.type==CKEDITOR.NODE_ELEMENT&&(f.renameNode("td"),f.removeAttribute("scope"));h.insertBefore(k)}j.remove()}if(!this.hasColumnHeaders&&("col"==e||"both"==e))for(j=0;j<c.$.rows.length;j++)f=new CKEDITOR.dom.element(c.$.rows[j].cells[0]),
f.renameNode("th"),f.setAttribute("scope","row");if(this.hasColumnHeaders&&!("col"==e||"both"==e))for(i=0;i<c.$.rows.length;i++)j=new CKEDITOR.dom.element(c.$.rows[i]),"tbody"==j.getParent().getName()&&(f=new CKEDITOR.dom.element(j.$.cells[0]),f.renameNode("td"),f.removeAttribute("scope"));b.txtHeight?c.setStyle("height",b.txtHeight):c.removeStyle("height");b.txtWidth?c.setStyle("width",b.txtWidth):c.removeStyle("width");c.getAttribute("style")||c.removeAttribute("style")}if(this._.selectedElement)try{g.selectBookmarks(d)}catch(m){}else a.insertElement(c),
setTimeout(function(){var g=new CKEDITOR.dom.element(c.$.rows[0].cells[0]),b=a.createRange();b.moveToPosition(g,CKEDITOR.POSITION_AFTER_START);b.select()},0)},contents:[{id:"info",label:a.lang.table.title,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"txtRows","default":3,label:a.lang.table.rows,required:!0,controlStyle:"width:5em",validate:o(a.lang.table.invalidRows),setup:function(a){this.setValue(a.$.rows.length)},
commit:k},{type:"text",id:"txtCols","default":2,label:a.lang.table.columns,required:!0,controlStyle:"width:5em",validate:o(a.lang.table.invalidCols),setup:function(a){this.setValue(r(a))},commit:k},{type:"html",html:"&nbsp;"},{type:"select",id:"selHeaders",requiredContent:"th","default":"",label:a.lang.table.headers,items:[[a.lang.table.headersNone,""],[a.lang.table.headersRow,"row"],[a.lang.table.headersColumn,"col"],[a.lang.table.headersBoth,"both"]],setup:function(a){var d=this.getDialog();d.hasColumnHeaders=
!0;for(var c=0;c<a.$.rows.length;c++){var b=a.$.rows[c].cells[0];if(b&&"th"!=b.nodeName.toLowerCase()){d.hasColumnHeaders=!1;break}}null!==a.$.tHead?this.setValue(d.hasColumnHeaders?"both":"row"):this.setValue(d.hasColumnHeaders?"col":"")},commit:k},{type:"text",id:"txtBorder",requiredContent:"table[border]","default":a.filter.check("table[border]")?1:0,label:a.lang.table.border,controlStyle:"width:3em",validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidBorder),setup:function(a){this.setValue(a.getAttribute("border")||
"")},commit:function(a,d){this.getValue()?d.setAttribute("border",this.getValue()):d.removeAttribute("border")}},{id:"cmbAlign",type:"select",requiredContent:"table[align]","default":"",label:a.lang.common.align,items:[[a.lang.common.notSet,""],[a.lang.common.alignLeft,"left"],[a.lang.common.alignCenter,"center"],[a.lang.common.alignRight,"right"]],setup:function(a){this.setValue(a.getAttribute("align")||"")},commit:function(a,d){this.getValue()?d.setAttribute("align",this.getValue()):d.removeAttribute("align")}}]},
{type:"vbox",padding:0,children:[{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtWidth",requiredContent:"table{width}",controlStyle:"width:5em",label:a.lang.common.width,title:a.lang.common.cssLengthTooltip,"default":a.filter.check("table{width}")?500>n.getSize("width")?"100%":500:0,getValue:q,validate:CKEDITOR.dialog.validate.cssLength(a.lang.common.invalidCssLength.replace("%1",a.lang.common.width)),onChange:function(){var a=this.getDialog().getContentElement("advanced","advStyles");a&&
a.updateStyle("width",this.getValue())},setup:function(a){this.setValue(a.getStyle("width"))},commit:k}]},{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtHeight",requiredContent:"table{height}",controlStyle:"width:5em",label:a.lang.common.height,title:a.lang.common.cssLengthTooltip,"default":"",getValue:q,validate:CKEDITOR.dialog.validate.cssLength(a.lang.common.invalidCssLength.replace("%1",a.lang.common.height)),onChange:function(){var a=this.getDialog().getContentElement("advanced","advStyles");
a&&a.updateStyle("height",this.getValue())},setup:function(a){(a=a.getStyle("height"))&&this.setValue(a)},commit:k}]},{type:"html",html:"&nbsp;"},{type:"text",id:"txtCellSpace",requiredContent:"table[cellspacing]",controlStyle:"width:3em",label:a.lang.table.cellSpace,"default":a.filter.check("table[cellspacing]")?1:0,validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidCellSpacing),setup:function(a){this.setValue(a.getAttribute("cellSpacing")||"")},commit:function(a,d){this.getValue()?d.setAttribute("cellSpacing",
this.getValue()):d.removeAttribute("cellSpacing")}},{type:"text",id:"txtCellPad",requiredContent:"table[cellpadding]",controlStyle:"width:3em",label:a.lang.table.cellPad,"default":a.filter.check("table[cellpadding]")?1:0,validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidCellPadding),setup:function(a){this.setValue(a.getAttribute("cellPadding")||"")},commit:function(a,d){this.getValue()?d.setAttribute("cellPadding",this.getValue()):d.removeAttribute("cellPadding")}}]}]},{type:"html",align:"right",
html:""},{type:"vbox",padding:0,children:[{type:"text",id:"txtCaption",requiredContent:"caption",label:a.lang.table.caption,setup:function(a){this.enable();a=a.getElementsByTag("caption");if(0<a.count()){var a=a.getItem(0),d=a.getFirst(CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT));d&&!d.equals(a.getBogus())?(this.disable(),this.setValue(a.getText())):(a=CKEDITOR.tools.trim(a.getText()),this.setValue(a))}},commit:function(e,d){if(this.isEnabled()){var c=this.getValue(),b=d.getElementsByTag("caption");
if(c)0<b.count()?(b=b.getItem(0),b.setHtml("")):(b=new CKEDITOR.dom.element("caption",a.document),d.getChildCount()?b.insertBefore(d.getFirst()):b.appendTo(d)),b.append(new CKEDITOR.dom.text(c,a.document));else if(0<b.count())for(c=b.count()-1;0<=c;c--)b.getItem(c).remove()}}},{type:"text",id:"txtSummary",requiredContent:"table[summary]",label:a.lang.table.summary,setup:function(a){this.setValue(a.getAttribute("summary")||"")},commit:function(a,d){this.getValue()?d.setAttribute("summary",this.getValue()):
d.removeAttribute("summary")}}]}]},m&&m.createAdvancedTab(a,null,"table")]}}var q=CKEDITOR.tools.cssLength,k=function(a){var e=this.id;a.info||(a.info={});a.info[e]=this.getValue()};CKEDITOR.dialog.add("table",function(a){return n(a,"table")});CKEDITOR.dialog.add("tableProperties",function(a){return n(a,"tableProperties")})})();
=======
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( function() {
	var defaultToPixel = CKEDITOR.tools.cssLength;

	var commitValue = function( data ) {
			var id = this.id;
			if ( !data.info )
				data.info = {};
			data.info[ id ] = this.getValue();
		};

	function tableColumns( table ) {
		var cols = 0,
			maxCols = 0;
		for ( var i = 0, row, rows = table.$.rows.length; i < rows; i++ ) {
			row = table.$.rows[ i ], cols = 0;
			for ( var j = 0, cell, cells = row.cells.length; j < cells; j++ ) {
				cell = row.cells[ j ];
				cols += cell.colSpan;
			}

			cols > maxCols && ( maxCols = cols );
		}

		return maxCols;
	}


	// Whole-positive-integer validator.
	function validatorNum( msg ) {
		return function() {
			var value = this.getValue(),
				pass = !!( CKEDITOR.dialog.validate.integer().call( this, value ) && value > 0 );

			if ( !pass ) {
				alert( msg ); // jshint ignore:line
				this.select();
			}

			return pass;
		};
	}

	function tableDialog( editor, command ) {
		var makeElement = function( name ) {
				return new CKEDITOR.dom.element( name, editor.document );
			};

		var editable = editor.editable();

		var dialogadvtab = editor.plugins.dialogadvtab;

		return {
			title: editor.lang.table.title,
			minWidth: 310,
			minHeight: CKEDITOR.env.ie ? 310 : 280,

			onLoad: function() {
				var dialog = this;

				var styles = dialog.getContentElement( 'advanced', 'advStyles' );

				if ( styles ) {
					styles.on( 'change', function() {
						// Synchronize width value.
						var width = this.getStyle( 'width', '' ),
							txtWidth = dialog.getContentElement( 'info', 'txtWidth' );

						txtWidth && txtWidth.setValue( width, true );

						// Synchronize height value.
						var height = this.getStyle( 'height', '' ),
							txtHeight = dialog.getContentElement( 'info', 'txtHeight' );

						txtHeight && txtHeight.setValue( height, true );
					} );
				}
			},

			onShow: function() {
				// Detect if there's a selected table.
				var selection = editor.getSelection(),
					ranges = selection.getRanges(),
					table;

				var rowsInput = this.getContentElement( 'info', 'txtRows' ),
					colsInput = this.getContentElement( 'info', 'txtCols' ),
					widthInput = this.getContentElement( 'info', 'txtWidth' ),
					heightInput = this.getContentElement( 'info', 'txtHeight' );

				if ( command == 'tableProperties' ) {
					var selected = selection.getSelectedElement();
					if ( selected && selected.is( 'table' ) )
						table = selected;
					else if ( ranges.length > 0 ) {
						// Webkit could report the following range on cell selection (https://dev.ckeditor.com/ticket/4948):
						// <table><tr><td>[&nbsp;</td></tr></table>]
						if ( CKEDITOR.env.webkit )
							ranges[ 0 ].shrink( CKEDITOR.NODE_ELEMENT );

						table = editor.elementPath( ranges[ 0 ].getCommonAncestor( true ) ).contains( 'table', 1 );
					}

					// Save a reference to the selected table, and push a new set of default values.
					this._.selectedElement = table;
				}

				// Enable or disable the row, cols, width fields.
				if ( table ) {
					this.setupContent( table );
					rowsInput && rowsInput.disable();
					colsInput && colsInput.disable();
				} else {
					rowsInput && rowsInput.enable();
					colsInput && colsInput.enable();
				}

				// Call the onChange method for the widht and height fields so
				// they get reflected into the Advanced tab.
				widthInput && widthInput.onChange();
				heightInput && heightInput.onChange();
			},
			onOk: function() {
				var selection = editor.getSelection(),
					bms = this._.selectedElement && selection.createBookmarks();

				var table = this._.selectedElement || makeElement( 'table' ),
					data = {};

				this.commitContent( data, table );

				if ( data.info ) {
					var info = data.info;

					// Generate the rows and cols.
					if ( !this._.selectedElement ) {
						var tbody = table.append( makeElement( 'tbody' ) ),
							rows = parseInt( info.txtRows, 10 ) || 0,
							cols = parseInt( info.txtCols, 10 ) || 0;

						for ( var i = 0; i < rows; i++ ) {
							var row = tbody.append( makeElement( 'tr' ) );
							for ( var j = 0; j < cols; j++ ) {
								var cell = row.append( makeElement( 'td' ) );
								cell.appendBogus();
							}
						}
					}

					// Modify the table headers. Depends on having rows and cols generated
					// correctly so it can't be done in commit functions.

					// Should we make a <thead>?
					var headers = info.selHeaders;
					if ( !table.$.tHead && ( headers == 'row' || headers == 'both' ) ) {
						var thead = table.getElementsByTag( 'thead' ).getItem( 0 );
						tbody = table.getElementsByTag( 'tbody' ).getItem( 0 );
						var theRow = tbody.getElementsByTag( 'tr' ).getItem( 0 );

						if ( !thead ) {
							thead = new CKEDITOR.dom.element( 'thead' );
							thead.insertBefore( tbody );
						}

						// Change TD to TH:
						for ( i = 0; i < theRow.getChildCount(); i++ ) {
							var th = theRow.getChild( i );
							// Skip bookmark nodes. (https://dev.ckeditor.com/ticket/6155)
							if ( th.type == CKEDITOR.NODE_ELEMENT && !th.data( 'cke-bookmark' ) ) {
								th.renameNode( 'th' );
								th.setAttribute( 'scope', 'col' );
							}
						}
						thead.append( theRow.remove() );
					}

					if ( table.$.tHead !== null && !( headers == 'row' || headers == 'both' ) ) {
						// Move the row out of the THead and put it in the TBody:
						thead = new CKEDITOR.dom.element( table.$.tHead );
						tbody = table.getElementsByTag( 'tbody' ).getItem( 0 );

						while ( thead.getChildCount() > 0 ) {
							theRow = thead.getFirst();
							for ( i = 0; i < theRow.getChildCount(); i++ ) {
								var newCell = theRow.getChild( i );
								if ( newCell.type == CKEDITOR.NODE_ELEMENT ) {
									newCell.renameNode( 'td' );
									newCell.removeAttribute( 'scope' );
								}
							}

							// Append the row to the start (#1397).
							tbody.append( theRow, true );
						}
						thead.remove();
					}

					// Should we make all first cells in a row TH?
					if ( !this.hasColumnHeaders && ( headers == 'col' || headers == 'both' ) ) {
						for ( row = 0; row < table.$.rows.length; row++ ) {
							newCell = new CKEDITOR.dom.element( table.$.rows[ row ].cells[ 0 ] );
							newCell.renameNode( 'th' );
							newCell.setAttribute( 'scope', 'row' );
						}
					}

					// Should we make all first TH-cells in a row make TD? If 'yes' we do it the other way round :-)
					if ( ( this.hasColumnHeaders ) && !( headers == 'col' || headers == 'both' ) ) {
						for ( i = 0; i < table.$.rows.length; i++ ) {
							row = new CKEDITOR.dom.element( table.$.rows[ i ] );
							if ( row.getParent().getName() == 'tbody' ) {
								newCell = new CKEDITOR.dom.element( row.$.cells[ 0 ] );
								newCell.renameNode( 'td' );
								newCell.removeAttribute( 'scope' );
							}
						}
					}

					// Set the width and height.
					info.txtHeight ? table.setStyle( 'height', info.txtHeight ) : table.removeStyle( 'height' );
					info.txtWidth ? table.setStyle( 'width', info.txtWidth ) : table.removeStyle( 'width' );

					if ( !table.getAttribute( 'style' ) )
						table.removeAttribute( 'style' );
				}

				// Insert the table element if we're creating one.
				if ( !this._.selectedElement ) {
					editor.insertElement( table );
					// Override the default cursor position after insertElement to place
					// cursor inside the first cell (https://dev.ckeditor.com/ticket/7959), IE needs a while.
					setTimeout( function() {
						var firstCell = new CKEDITOR.dom.element( table.$.rows[ 0 ].cells[ 0 ] );
						var range = editor.createRange();
						range.moveToPosition( firstCell, CKEDITOR.POSITION_AFTER_START );
						range.select();
					}, 0 );
				}
				// Properly restore the selection, (https://dev.ckeditor.com/ticket/4822) but don't break
				// because of this, e.g. updated table caption.
				else {
					try {
						selection.selectBookmarks( bms );
					} catch ( er ) {
					}
				}
			},
			contents: [ {
				id: 'info',
				label: editor.lang.table.title,
				elements: [ {
					type: 'hbox',
					widths: [ null, null ],
					styles: [ 'vertical-align:top' ],
					children: [ {
						type: 'vbox',
						padding: 0,
						children: [ {
							type: 'text',
							id: 'txtRows',
							'default': 3,
							label: editor.lang.table.rows,
							required: true,
							controlStyle: 'width:5em',
							validate: validatorNum( editor.lang.table.invalidRows ),
							setup: function( selectedElement ) {
								this.setValue( selectedElement.$.rows.length );
							},
							commit: commitValue
						},
						{
							type: 'text',
							id: 'txtCols',
							'default': 2,
							label: editor.lang.table.columns,
							required: true,
							controlStyle: 'width:5em',
							validate: validatorNum( editor.lang.table.invalidCols ),
							setup: function( selectedTable ) {
								this.setValue( tableColumns( selectedTable ) );
							},
							commit: commitValue
						},
						{
							type: 'html',
							html: '&nbsp;'
						},
						{
							type: 'select',
							id: 'selHeaders',
							requiredContent: 'th',
							'default': '',
							label: editor.lang.table.headers,
							items: [
								[ editor.lang.table.headersNone, '' ],
								[ editor.lang.table.headersRow, 'row' ],
								[ editor.lang.table.headersColumn, 'col' ],
								[ editor.lang.table.headersBoth, 'both' ]
							],
							setup: function( selectedTable ) {
								// Fill in the headers field.
								var dialog = this.getDialog();
								dialog.hasColumnHeaders = true;

								// Check if all the first cells in every row are TH
								for ( var row = 0; row < selectedTable.$.rows.length; row++ ) {
									// If just one cell isn't a TH then it isn't a header column
									var headCell = selectedTable.$.rows[ row ].cells[ 0 ];
									if ( headCell && headCell.nodeName.toLowerCase() != 'th' ) {
										dialog.hasColumnHeaders = false;
										break;
									}
								}

								// Check if the table contains <thead>.
								if ( ( selectedTable.$.tHead !== null ) )
									this.setValue( dialog.hasColumnHeaders ? 'both' : 'row' );
								else
									this.setValue( dialog.hasColumnHeaders ? 'col' : '' );
							},
							commit: commitValue
						},
						{
							type: 'text',
							id: 'txtBorder',
							requiredContent: 'table[border]',
							// Avoid setting border which will then disappear.
							'default': editor.filter.check( 'table[border]' ) ? 1 : 0,
							label: editor.lang.table.border,
							controlStyle: 'width:3em',
							validate: CKEDITOR.dialog.validate.number( editor.lang.table.invalidBorder ),
							setup: function( selectedTable ) {
								this.setValue( selectedTable.getAttribute( 'border' ) || '' );
							},
							commit: function( data, selectedTable ) {
								if ( this.getValue() )
									selectedTable.setAttribute( 'border', this.getValue() );
								else
									selectedTable.removeAttribute( 'border' );
							}
						},
						{
							id: 'cmbAlign',
							type: 'select',
							requiredContent: 'table[align]',
							'default': '',
							label: editor.lang.common.align,
							items: [
								[ editor.lang.common.notSet, '' ],
								[ editor.lang.common.left, 'left' ],
								[ editor.lang.common.center, 'center' ],
								[ editor.lang.common.right, 'right' ]
							],
							setup: function( selectedTable ) {
								this.setValue( selectedTable.getAttribute( 'align' ) || '' );
							},
							commit: function( data, selectedTable ) {
								if ( this.getValue() )
									selectedTable.setAttribute( 'align', this.getValue() );
								else
									selectedTable.removeAttribute( 'align' );
							}
						} ]
					},
					{
						type: 'vbox',
						padding: 0,
						children: [ {
							type: 'hbox',
							widths: [ '5em' ],
							children: [ {
								type: 'text',
								id: 'txtWidth',
								requiredContent: 'table{width}',
								controlStyle: 'width:5em',
								label: editor.lang.common.width,
								title: editor.lang.common.cssLengthTooltip,
								// Smarter default table width. (https://dev.ckeditor.com/ticket/9600)
								'default': editor.filter.check( 'table{width}' ) ? ( editable.getSize( 'width' ) < 500 ? '100%' : 500 ) : 0,
								getValue: defaultToPixel,
								validate: CKEDITOR.dialog.validate.cssLength( editor.lang.common.invalidCssLength.replace( '%1', editor.lang.common.width ) ),
								onChange: function() {
									var styles = this.getDialog().getContentElement( 'advanced', 'advStyles' );
									styles && styles.updateStyle( 'width', this.getValue() );
								},
								setup: function( selectedTable ) {
									var val = selectedTable.getStyle( 'width' );
									this.setValue( val );
								},
								commit: commitValue
							} ]
						},
						{
							type: 'hbox',
							widths: [ '5em' ],
							children: [ {
								type: 'text',
								id: 'txtHeight',
								requiredContent: 'table{height}',
								controlStyle: 'width:5em',
								label: editor.lang.common.height,
								title: editor.lang.common.cssLengthTooltip,
								'default': '',
								getValue: defaultToPixel,
								validate: CKEDITOR.dialog.validate.cssLength( editor.lang.common.invalidCssLength.replace( '%1', editor.lang.common.height ) ),
								onChange: function() {
									var styles = this.getDialog().getContentElement( 'advanced', 'advStyles' );
									styles && styles.updateStyle( 'height', this.getValue() );
								},

								setup: function( selectedTable ) {
									var val = selectedTable.getStyle( 'height' );
									val && this.setValue( val );
								},
								commit: commitValue
							} ]
						},
						{
							type: 'html',
							html: '&nbsp;'
						},
						{
							type: 'text',
							id: 'txtCellSpace',
							requiredContent: 'table[cellspacing]',
							controlStyle: 'width:3em',
							label: editor.lang.table.cellSpace,
							'default': editor.filter.check( 'table[cellspacing]' ) ? 1 : 0,
							validate: CKEDITOR.dialog.validate.number( editor.lang.table.invalidCellSpacing ),
							setup: function( selectedTable ) {
								this.setValue( selectedTable.getAttribute( 'cellSpacing' ) || '' );
							},
							commit: function( data, selectedTable ) {
								if ( this.getValue() )
									selectedTable.setAttribute( 'cellSpacing', this.getValue() );
								else
									selectedTable.removeAttribute( 'cellSpacing' );
							}
						},
						{
							type: 'text',
							id: 'txtCellPad',
							requiredContent: 'table[cellpadding]',
							controlStyle: 'width:3em',
							label: editor.lang.table.cellPad,
							'default': editor.filter.check( 'table[cellpadding]' ) ? 1 : 0,
							validate: CKEDITOR.dialog.validate.number( editor.lang.table.invalidCellPadding ),
							setup: function( selectedTable ) {
								this.setValue( selectedTable.getAttribute( 'cellPadding' ) || '' );
							},
							commit: function( data, selectedTable ) {
								if ( this.getValue() )
									selectedTable.setAttribute( 'cellPadding', this.getValue() );
								else
									selectedTable.removeAttribute( 'cellPadding' );
							}
						} ]
					} ]
				},
				{
					type: 'html',
					align: 'right',
					html: ''
				},
				{
					type: 'vbox',
					padding: 0,
					children: [ {
						type: 'text',
						id: 'txtCaption',
						requiredContent: 'caption',
						label: editor.lang.table.caption,
						setup: function( selectedTable ) {
							this.enable();

							var nodeList = selectedTable.getElementsByTag( 'caption' );
							if ( nodeList.count() > 0 ) {
								var caption = nodeList.getItem( 0 );
								var firstElementChild = caption.getFirst( CKEDITOR.dom.walker.nodeType( CKEDITOR.NODE_ELEMENT ) );

								if ( firstElementChild && !firstElementChild.equals( caption.getBogus() ) ) {
									this.disable();
									this.setValue( caption.getText() );
									return;
								}

								caption = CKEDITOR.tools.trim( caption.getText() );
								this.setValue( caption );
							}
						},
						commit: function( data, table ) {
							if ( !this.isEnabled() )
								return;

							var caption = this.getValue(),
								captionElement = table.getElementsByTag( 'caption' );
							if ( caption ) {
								if ( captionElement.count() > 0 ) {
									captionElement = captionElement.getItem( 0 );
									captionElement.setHtml( '' );
								} else {
									captionElement = new CKEDITOR.dom.element( 'caption', editor.document );
									table.append( captionElement, true );
								}
								captionElement.append( new CKEDITOR.dom.text( caption, editor.document ) );
							} else if ( captionElement.count() > 0 ) {
								for ( var i = captionElement.count() - 1; i >= 0; i-- )
									captionElement.getItem( i ).remove();
							}
						}
					},
					{
						type: 'text',
						id: 'txtSummary',
						bidi: true,
						requiredContent: 'table[summary]',
						label: editor.lang.table.summary,
						setup: function( selectedTable ) {
							this.setValue( selectedTable.getAttribute( 'summary' ) || '' );
						},
						commit: function( data, selectedTable ) {
							if ( this.getValue() )
								selectedTable.setAttribute( 'summary', this.getValue() );
							else
								selectedTable.removeAttribute( 'summary' );
						}
					} ]
				} ]
			},
			dialogadvtab && dialogadvtab.createAdvancedTab( editor, null, 'table' )
		] };
	}

	CKEDITOR.dialog.add( 'table', function( editor ) {
		return tableDialog( editor, 'table' );
	} );
	CKEDITOR.dialog.add( 'tableProperties', function( editor ) {
		return tableDialog( editor, 'tableProperties' );
	} );
} )();
>>>>>>> 4.12.1
