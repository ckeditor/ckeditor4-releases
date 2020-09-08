<<<<<<< HEAD
﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){var r=function(c,j){function r(){var a=arguments,b=this.getContentElement("advanced","txtdlgGenStyle");b&&b.commit.apply(b,a);this.foreach(function(b){b.commit&&"txtdlgGenStyle"!=b.id&&b.commit.apply(b,a)})}function i(a){if(!s){s=1;var b=this.getDialog(),d=b.imageElement;if(d){this.commit(e,d);for(var a=[].concat(a),f=a.length,c,g=0;g<f;g++)(c=b.getContentElement.apply(b,a[g].split(":")))&&c.setup(e,d)}s=0}}var e=1,k=/^\s*(\d+)((px)|\%)?\s*$/i,v=/(^\s*(\d+)((px)|\%)?\s*$)|^$/i,o=/^\d+px$/,
w=function(){var a=this.getValue(),b=this.getDialog(),d=a.match(k);d&&("%"==d[2]&&l(b,!1),a=d[1]);b.lockRatio&&(d=b.originalElement,"true"==d.getCustomData("isReady")&&("txtHeight"==this.id?(a&&"0"!=a&&(a=Math.round(d.$.width*(a/d.$.height))),isNaN(a)||b.setValueOf("info","txtWidth",a)):(a&&"0"!=a&&(a=Math.round(d.$.height*(a/d.$.width))),isNaN(a)||b.setValueOf("info","txtHeight",a))));g(b)},g=function(a){if(!a.originalElement||!a.preview)return 1;a.commitContent(4,a.preview);return 0},s,l=function(a,
b){if(!a.getContentElement("info","ratioLock"))return null;var d=a.originalElement;if(!d)return null;if("check"==b){if(!a.userlockRatio&&"true"==d.getCustomData("isReady")){var f=a.getValueOf("info","txtWidth"),c=a.getValueOf("info","txtHeight"),d=1E3*d.$.width/d.$.height,e=1E3*f/c;a.lockRatio=!1;!f&&!c?a.lockRatio=!0:!isNaN(d)&&!isNaN(e)&&Math.round(d)==Math.round(e)&&(a.lockRatio=!0)}}else void 0!=b?a.lockRatio=b:(a.userlockRatio=1,a.lockRatio=!a.lockRatio);f=CKEDITOR.document.getById(p);a.lockRatio?
f.removeClass("cke_btn_unlocked"):f.addClass("cke_btn_unlocked");f.setAttribute("aria-checked",a.lockRatio);CKEDITOR.env.hc&&f.getChild(0).setHtml(a.lockRatio?CKEDITOR.env.ie?"■":"▣":CKEDITOR.env.ie?"□":"▢");return a.lockRatio},x=function(a){var b=a.originalElement;if("true"==b.getCustomData("isReady")){var d=a.getContentElement("info","txtWidth"),c=a.getContentElement("info","txtHeight");d&&d.setValue(b.$.width);c&&c.setValue(b.$.height)}g(a)},y=function(a,b){function d(a,b){var d=a.match(k);return d?
("%"==d[2]&&(d[1]+="%",l(c,!1)),d[1]):b}if(a==e){var c=this.getDialog(),g="",h="txtWidth"==this.id?"width":"height",i=b.getAttribute(h);i&&(g=d(i,g));g=d(b.getStyle(h),g);this.setValue(g)}},t,q=function(){var a=this.originalElement;a.setCustomData("isReady","true");a.removeListener("load",q);a.removeListener("error",h);a.removeListener("abort",h);CKEDITOR.document.getById(m).setStyle("display","none");this.dontResetSize||x(this);this.firstLoad&&CKEDITOR.tools.setTimeout(function(){l(this,"check")},
0,this);this.dontResetSize=this.firstLoad=!1},h=function(){var a=this.originalElement;a.removeListener("load",q);a.removeListener("error",h);a.removeListener("abort",h);a=CKEDITOR.getUrl(CKEDITOR.plugins.get("image").path+"images/noimage.png");this.preview&&this.preview.setAttribute("src",a);CKEDITOR.document.getById(m).setStyle("display","none");l(this,!1)},n=function(a){return CKEDITOR.tools.getNextId()+"_"+a},p=n("btnLockSizes"),u=n("btnResetSize"),m=n("ImagePreviewLoader"),A=n("previewLink"),
z=n("previewImage");return{title:c.lang.image["image"==j?"title":"titleButton"],minWidth:420,minHeight:360,onShow:function(){this.linkEditMode=this.imageEditMode=this.linkElement=this.imageElement=!1;this.lockRatio=!0;this.userlockRatio=0;this.dontResetSize=!1;this.firstLoad=!0;this.addLink=!1;var a=this.getParentEditor(),b=a.getSelection(),d=(b=b&&b.getSelectedElement())&&a.elementPath(b).contains("a",1);CKEDITOR.document.getById(m).setStyle("display","none");t=new CKEDITOR.dom.element("img",a.document);
this.preview=CKEDITOR.document.getById(z);this.originalElement=a.document.createElement("img");this.originalElement.setAttribute("alt","");this.originalElement.setCustomData("isReady","false");if(d){this.linkElement=d;this.linkEditMode=!0;var c=d.getChildren();if(1==c.count()){var g=c.getItem(0).getName();if("img"==g||"input"==g)this.imageElement=c.getItem(0),"img"==this.imageElement.getName()?this.imageEditMode="img":"input"==this.imageElement.getName()&&(this.imageEditMode="input")}"image"==j&&
this.setupContent(2,d)}if(this.customImageElement)this.imageEditMode="img",this.imageElement=this.customImageElement,delete this.customImageElement;else if(b&&"img"==b.getName()&&!b.data("cke-realelement")||b&&"input"==b.getName()&&"image"==b.getAttribute("type"))this.imageEditMode=b.getName(),this.imageElement=b;this.imageEditMode?(this.cleanImageElement=this.imageElement,this.imageElement=this.cleanImageElement.clone(!0,!0),this.setupContent(e,this.imageElement)):this.imageElement=a.document.createElement("img");
l(this,!0);CKEDITOR.tools.trim(this.getValueOf("info","txtUrl"))||(this.preview.removeAttribute("src"),this.preview.setStyle("display","none"))},onOk:function(){if(this.imageEditMode){var a=this.imageEditMode;"image"==j&&"input"==a&&confirm(c.lang.image.button2Img)?(this.imageElement=c.document.createElement("img"),this.imageElement.setAttribute("alt",""),c.insertElement(this.imageElement)):"image"!=j&&"img"==a&&confirm(c.lang.image.img2Button)?(this.imageElement=c.document.createElement("input"),
this.imageElement.setAttributes({type:"image",alt:""}),c.insertElement(this.imageElement)):(this.imageElement=this.cleanImageElement,delete this.cleanImageElement)}else"image"==j?this.imageElement=c.document.createElement("img"):(this.imageElement=c.document.createElement("input"),this.imageElement.setAttribute("type","image")),this.imageElement.setAttribute("alt","");this.linkEditMode||(this.linkElement=c.document.createElement("a"));this.commitContent(e,this.imageElement);this.commitContent(2,this.linkElement);
this.imageElement.getAttribute("style")||this.imageElement.removeAttribute("style");this.imageEditMode?!this.linkEditMode&&this.addLink?(c.insertElement(this.linkElement),this.imageElement.appendTo(this.linkElement)):this.linkEditMode&&!this.addLink&&(c.getSelection().selectElement(this.linkElement),c.insertElement(this.imageElement)):this.addLink?this.linkEditMode?c.insertElement(this.imageElement):(c.insertElement(this.linkElement),this.linkElement.append(this.imageElement,!1)):c.insertElement(this.imageElement)},
onLoad:function(){"image"!=j&&this.hidePage("Link");var a=this._.element.getDocument();this.getContentElement("info","ratioLock")&&(this.addFocusable(a.getById(u),5),this.addFocusable(a.getById(p),5));this.commitContent=r},onHide:function(){this.preview&&this.commitContent(8,this.preview);this.originalElement&&(this.originalElement.removeListener("load",q),this.originalElement.removeListener("error",h),this.originalElement.removeListener("abort",h),this.originalElement.remove(),this.originalElement=
!1);delete this.imageElement},contents:[{id:"info",label:c.lang.image.infoTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"txtUrl",type:"text",label:c.lang.common.url,required:!0,onChange:function(){var a=this.getDialog(),b=this.getValue();if(0<b.length){var a=this.getDialog(),d=a.originalElement;a.preview.removeStyle("display");d.setCustomData("isReady","false");var c=CKEDITOR.document.getById(m);c&&c.setStyle("display",
"");d.on("load",q,a);d.on("error",h,a);d.on("abort",h,a);d.setAttribute("src",b);t.setAttribute("src",b);a.preview.setAttribute("src",t.$.src);g(a)}else a.preview&&(a.preview.removeAttribute("src"),a.preview.setStyle("display","none"))},setup:function(a,b){if(a==e){var d=b.data("cke-saved-src")||b.getAttribute("src");this.getDialog().dontResetSize=!0;this.setValue(d);this.setInitValue()}},commit:function(a,b){a==e&&(this.getValue()||this.isChanged())?(b.data("cke-saved-src",this.getValue()),b.setAttribute("src",
this.getValue())):8==a&&(b.setAttribute("src",""),b.removeAttribute("src"))},validate:CKEDITOR.dialog.validate.notEmpty(c.lang.image.urlMissing)},{type:"button",id:"browse",style:"display:inline-block;margin-top:14px;",align:"center",label:c.lang.common.browseServer,hidden:!0,filebrowser:"info:txtUrl"}]}]},{id:"txtAlt",type:"text",label:c.lang.image.alt,accessKey:"T","default":"",onChange:function(){g(this.getDialog())},setup:function(a,b){a==e&&this.setValue(b.getAttribute("alt"))},commit:function(a,
b){a==e?(this.getValue()||this.isChanged())&&b.setAttribute("alt",this.getValue()):4==a?b.setAttribute("alt",this.getValue()):8==a&&b.removeAttribute("alt")}},{type:"hbox",children:[{id:"basic",type:"vbox",children:[{type:"hbox",requiredContent:"img{width,height}",widths:["50%","50%"],children:[{type:"vbox",padding:1,children:[{type:"text",width:"45px",id:"txtWidth",label:c.lang.common.width,onKeyUp:w,onChange:function(){i.call(this,"advanced:txtdlgGenStyle")},validate:function(){var a=this.getValue().match(v);
(a=!!(a&&0!==parseInt(a[1],10)))||alert(c.lang.common.invalidWidth);return a},setup:y,commit:function(a,b,d){var f=this.getValue();a==e?(f&&c.activeFilter.check("img{width,height}")?b.setStyle("width",CKEDITOR.tools.cssLength(f)):b.removeStyle("width"),!d&&b.removeAttribute("width")):4==a?f.match(k)?b.setStyle("width",CKEDITOR.tools.cssLength(f)):(a=this.getDialog().originalElement,"true"==a.getCustomData("isReady")&&b.setStyle("width",a.$.width+"px")):8==a&&(b.removeAttribute("width"),b.removeStyle("width"))}},
{type:"text",id:"txtHeight",width:"45px",label:c.lang.common.height,onKeyUp:w,onChange:function(){i.call(this,"advanced:txtdlgGenStyle")},validate:function(){var a=this.getValue().match(v);(a=!!(a&&0!==parseInt(a[1],10)))||alert(c.lang.common.invalidHeight);return a},setup:y,commit:function(a,b,d){var f=this.getValue();a==e?(f&&c.activeFilter.check("img{width,height}")?b.setStyle("height",CKEDITOR.tools.cssLength(f)):b.removeStyle("height"),!d&&b.removeAttribute("height")):4==a?f.match(k)?b.setStyle("height",
CKEDITOR.tools.cssLength(f)):(a=this.getDialog().originalElement,"true"==a.getCustomData("isReady")&&b.setStyle("height",a.$.height+"px")):8==a&&(b.removeAttribute("height"),b.removeStyle("height"))}}]},{id:"ratioLock",type:"html",style:"margin-top:30px;width:40px;height:40px;",onLoad:function(){var a=CKEDITOR.document.getById(u),b=CKEDITOR.document.getById(p);a&&(a.on("click",function(a){x(this);a.data&&a.data.preventDefault()},this.getDialog()),a.on("mouseover",function(){this.addClass("cke_btn_over")},
a),a.on("mouseout",function(){this.removeClass("cke_btn_over")},a));b&&(b.on("click",function(a){l(this);var b=this.originalElement,c=this.getValueOf("info","txtWidth");if(b.getCustomData("isReady")=="true"&&c){b=b.$.height/b.$.width*c;if(!isNaN(b)){this.setValueOf("info","txtHeight",Math.round(b));g(this)}}a.data&&a.data.preventDefault()},this.getDialog()),b.on("mouseover",function(){this.addClass("cke_btn_over")},b),b.on("mouseout",function(){this.removeClass("cke_btn_over")},b))},html:'<div><a href="javascript:void(0)" tabindex="-1" title="'+
c.lang.image.lockRatio+'" class="cke_btn_locked" id="'+p+'" role="checkbox"><span class="cke_icon"></span><span class="cke_label">'+c.lang.image.lockRatio+'</span></a><a href="javascript:void(0)" tabindex="-1" title="'+c.lang.image.resetSize+'" class="cke_btn_reset" id="'+u+'" role="button"><span class="cke_label">'+c.lang.image.resetSize+"</span></a></div>"}]},{type:"vbox",padding:1,children:[{type:"text",id:"txtBorder",requiredContent:"img{border-width}",width:"60px",label:c.lang.image.border,"default":"",
onKeyUp:function(){g(this.getDialog())},onChange:function(){i.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(c.lang.image.validateBorder),setup:function(a,b){if(a==e){var d;d=(d=(d=b.getStyle("border-width"))&&d.match(/^(\d+px)(?: \1 \1 \1)?$/))&&parseInt(d[1],10);isNaN(parseInt(d,10))&&(d=b.getAttribute("border"));this.setValue(d)}},commit:function(a,b,d){var c=parseInt(this.getValue(),10);a==e||4==a?(isNaN(c)?!c&&this.isChanged()&&b.removeStyle("border"):(b.setStyle("border-width",
CKEDITOR.tools.cssLength(c)),b.setStyle("border-style","solid")),!d&&a==e&&b.removeAttribute("border")):8==a&&(b.removeAttribute("border"),b.removeStyle("border-width"),b.removeStyle("border-style"),b.removeStyle("border-color"))}},{type:"text",id:"txtHSpace",requiredContent:"img{margin-left,margin-right}",width:"60px",label:c.lang.image.hSpace,"default":"",onKeyUp:function(){g(this.getDialog())},onChange:function(){i.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(c.lang.image.validateHSpace),
setup:function(a,b){if(a==e){var d,c;d=b.getStyle("margin-left");c=b.getStyle("margin-right");d=d&&d.match(o);c=c&&c.match(o);d=parseInt(d,10);c=parseInt(c,10);d=d==c&&d;isNaN(parseInt(d,10))&&(d=b.getAttribute("hspace"));this.setValue(d)}},commit:function(a,b,d){var c=parseInt(this.getValue(),10);a==e||4==a?(isNaN(c)?!c&&this.isChanged()&&(b.removeStyle("margin-left"),b.removeStyle("margin-right")):(b.setStyle("margin-left",CKEDITOR.tools.cssLength(c)),b.setStyle("margin-right",CKEDITOR.tools.cssLength(c))),
!d&&a==e&&b.removeAttribute("hspace")):8==a&&(b.removeAttribute("hspace"),b.removeStyle("margin-left"),b.removeStyle("margin-right"))}},{type:"text",id:"txtVSpace",requiredContent:"img{margin-top,margin-bottom}",width:"60px",label:c.lang.image.vSpace,"default":"",onKeyUp:function(){g(this.getDialog())},onChange:function(){i.call(this,"advanced:txtdlgGenStyle")},validate:CKEDITOR.dialog.validate.integer(c.lang.image.validateVSpace),setup:function(a,b){if(a==e){var d,c;d=b.getStyle("margin-top");c=
b.getStyle("margin-bottom");d=d&&d.match(o);c=c&&c.match(o);d=parseInt(d,10);c=parseInt(c,10);d=d==c&&d;isNaN(parseInt(d,10))&&(d=b.getAttribute("vspace"));this.setValue(d)}},commit:function(a,b,c){var f=parseInt(this.getValue(),10);a==e||4==a?(isNaN(f)?!f&&this.isChanged()&&(b.removeStyle("margin-top"),b.removeStyle("margin-bottom")):(b.setStyle("margin-top",CKEDITOR.tools.cssLength(f)),b.setStyle("margin-bottom",CKEDITOR.tools.cssLength(f))),!c&&a==e&&b.removeAttribute("vspace")):8==a&&(b.removeAttribute("vspace"),
b.removeStyle("margin-top"),b.removeStyle("margin-bottom"))}},{id:"cmbAlign",requiredContent:"img{float}",type:"select",widths:["35%","65%"],style:"width:90px",label:c.lang.common.align,"default":"",items:[[c.lang.common.notSet,""],[c.lang.common.alignLeft,"left"],[c.lang.common.alignRight,"right"]],onChange:function(){g(this.getDialog());i.call(this,"advanced:txtdlgGenStyle")},setup:function(a,b){if(a==e){var c=b.getStyle("float");switch(c){case "inherit":case "none":c=""}!c&&(c=(b.getAttribute("align")||
"").toLowerCase());this.setValue(c)}},commit:function(a,b,c){var f=this.getValue();if(a==e||4==a){if(f?b.setStyle("float",f):b.removeStyle("float"),!c&&a==e)switch(f=(b.getAttribute("align")||"").toLowerCase(),f){case "left":case "right":b.removeAttribute("align")}}else 8==a&&b.removeStyle("float")}}]}]},{type:"vbox",height:"250px",children:[{type:"html",id:"htmlPreview",style:"width:95%;",html:"<div>"+CKEDITOR.tools.htmlEncode(c.lang.common.preview)+'<br><div id="'+m+'" class="ImagePreviewLoader" style="display:none"><div class="loading">&nbsp;</div></div><div class="ImagePreviewBox"><table><tr><td><a href="javascript:void(0)" target="_blank" onclick="return false;" id="'+
A+'"><img id="'+z+'" alt="" /></a>'+(c.config.image_previewText||"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.")+
"</td></tr></table></div></div>"}]}]}]},{id:"Link",requiredContent:"a[href]",label:c.lang.image.linkTab,padding:0,elements:[{id:"txtUrl",type:"text",label:c.lang.common.url,style:"width: 100%","default":"",setup:function(a,b){if(2==a){var c=b.data("cke-saved-href");c||(c=b.getAttribute("href"));this.setValue(c)}},commit:function(a,b){if(2==a&&(this.getValue()||this.isChanged())){var d=this.getValue();b.data("cke-saved-href",d);b.setAttribute("href",d);if(this.getValue()||!c.config.image_removeLinkByEmptyURL)this.getDialog().addLink=
!0}}},{type:"button",id:"browse",filebrowser:{action:"Browse",target:"Link:txtUrl",url:c.config.filebrowserImageBrowseLinkUrl},style:"float:right",hidden:!0,label:c.lang.common.browseServer},{id:"cmbTarget",type:"select",requiredContent:"a[target]",label:c.lang.common.target,"default":"",items:[[c.lang.common.notSet,""],[c.lang.common.targetNew,"_blank"],[c.lang.common.targetTop,"_top"],[c.lang.common.targetSelf,"_self"],[c.lang.common.targetParent,"_parent"]],setup:function(a,b){2==a&&this.setValue(b.getAttribute("target")||
"")},commit:function(a,b){2==a&&(this.getValue()||this.isChanged())&&b.setAttribute("target",this.getValue())}}]},{id:"Upload",hidden:!0,filebrowser:"uploadButton",label:c.lang.image.upload,elements:[{type:"file",id:"upload",label:c.lang.image.btnUpload,style:"height:40px",size:38},{type:"fileButton",id:"uploadButton",filebrowser:"info:txtUrl",label:c.lang.image.btnUpload,"for":["Upload","upload"]}]},{id:"advanced",label:c.lang.common.advancedTab,elements:[{type:"hbox",widths:["50%","25%","25%"],
children:[{type:"text",id:"linkId",requiredContent:"img[id]",label:c.lang.common.id,setup:function(a,b){a==e&&this.setValue(b.getAttribute("id"))},commit:function(a,b){a==e&&(this.getValue()||this.isChanged())&&b.setAttribute("id",this.getValue())}},{id:"cmbLangDir",type:"select",requiredContent:"img[dir]",style:"width : 100px;",label:c.lang.common.langDir,"default":"",items:[[c.lang.common.notSet,""],[c.lang.common.langDirLtr,"ltr"],[c.lang.common.langDirRtl,"rtl"]],setup:function(a,b){a==e&&this.setValue(b.getAttribute("dir"))},
commit:function(a,b){a==e&&(this.getValue()||this.isChanged())&&b.setAttribute("dir",this.getValue())}},{type:"text",id:"txtLangCode",requiredContent:"img[lang]",label:c.lang.common.langCode,"default":"",setup:function(a,b){a==e&&this.setValue(b.getAttribute("lang"))},commit:function(a,b){a==e&&(this.getValue()||this.isChanged())&&b.setAttribute("lang",this.getValue())}}]},{type:"text",id:"txtGenLongDescr",requiredContent:"img[longdesc]",label:c.lang.common.longDescr,setup:function(a,b){a==e&&this.setValue(b.getAttribute("longDesc"))},
commit:function(a,b){a==e&&(this.getValue()||this.isChanged())&&b.setAttribute("longDesc",this.getValue())}},{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"txtGenClass",requiredContent:"img(cke-xyz)",label:c.lang.common.cssClass,"default":"",setup:function(a,b){a==e&&this.setValue(b.getAttribute("class"))},commit:function(a,b){a==e&&(this.getValue()||this.isChanged())&&b.setAttribute("class",this.getValue())}},{type:"text",id:"txtGenTitle",requiredContent:"img[title]",label:c.lang.common.advisoryTitle,
"default":"",onChange:function(){g(this.getDialog())},setup:function(a,b){a==e&&this.setValue(b.getAttribute("title"))},commit:function(a,b){a==e?(this.getValue()||this.isChanged())&&b.setAttribute("title",this.getValue()):4==a?b.setAttribute("title",this.getValue()):8==a&&b.removeAttribute("title")}}]},{type:"text",id:"txtdlgGenStyle",requiredContent:"img{cke-xyz}",label:c.lang.common.cssStyle,validate:CKEDITOR.dialog.validate.inlineStyle(c.lang.common.invalidInlineStyle),"default":"",setup:function(a,
b){if(a==e){var c=b.getAttribute("style");!c&&b.$.style.cssText&&(c=b.$.style.cssText);this.setValue(c);var f=b.$.style.height,c=b.$.style.width,f=(f?f:"").match(k),c=(c?c:"").match(k);this.attributesInStyle={height:!!f,width:!!c}}},onChange:function(){i.call(this,"info:cmbFloat info:cmbAlign info:txtVSpace info:txtHSpace info:txtBorder info:txtWidth info:txtHeight".split(" "));g(this)},commit:function(a,b){a==e&&(this.getValue()||this.isChanged())&&b.setAttribute("style",this.getValue())}}]}]}};
CKEDITOR.dialog.add("image",function(c){return r(c,"image")});CKEDITOR.dialog.add("imagebutton",function(c){return r(c,"imagebutton")})})();
=======
﻿/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( function() {
	var imageDialog = function( editor, dialogType ) {
			// Load image preview.
			var IMAGE = 1,
				LINK = 2,
				PREVIEW = 4,
				CLEANUP = 8,
				regexGetSize = /^\s*(\d+)((px)|\%)?\s*$/i,
				regexGetSizeOrEmpty = /(^\s*(\d+)((px)|\%)?\s*$)|^$/i,
				pxLengthRegex = /^\d+px$/;

			var onSizeChange = function() {
					var value = this.getValue(),
						// This = input element.
						dialog = this.getDialog(),
						aMatch = value.match( regexGetSize ); // Check value
					if ( aMatch ) {
						if ( aMatch[ 2 ] == '%' ) // % is allowed - > unlock ratio.
						switchLockRatio( dialog, false ); // Unlock.
						value = aMatch[ 1 ];
					}

					// Only if ratio is locked
					if ( dialog.lockRatio ) {
						var oImageOriginal = dialog.originalElement;
						if ( oImageOriginal.getCustomData( 'isReady' ) == 'true' ) {
							if ( this.id == 'txtHeight' ) {
								if ( value && value != '0' )
									value = Math.round( oImageOriginal.$.width * ( value / oImageOriginal.$.height ) );
								if ( !isNaN( value ) )
									dialog.setValueOf( 'info', 'txtWidth', value );
							}
							// this.id = txtWidth.
							else {
								if ( value && value != '0' )
									value = Math.round( oImageOriginal.$.height * ( value / oImageOriginal.$.width ) );
								if ( !isNaN( value ) )
									dialog.setValueOf( 'info', 'txtHeight', value );
							}
						}
					}
					updatePreview( dialog );
				};

			var updatePreview = function( dialog ) {
					//Don't load before onShow.
					if ( !dialog.originalElement || !dialog.preview )
						return 1;

					// Read attributes and update imagePreview;
					dialog.commitContent( PREVIEW, dialog.preview );
					return 0;
				};

			// Custom commit dialog logic, where we're intended to give inline style
			// field (txtdlgGenStyle) higher priority to avoid overwriting styles contribute
			// by other fields.
			function commitContent() {
				var args = arguments;
				var inlineStyleField = this.getContentElement( 'advanced', 'txtdlgGenStyle' );
				inlineStyleField && inlineStyleField.commit.apply( inlineStyleField, args );

				this.foreach( function( widget ) {
					if ( widget.commit && widget.id != 'txtdlgGenStyle' )
						widget.commit.apply( widget, args );
				} );
			}

			// Avoid recursions.
			var incommit;

			// Synchronous field values to other impacted fields is required, e.g. border
			// size change should alter inline-style text as well.
			function commitInternally( targetFields ) {
				if ( incommit )
					return;

				incommit = 1;

				var dialog = this.getDialog(),
					element = dialog.imageElement;
				if ( element ) {
					// Commit this field and broadcast to target fields.
					this.commit( IMAGE, element );

					targetFields = [].concat( targetFields );
					var length = targetFields.length,
						field;
					for ( var i = 0; i < length; i++ ) {
						field = dialog.getContentElement.apply( dialog, targetFields[ i ].split( ':' ) );
						// May cause recursion.
						field && field.setup( IMAGE, element );
					}
				}

				incommit = 0;
			}

			var switchLockRatio = function( dialog, value ) {
					if ( !dialog.getContentElement( 'info', 'ratioLock' ) )
						return null;

					var oImageOriginal = dialog.originalElement;

					// Dialog may already closed. (https://dev.ckeditor.com/ticket/5505)
					if ( !oImageOriginal )
						return null;

					// Check image ratio and original image ratio, but respecting user's preference.
					if ( value == 'check' ) {
						if ( !dialog.userlockRatio && oImageOriginal.getCustomData( 'isReady' ) == 'true' ) {
							var width = dialog.getValueOf( 'info', 'txtWidth' ),
								height = dialog.getValueOf( 'info', 'txtHeight' ),
								originalRatio = oImageOriginal.$.width / oImageOriginal.$.height,
								thisRatio = width / height;

							dialog.lockRatio = false; // Default: unlock ratio

							if ( !width && !height ) {
								dialog.lockRatio = true;
							} else {
								// Round ratio to two decimal places so ratio locking will be less precise (#2254).
								var ratioComparison = Math.round( ( originalRatio / thisRatio ) * 100 ) / 100;

								if ( ratioComparison == 1 ) {
									dialog.lockRatio = true;
								}
							}
						}
					} else if ( value !== undefined ) {
						dialog.lockRatio = value;
					} else {
						dialog.userlockRatio = 1;
						dialog.lockRatio = !dialog.lockRatio;
					}

					var ratioButton = CKEDITOR.document.getById( btnLockSizesId );
					if ( dialog.lockRatio )
						ratioButton.removeClass( 'cke_btn_unlocked' );
					else
						ratioButton.addClass( 'cke_btn_unlocked' );

					ratioButton.setAttribute( 'aria-checked', dialog.lockRatio );

					// Ratio button hc presentation - WHITE SQUARE / BLACK SQUARE
					if ( CKEDITOR.env.hc ) {
						var icon = ratioButton.getChild( 0 );
						icon.setHtml( dialog.lockRatio ? CKEDITOR.env.ie ? '\u25A0' : '\u25A3' : CKEDITOR.env.ie ? '\u25A1' : '\u25A2' );
					}

					return dialog.lockRatio;
				};

			var resetSize = function( dialog, emptyValues ) {
					var oImageOriginal = dialog.originalElement,
						ready = oImageOriginal.getCustomData( 'isReady' ) == 'true';

					if ( ready ) {
						var widthField = dialog.getContentElement( 'info', 'txtWidth' ),
							heightField = dialog.getContentElement( 'info', 'txtHeight' ),
							widthValue, heightValue;

						if ( emptyValues ) {
							widthValue = 0;
							heightValue = 0;
						} else {
							widthValue = oImageOriginal.$.width;
							heightValue = oImageOriginal.$.height;
						}

						widthField && widthField.setValue( widthValue );
						heightField && heightField.setValue( heightValue );
					}
					updatePreview( dialog );
				};

			var setupDimension = function( type, element ) {
					if ( type != IMAGE )
						return;

					function checkDimension( size, defaultValue ) {
						var aMatch = size.match( regexGetSize );
						if ( aMatch ) {
							// % is allowed.
							if ( aMatch[ 2 ] == '%' ) {
								aMatch[ 1 ] += '%';
								switchLockRatio( dialog, false ); // Unlock ratio
							}
							return aMatch[ 1 ];
						}
						return defaultValue;
					}

					var dialog = this.getDialog(),
						value = '',
						dimension = this.id == 'txtWidth' ? 'width' : 'height',
						size = element.getAttribute( dimension );

					if ( size )
						value = checkDimension( size, value );
					value = checkDimension( element.getStyle( dimension ), value );

					this.setValue( value );
				};

			var previewPreloader;

			var onImgLoadEvent = function() {
					// Image is ready.
					var original = this.originalElement,
						loader = CKEDITOR.document.getById( imagePreviewLoaderId );

					original.setCustomData( 'isReady', 'true' );
					original.removeListener( 'load', onImgLoadEvent );
					original.removeListener( 'error', onImgLoadErrorEvent );
					original.removeListener( 'abort', onImgLoadErrorEvent );

					// Hide loader.
					if ( loader )
						loader.setStyle( 'display', 'none' );

					// New image -> new dimensions
					if ( !this.dontResetSize ) {
						resetSize( this, editor.config.image_prefillDimensions === false );
					}

					if ( this.firstLoad ) {
						CKEDITOR.tools.setTimeout( function() {
							switchLockRatio( this, 'check' );
						}, 0, this );
					}

					this.firstLoad = false;
					this.dontResetSize = false;

					// Possible fix for https://dev.ckeditor.com/ticket/12818.
					updatePreview( this );
				};

			var onImgLoadErrorEvent = function() {
					// Error. Image is not loaded.
					var original = this.originalElement,
						loader = CKEDITOR.document.getById( imagePreviewLoaderId );

					original.removeListener( 'load', onImgLoadEvent );
					original.removeListener( 'error', onImgLoadErrorEvent );
					original.removeListener( 'abort', onImgLoadErrorEvent );

					// Set Error image.
					var noimage = CKEDITOR.getUrl( CKEDITOR.plugins.get( 'image' ).path + 'images/noimage.png' );

					if ( this.preview )
						this.preview.setAttribute( 'src', noimage );

					// Hide loader.
					if ( loader )
						loader.setStyle( 'display', 'none' );

					switchLockRatio( this, false ); // Unlock.
				};

			var numbering = function( id ) {
					return CKEDITOR.tools.getNextId() + '_' + id;
				},
				btnLockSizesId = numbering( 'btnLockSizes' ),
				btnResetSizeId = numbering( 'btnResetSize' ),
				imagePreviewLoaderId = numbering( 'ImagePreviewLoader' ),
				previewLinkId = numbering( 'previewLink' ),
				previewImageId = numbering( 'previewImage' );

			return {
				title: editor.lang.image[ dialogType == 'image' ? 'title' : 'titleButton' ],
				minWidth: ( CKEDITOR.skinName || editor.config.skin ) == 'moono-lisa' ? 500 : 420,
				minHeight: 360,
				onShow: function() {
					this.imageElement = false;
					this.linkElement = false;

					// Default: create a new element.
					this.imageEditMode = false;
					this.linkEditMode = false;

					this.lockRatio = true;
					this.userlockRatio = 0;
					this.dontResetSize = false;
					this.firstLoad = true;
					this.addLink = false;

					var editor = this.getParentEditor(),
						sel = editor.getSelection(),
						element = sel && sel.getSelectedElement(),
						link = element && editor.elementPath( element ).contains( 'a', 1 ),
						loader = CKEDITOR.document.getById( imagePreviewLoaderId );

					// Hide loader.
					if ( loader )
						loader.setStyle( 'display', 'none' );

					// Create the preview before setup the dialog contents.
					previewPreloader = new CKEDITOR.dom.element( 'img', editor.document );
					this.preview = CKEDITOR.document.getById( previewImageId );

					// Copy of the image
					this.originalElement = editor.document.createElement( 'img' );
					this.originalElement.setAttribute( 'alt', '' );
					this.originalElement.setCustomData( 'isReady', 'false' );

					if ( link ) {
						this.linkElement = link;
						this.linkEditMode = true;

						// If there is an existing link, by default keep it (true).
						// It will be removed if certain conditions are met and Link tab is enabled. (https://dev.ckeditor.com/ticket/13351)
						this.addLink = true;

						// Look for Image element.
						var linkChildren = link.getChildren();
						if ( linkChildren.count() == 1 ) {
							var childTag = linkChildren.getItem( 0 );

							if ( childTag.type == CKEDITOR.NODE_ELEMENT ) {
								if ( childTag.is( 'img' ) || childTag.is( 'input' ) ) {
									this.imageElement = linkChildren.getItem( 0 );
									if ( this.imageElement.is( 'img' ) )
										this.imageEditMode = 'img';
									else if ( this.imageElement.is( 'input' ) )
										this.imageEditMode = 'input';
								}
							}
						}
						// Fill out all fields.
						if ( dialogType == 'image' )
							this.setupContent( LINK, link );
					}

					// Edit given image element instead the one from selection.
					if ( this.customImageElement ) {
						this.imageEditMode = 'img';
						this.imageElement = this.customImageElement;
						delete this.customImageElement;
					}
					else if ( element && element.getName() == 'img' && !element.data( 'cke-realelement' ) ||
						element && element.getName() == 'input' && element.getAttribute( 'type' ) == 'image' ) {
						this.imageEditMode = element.getName();
						this.imageElement = element;
					}

					if ( this.imageEditMode ) {
						// Use the original element as a buffer from  since we don't want
						// temporary changes to be committed, e.g. if the dialog is canceled.
						this.cleanImageElement = this.imageElement;
						this.imageElement = this.cleanImageElement.clone( true, true );

						// Fill out all fields.
						this.setupContent( IMAGE, this.imageElement );
					}

					// Refresh LockRatio button
					switchLockRatio( this, true );

					// Dont show preview if no URL given.
					if ( !CKEDITOR.tools.trim( this.getValueOf( 'info', 'txtUrl' ) ) ) {
						this.preview.removeAttribute( 'src' );
						this.preview.setStyle( 'display', 'none' );
					}
				},
				onOk: function() {
					// Edit existing Image.
					if ( this.imageEditMode ) {
						var imgTagName = this.imageEditMode;

						// Image dialog and Input element.
						if ( dialogType == 'image' && imgTagName == 'input' && confirm( editor.lang.image.button2Img ) ) { // jshint ignore:line
							// Replace INPUT-> IMG
							imgTagName = 'img';
							this.imageElement = editor.document.createElement( 'img' );
							this.imageElement.setAttribute( 'alt', '' );
							editor.insertElement( this.imageElement );
						}
						// ImageButton dialog and Image element.
						else if ( dialogType != 'image' && imgTagName == 'img' && confirm( editor.lang.image.img2Button ) ) { // jshint ignore:line
							// Replace IMG -> INPUT
							imgTagName = 'input';
							this.imageElement = editor.document.createElement( 'input' );
							this.imageElement.setAttributes( {
								type: 'image',
								alt: ''
							} );
							editor.insertElement( this.imageElement );
						} else {
							// Restore the original element before all commits.
							this.imageElement = this.cleanImageElement;
							delete this.cleanImageElement;
						}
					}
					// Create a new image.
					else {
						// Image dialog -> create IMG element.
						if ( dialogType == 'image' )
							this.imageElement = editor.document.createElement( 'img' );
						else {
							this.imageElement = editor.document.createElement( 'input' );
							this.imageElement.setAttribute( 'type', 'image' );
						}
						this.imageElement.setAttribute( 'alt', '' );
					}

					// Create a new link.
					if ( !this.linkEditMode )
						this.linkElement = editor.document.createElement( 'a' );

					// Set attributes.
					this.commitContent( IMAGE, this.imageElement );
					this.commitContent( LINK, this.linkElement );

					// Remove empty style attribute.
					if ( !this.imageElement.getAttribute( 'style' ) )
						this.imageElement.removeAttribute( 'style' );

					// Insert a new Image.
					if ( !this.imageEditMode ) {
						if ( this.addLink ) {
							if ( !this.linkEditMode ) {
								// Insert a new link.
								editor.insertElement( this.linkElement );
								this.linkElement.append( this.imageElement, false );
							} else {
								// We already have a link in editor.
								if ( this.linkElement.equals( editor.getSelection().getSelectedElement() ) ) {
									// If the link is selected outside, replace it's content rather than the link itself. ([<a>foo</a>])
									this.linkElement.setHtml( '' );
									this.linkElement.append( this.imageElement, false );
								} else {
									// Only inside of the link is selected, so replace it with image. (<a>[foo]</a>, <a>[f]oo</a>)
									editor.insertElement( this.imageElement );
								}
							}
						} else {
							editor.insertElement( this.imageElement );
						}
					}
					// Image already exists.
					else {
						// Add a new link element.
						if ( !this.linkEditMode && this.addLink ) {
							editor.insertElement( this.linkElement );
							this.imageElement.appendTo( this.linkElement );
						}
						// Remove Link, Image exists.
						else if ( this.linkEditMode && !this.addLink ) {
							editor.getSelection().selectElement( this.linkElement );
							editor.insertElement( this.imageElement );
						}
					}
				},
				onLoad: function() {
					if ( dialogType != 'image' )
						this.hidePage( 'Link' ); //Hide Link tab.
					var doc = this._.element.getDocument();

					if ( this.getContentElement( 'info', 'ratioLock' ) ) {
						this.addFocusable( doc.getById( btnResetSizeId ), 5 );
						this.addFocusable( doc.getById( btnLockSizesId ), 5 );
					}

					this.commitContent = commitContent;
				},
				onHide: function() {
					if ( this.preview )
						this.commitContent( CLEANUP, this.preview );

					if ( this.originalElement ) {
						this.originalElement.removeListener( 'load', onImgLoadEvent );
						this.originalElement.removeListener( 'error', onImgLoadErrorEvent );
						this.originalElement.removeListener( 'abort', onImgLoadErrorEvent );
						this.originalElement.remove();
						this.originalElement = false; // Dialog is closed.
					}

					delete this.imageElement;
				},
				contents: [ {
					id: 'info',
					label: editor.lang.image.infoTab,
					accessKey: 'I',
					elements: [ {
						type: 'vbox',
						padding: 0,
						children: [ {
							type: 'hbox',
							widths: [ '280px', '110px' ],
							align: 'right',
							className: 'cke_dialog_image_url',
							children: [ {
								id: 'txtUrl',
								type: 'text',
								label: editor.lang.common.url,
								required: true,
								onChange: function() {
									var dialog = this.getDialog(),
										newUrl = this.getValue();

									// Update original image.
									// Prevent from load before onShow.
									if ( newUrl.length > 0 ) {
										dialog = this.getDialog();
										var original = dialog.originalElement;

										if ( dialog.preview ) {
											dialog.preview.removeStyle( 'display' );
										}

										original.setCustomData( 'isReady', 'false' );
										// Show loader.
										var loader = CKEDITOR.document.getById( imagePreviewLoaderId );
										if ( loader )
											loader.setStyle( 'display', '' );

										original.on( 'load', onImgLoadEvent, dialog );
										original.on( 'error', onImgLoadErrorEvent, dialog );
										original.on( 'abort', onImgLoadErrorEvent, dialog );
										original.setAttribute( 'src', newUrl );

										if ( dialog.preview ) {
											// Query the preloader to figure out the url impacted by based href.
											previewPreloader.setAttribute( 'src', newUrl );
											dialog.preview.setAttribute( 'src', previewPreloader.$.src );
											updatePreview( dialog );
										}
									}
									// Dont show preview if no URL given.
									else if ( dialog.preview ) {
										dialog.preview.removeAttribute( 'src' );
										dialog.preview.setStyle( 'display', 'none' );
									}
								},
								setup: function( type, element ) {
									if ( type == IMAGE ) {
										var url = element.data( 'cke-saved-src' ) || element.getAttribute( 'src' );
										var field = this;

										this.getDialog().dontResetSize = true;

										field.setValue( url ); // And call this.onChange()
										// Manually set the initial value.(https://dev.ckeditor.com/ticket/4191)
										field.setInitValue();
									}
								},
								commit: function( type, element ) {
									if ( type == IMAGE && ( this.getValue() || this.isChanged() ) ) {
										element.data( 'cke-saved-src', this.getValue() );
										element.setAttribute( 'src', this.getValue() );
									} else if ( type == CLEANUP ) {
										element.setAttribute( 'src', '' ); // If removeAttribute doesn't work.
										element.removeAttribute( 'src' );
									}
								},
								validate: CKEDITOR.dialog.validate.notEmpty( editor.lang.image.urlMissing )
							},
							{
								type: 'button',
								id: 'browse',
								// v-align with the 'txtUrl' field.
								// TODO: We need something better than a fixed size here.
								style: 'display:inline-block;margin-top:14px;',
								align: 'center',
								label: editor.lang.common.browseServer,
								hidden: true,
								filebrowser: 'info:txtUrl'
							} ]
						} ]
					},
					{
						id: 'txtAlt',
						type: 'text',
						label: editor.lang.image.alt,
						accessKey: 'T',
						'default': '',
						onChange: function() {
							updatePreview( this.getDialog() );
						},
						setup: function( type, element ) {
							if ( type == IMAGE )
								this.setValue( element.getAttribute( 'alt' ) );
						},
						commit: function( type, element ) {
							if ( type == IMAGE ) {
								if ( this.getValue() || this.isChanged() )
									element.setAttribute( 'alt', this.getValue() );
							} else if ( type == PREVIEW )
								element.setAttribute( 'alt', this.getValue() );
							else if ( type == CLEANUP ) {
								element.removeAttribute( 'alt' );
							}

						}
					},
					{
						type: 'hbox',
						children: [ {
							id: 'basic',
							type: 'vbox',
							children: [ {
								type: 'hbox',
								requiredContent: 'img{width,height}',
								widths: [ '50%', '50%' ],
								children: [ {
									type: 'vbox',
									padding: 1,
									children: [ {
										type: 'text',
										width: '45px',
										id: 'txtWidth',
										label: editor.lang.common.width,
										onKeyUp: onSizeChange,
										onChange: function() {
											commitInternally.call( this, 'advanced:txtdlgGenStyle' );
										},
										validate: function() {
											var aMatch = this.getValue().match( regexGetSizeOrEmpty ),
												isValid = !!( aMatch && parseInt( aMatch[ 1 ], 10 ) !== 0 );
											if ( !isValid )
												alert( editor.lang.common.invalidLength.replace( '%1', editor.lang.common.width ).replace( '%2', 'px, %' ) ); // jshint ignore:line
											return isValid;
										},
										setup: setupDimension,
										commit: function( type, element ) {
											var value = this.getValue();
											if ( type == IMAGE ) {
												if ( value && editor.activeFilter.check( 'img{width,height}' ) )
													element.setStyle( 'width', CKEDITOR.tools.cssLength( value ) );
												else
													element.removeStyle( 'width' );

												element.removeAttribute( 'width' );
											} else if ( type == PREVIEW ) {
												var aMatch = value.match( regexGetSize );
												if ( !aMatch ) {
													var oImageOriginal = this.getDialog().originalElement;
													if ( oImageOriginal.getCustomData( 'isReady' ) == 'true' )
														element.setStyle( 'width', oImageOriginal.$.width + 'px' );
												} else {
													element.setStyle( 'width', CKEDITOR.tools.cssLength( value ) );
												}
											} else if ( type == CLEANUP ) {
												element.removeAttribute( 'width' );
												element.removeStyle( 'width' );
											}
										}
									},
									{
										type: 'text',
										id: 'txtHeight',
										width: '45px',
										label: editor.lang.common.height,
										onKeyUp: onSizeChange,
										onChange: function() {
											commitInternally.call( this, 'advanced:txtdlgGenStyle' );
										},
										validate: function() {
											var aMatch = this.getValue().match( regexGetSizeOrEmpty ),
												isValid = !!( aMatch && parseInt( aMatch[ 1 ], 10 ) !== 0 );
											if ( !isValid )
												alert( editor.lang.common.invalidLength.replace( '%1', editor.lang.common.height ).replace( '%2', 'px, %' ) ); // jshint ignore:line
											return isValid;
										},
										setup: setupDimension,
										commit: function( type, element ) {
											var value = this.getValue();
											if ( type == IMAGE ) {
												if ( value && editor.activeFilter.check( 'img{width,height}' ) )
													element.setStyle( 'height', CKEDITOR.tools.cssLength( value ) );
												else
													element.removeStyle( 'height' );

												element.removeAttribute( 'height' );
											} else if ( type == PREVIEW ) {
												var aMatch = value.match( regexGetSize );
												if ( !aMatch ) {
													var oImageOriginal = this.getDialog().originalElement;
													if ( oImageOriginal.getCustomData( 'isReady' ) == 'true' )
														element.setStyle( 'height', oImageOriginal.$.height + 'px' );
												} else {
													element.setStyle( 'height', CKEDITOR.tools.cssLength( value ) );
												}
											} else if ( type == CLEANUP ) {
												element.removeAttribute( 'height' );
												element.removeStyle( 'height' );
											}
										}
									} ]
								},
								{
									id: 'ratioLock',
									type: 'html',
									className: 'cke_dialog_image_ratiolock',
									style: 'margin-top:30px;width:40px;height:40px;',
									onLoad: function() {
										// Activate Reset button
										var resetButton = CKEDITOR.document.getById( btnResetSizeId ),
											ratioButton = CKEDITOR.document.getById( btnLockSizesId );
										if ( resetButton ) {
											resetButton.on( 'click', function( evt ) {
												resetSize( this );
												evt.data && evt.data.preventDefault();
											}, this.getDialog() );
											resetButton.on( 'mouseover', function() {
												this.addClass( 'cke_btn_over' );
											}, resetButton );
											resetButton.on( 'mouseout', function() {
												this.removeClass( 'cke_btn_over' );
											}, resetButton );
										}
										// Activate (Un)LockRatio button
										if ( ratioButton ) {
											ratioButton.on( 'click', function( evt ) {
												switchLockRatio( this );

												var oImageOriginal = this.originalElement,
													width = this.getValueOf( 'info', 'txtWidth' );

												if ( oImageOriginal.getCustomData( 'isReady' ) == 'true' && width ) {
													var height = oImageOriginal.$.height / oImageOriginal.$.width * width;
													if ( !isNaN( height ) ) {
														this.setValueOf( 'info', 'txtHeight', Math.round( height ) );
														updatePreview( this );
													}
												}
												evt.data && evt.data.preventDefault();
											}, this.getDialog() );
											ratioButton.on( 'mouseover', function() {
												this.addClass( 'cke_btn_over' );
											}, ratioButton );
											ratioButton.on( 'mouseout', function() {
												this.removeClass( 'cke_btn_over' );
											}, ratioButton );
										}
									},
									html: '<div>' +
										'<a href="javascript:void(0)" tabindex="-1" title="' + editor.lang.image.lockRatio +
										'" class="cke_btn_locked" id="' + btnLockSizesId + '" role="checkbox"><span class="cke_icon"></span><span class="cke_label">' + editor.lang.image.lockRatio + '</span></a>' +
										'<a href="javascript:void(0)" tabindex="-1" title="' + editor.lang.image.resetSize +
										'" class="cke_btn_reset" id="' + btnResetSizeId + '" role="button"><span class="cke_label">' + editor.lang.image.resetSize + '</span></a>' +
										'</div>'
								} ]
							},
							{
								type: 'vbox',
								padding: 1,
								children: [ {
									type: 'text',
									id: 'txtBorder',
									requiredContent: 'img{border-width}',
									width: '60px',
									label: editor.lang.image.border,
									'default': '',
									onKeyUp: function() {
										updatePreview( this.getDialog() );
									},
									onChange: function() {
										commitInternally.call( this, 'advanced:txtdlgGenStyle' );
									},
									validate: CKEDITOR.dialog.validate.integer( editor.lang.image.validateBorder ),
									setup: function( type, element ) {
										if ( type == IMAGE ) {
											var value,
												borderStyle = element.getStyle( 'border-width' );
											borderStyle = borderStyle && borderStyle.match( /^(\d+px)(?: \1 \1 \1)?$/ );
											value = borderStyle && parseInt( borderStyle[ 1 ], 10 );
											isNaN( parseInt( value, 10 ) ) && ( value = element.getAttribute( 'border' ) );
											this.setValue( value );
										}
									},
									commit: function( type, element ) {
										var value = parseInt( this.getValue(), 10 );
										if ( type == IMAGE || type == PREVIEW ) {
											if ( !isNaN( value ) ) {
												element.setStyle( 'border-width', CKEDITOR.tools.cssLength( value ) );
												element.setStyle( 'border-style', 'solid' );
											} else if ( !value && this.isChanged() ) {
												element.removeStyle( 'border' );
											}

											if ( type == IMAGE )
												element.removeAttribute( 'border' );
										} else if ( type == CLEANUP ) {
											element.removeAttribute( 'border' );
											element.removeStyle( 'border-width' );
											element.removeStyle( 'border-style' );
											element.removeStyle( 'border-color' );
										}
									}
								},
								{
									type: 'text',
									id: 'txtHSpace',
									requiredContent: 'img{margin-left,margin-right}',
									width: '60px',
									label: editor.lang.image.hSpace,
									'default': '',
									onKeyUp: function() {
										updatePreview( this.getDialog() );
									},
									onChange: function() {
										commitInternally.call( this, 'advanced:txtdlgGenStyle' );
									},
									validate: CKEDITOR.dialog.validate.integer( editor.lang.image.validateHSpace ),
									setup: function( type, element ) {
										if ( type == IMAGE ) {
											var value, marginLeftPx, marginRightPx,
												marginLeftStyle = element.getStyle( 'margin-left' ),
												marginRightStyle = element.getStyle( 'margin-right' );

											marginLeftStyle = marginLeftStyle && marginLeftStyle.match( pxLengthRegex );
											marginRightStyle = marginRightStyle && marginRightStyle.match( pxLengthRegex );
											marginLeftPx = parseInt( marginLeftStyle, 10 );
											marginRightPx = parseInt( marginRightStyle, 10 );

											value = ( marginLeftPx == marginRightPx ) && marginLeftPx;
											isNaN( parseInt( value, 10 ) ) && ( value = element.getAttribute( 'hspace' ) );

											this.setValue( value );
										}
									},
									commit: function( type, element ) {
										var value = parseInt( this.getValue(), 10 );
										if ( type == IMAGE || type == PREVIEW ) {
											if ( !isNaN( value ) ) {
												element.setStyle( 'margin-left', CKEDITOR.tools.cssLength( value ) );
												element.setStyle( 'margin-right', CKEDITOR.tools.cssLength( value ) );
											} else if ( !value && this.isChanged() ) {
												element.removeStyle( 'margin-left' );
												element.removeStyle( 'margin-right' );
											}

											if ( type == IMAGE )
												element.removeAttribute( 'hspace' );
										} else if ( type == CLEANUP ) {
											element.removeAttribute( 'hspace' );
											element.removeStyle( 'margin-left' );
											element.removeStyle( 'margin-right' );
										}
									}
								},
								{
									type: 'text',
									id: 'txtVSpace',
									requiredContent: 'img{margin-top,margin-bottom}',
									width: '60px',
									label: editor.lang.image.vSpace,
									'default': '',
									onKeyUp: function() {
										updatePreview( this.getDialog() );
									},
									onChange: function() {
										commitInternally.call( this, 'advanced:txtdlgGenStyle' );
									},
									validate: CKEDITOR.dialog.validate.integer( editor.lang.image.validateVSpace ),
									setup: function( type, element ) {
										if ( type == IMAGE ) {
											var value, marginTopPx, marginBottomPx,
												marginTopStyle = element.getStyle( 'margin-top' ),
												marginBottomStyle = element.getStyle( 'margin-bottom' );

											marginTopStyle = marginTopStyle && marginTopStyle.match( pxLengthRegex );
											marginBottomStyle = marginBottomStyle && marginBottomStyle.match( pxLengthRegex );
											marginTopPx = parseInt( marginTopStyle, 10 );
											marginBottomPx = parseInt( marginBottomStyle, 10 );

											value = ( marginTopPx == marginBottomPx ) && marginTopPx;
											isNaN( parseInt( value, 10 ) ) && ( value = element.getAttribute( 'vspace' ) );
											this.setValue( value );
										}
									},
									commit: function( type, element ) {
										var value = parseInt( this.getValue(), 10 );
										if ( type == IMAGE || type == PREVIEW ) {
											if ( !isNaN( value ) ) {
												element.setStyle( 'margin-top', CKEDITOR.tools.cssLength( value ) );
												element.setStyle( 'margin-bottom', CKEDITOR.tools.cssLength( value ) );
											} else if ( !value && this.isChanged() ) {
												element.removeStyle( 'margin-top' );
												element.removeStyle( 'margin-bottom' );
											}

											if ( type == IMAGE )
												element.removeAttribute( 'vspace' );
										} else if ( type == CLEANUP ) {
											element.removeAttribute( 'vspace' );
											element.removeStyle( 'margin-top' );
											element.removeStyle( 'margin-bottom' );
										}
									}
								},
								{
									id: 'cmbAlign',
									requiredContent: 'img{float}',
									type: 'select',
									widths: [ '35%', '65%' ],
									style: 'width:90px',
									label: editor.lang.common.align,
									'default': '',
									items: [
										[ editor.lang.common.notSet, '' ],
										[ editor.lang.common.left, 'left' ],
										[ editor.lang.common.right, 'right' ]
										// Backward compatible with v2 on setup when specified as attribute value,
										// while these values are no more available as select options.
										//	[ editor.lang.image.alignAbsBottom , 'absBottom'],
										//	[ editor.lang.image.alignAbsMiddle , 'absMiddle'],
										//  [ editor.lang.image.alignBaseline , 'baseline'],
										//  [ editor.lang.image.alignTextTop , 'text-top'],
										//  [ editor.lang.image.alignBottom , 'bottom'],
										//  [ editor.lang.image.alignMiddle , 'middle'],
										//  [ editor.lang.image.alignTop , 'top']
									],
									onChange: function() {
										updatePreview( this.getDialog() );
										commitInternally.call( this, 'advanced:txtdlgGenStyle' );
									},
									setup: function( type, element ) {
										if ( type == IMAGE ) {
											var value = element.getStyle( 'float' );
											switch ( value ) {
												// Ignore those unrelated values.
												case 'inherit':
												case 'none':
													value = '';
											}

											!value && ( value = ( element.getAttribute( 'align' ) || '' ).toLowerCase() );
											this.setValue( value );
										}
									},
									commit: function( type, element ) {
										var value = this.getValue();
										if ( type == IMAGE || type == PREVIEW ) {
											if ( value )
												element.setStyle( 'float', value );
											else
												element.removeStyle( 'float' );

											if ( type == IMAGE ) {
												value = ( element.getAttribute( 'align' ) || '' ).toLowerCase();
												switch ( value ) {
													// we should remove it only if it matches "left" or "right",
													// otherwise leave it intact.
													case 'left':
													case 'right':
														element.removeAttribute( 'align' );
												}
											}
										} else if ( type == CLEANUP ) {
											element.removeStyle( 'float' );
										}
									}
								} ]
							} ]
						},
						{
							type: 'vbox',
							height: '250px',
							children: [ {
								type: 'html',
								id: 'htmlPreview',
								style: 'width:95%;',
								html: '<div>' + CKEDITOR.tools.htmlEncode( editor.lang.common.preview ) + '<br>' +
									'<div id="' + imagePreviewLoaderId + '" class="ImagePreviewLoader" style="display:none"><div class="loading">&nbsp;</div></div>' +
									'<div class="ImagePreviewBox"><table><tr><td>' +
										'<a href="javascript:void(0)" target="_blank" onclick="return false;" id="' + previewLinkId + '">' +
										'<img id="' + previewImageId + '" alt="" /></a>' +
									// jscs:disable maximumLineLength
										( editor.config.image_previewText || 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ' +
											'Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, ' +
											'nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.' ) +
									// jscs:enable maximumLineLength
									'</td></tr></table></div></div>'
							} ]
						} ]
					} ]
				},
				{
					id: 'Link',
					requiredContent: 'a[href]',
					label: editor.lang.image.linkTab,
					padding: 0,
					elements: [ {
						id: 'txtUrl',
						type: 'text',
						label: editor.lang.common.url,
						style: 'width: 100%',
						'default': '',
						setup: function( type, element ) {
							if ( type == LINK ) {
								var href = element.data( 'cke-saved-href' );
								if ( !href )
									href = element.getAttribute( 'href' );
								this.setValue( href );
							}
						},
						commit: function( type, element ) {
							if ( type == LINK ) {
								if ( this.getValue() || this.isChanged() ) {
									var url = this.getValue();
									element.data( 'cke-saved-href', url );
									element.setAttribute( 'href', url );

									if ( this.getValue() || !editor.config.image_removeLinkByEmptyURL )
										this.getDialog().addLink = true;
									else
										this.getDialog().addLink = false;
								}
							}
						}
					},
					{
						type: 'button',
						id: 'browse',
						className: 'cke_dialog_image_browse',
						filebrowser: {
							action: 'Browse',
							target: 'Link:txtUrl',
							url: editor.config.filebrowserImageBrowseLinkUrl
						},
						style: 'float:right',
						hidden: true,
						label: editor.lang.common.browseServer
					},
					{
						id: 'cmbTarget',
						type: 'select',
						requiredContent: 'a[target]',
						label: editor.lang.common.target,
						'default': '',
						items: [
							[ editor.lang.common.notSet, '' ],
							[ editor.lang.common.targetNew, '_blank' ],
							[ editor.lang.common.targetTop, '_top' ],
							[ editor.lang.common.targetSelf, '_self' ],
							[ editor.lang.common.targetParent, '_parent' ]
						],
						setup: function( type, element ) {
							if ( type == LINK )
								this.setValue( element.getAttribute( 'target' ) || '' );
						},
						commit: function( type, element ) {
							if ( type == LINK ) {
								if ( this.getValue() || this.isChanged() )
									element.setAttribute( 'target', this.getValue() );
							}
						}
					} ]
				},
				{
					id: 'Upload',
					hidden: true,
					filebrowser: 'uploadButton',
					label: editor.lang.image.upload,
					elements: [ {
						type: 'file',
						id: 'upload',
						label: editor.lang.image.btnUpload,
						style: 'height:40px',
						size: 38
					},
					{
						type: 'fileButton',
						id: 'uploadButton',
						filebrowser: 'info:txtUrl',
						label: editor.lang.image.btnUpload,
						'for': [ 'Upload', 'upload' ]
					} ]
				},
				{
					id: 'advanced',
					label: editor.lang.common.advancedTab,
					elements: [ {
						type: 'hbox',
						widths: [ '50%', '25%', '25%' ],
						children: [ {
							type: 'text',
							id: 'linkId',
							requiredContent: 'img[id]',
							label: editor.lang.common.id,
							setup: function( type, element ) {
								if ( type == IMAGE )
									this.setValue( element.getAttribute( 'id' ) );
							},
							commit: function( type, element ) {
								if ( type == IMAGE ) {
									if ( this.getValue() || this.isChanged() )
										element.setAttribute( 'id', this.getValue() );
								}
							}
						},
						{
							id: 'cmbLangDir',
							type: 'select',
							requiredContent: 'img[dir]',
							style: 'width : 100px;',
							label: editor.lang.common.langDir,
							'default': '',
							items: [
								[ editor.lang.common.notSet, '' ],
								[ editor.lang.common.langDirLtr, 'ltr' ],
								[ editor.lang.common.langDirRtl, 'rtl' ]
							],
							setup: function( type, element ) {
								if ( type == IMAGE )
									this.setValue( element.getAttribute( 'dir' ) );
							},
							commit: function( type, element ) {
								if ( type == IMAGE ) {
									if ( this.getValue() || this.isChanged() )
										element.setAttribute( 'dir', this.getValue() );
								}
							}
						},
						{
							type: 'text',
							id: 'txtLangCode',
							requiredContent: 'img[lang]',
							label: editor.lang.common.langCode,
							'default': '',
							setup: function( type, element ) {
								if ( type == IMAGE )
									this.setValue( element.getAttribute( 'lang' ) );
							},
							commit: function( type, element ) {
								if ( type == IMAGE ) {
									if ( this.getValue() || this.isChanged() )
										element.setAttribute( 'lang', this.getValue() );
								}
							}
						} ]
					},
					{
						type: 'text',
						id: 'txtGenLongDescr',
						requiredContent: 'img[longdesc]',
						label: editor.lang.common.longDescr,
						setup: function( type, element ) {
							if ( type == IMAGE )
								this.setValue( element.getAttribute( 'longDesc' ) );
						},
						commit: function( type, element ) {
							if ( type == IMAGE ) {
								if ( this.getValue() || this.isChanged() )
									element.setAttribute( 'longDesc', this.getValue() );
							}
						}
					},
					{
						type: 'hbox',
						widths: [ '50%', '50%' ],
						children: [ {
							type: 'text',
							id: 'txtGenClass',
							requiredContent: 'img(cke-xyz)', // Random text like 'xyz' will check if all are allowed.
							label: editor.lang.common.cssClass,
							'default': '',
							setup: function( type, element ) {
								if ( type == IMAGE )
									this.setValue( element.getAttribute( 'class' ) );
							},
							commit: function( type, element ) {
								if ( type == IMAGE ) {
									if ( this.getValue() || this.isChanged() )
										element.setAttribute( 'class', this.getValue() );
								}
							}
						},
						{
							type: 'text',
							id: 'txtGenTitle',
							requiredContent: 'img[title]',
							label: editor.lang.common.advisoryTitle,
							'default': '',
							onChange: function() {
								updatePreview( this.getDialog() );
							},
							setup: function( type, element ) {
								if ( type == IMAGE )
									this.setValue( element.getAttribute( 'title' ) );
							},
							commit: function( type, element ) {
								if ( type == IMAGE ) {
									if ( this.getValue() || this.isChanged() )
										element.setAttribute( 'title', this.getValue() );
								} else if ( type == PREVIEW )
									element.setAttribute( 'title', this.getValue() );
								else if ( type == CLEANUP ) {
									element.removeAttribute( 'title' );
								}
							}
						} ]
					},
					{
						type: 'text',
						id: 'txtdlgGenStyle',
						requiredContent: 'img{cke-xyz}', // Random text like 'xyz' will check if all are allowed.
						label: editor.lang.common.cssStyle,
						validate: CKEDITOR.dialog.validate.inlineStyle( editor.lang.common.invalidInlineStyle ),
						'default': '',
						setup: function( type, element ) {
							if ( type == IMAGE ) {
								var genStyle = element.getAttribute( 'style' );
								if ( !genStyle && element.$.style.cssText )
									genStyle = element.$.style.cssText;
								this.setValue( genStyle );

								var height = element.$.style.height,
									width = element.$.style.width,
									aMatchH = ( height ? height : '' ).match( regexGetSize ),
									aMatchW = ( width ? width : '' ).match( regexGetSize );

								this.attributesInStyle = {
									height: !!aMatchH,
									width: !!aMatchW
								};
							}
						},
						onChange: function() {
							commitInternally.call(
								this, [
									'info:cmbFloat',
									'info:cmbAlign',
									'info:txtVSpace',
									'info:txtHSpace',
									'info:txtBorder',
									'info:txtWidth',
									'info:txtHeight'
								]
							);
							updatePreview( this );
						},
						commit: function( type, element ) {
							if ( type == IMAGE && ( this.getValue() || this.isChanged() ) )
								element.setAttribute( 'style', this.getValue() );

						}
					} ]
				} ]
			};
		};

	CKEDITOR.dialog.add( 'image', function( editor ) {
		return imageDialog( editor, 'image' );
	} );

	CKEDITOR.dialog.add( 'imagebutton', function( editor ) {
		return imageDialog( editor, 'imagebutton' );
	} );
} )();
>>>>>>> 4.12.1
