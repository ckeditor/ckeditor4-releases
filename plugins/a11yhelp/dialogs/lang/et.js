<<<<<<< HEAD
﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.setLang("a11yhelp","et",{title:"Accessibility Instructions",contents:"Abi sisu. Selle dialoogi sulgemiseks vajuta ESC klahvi.",legend:[{name:"Üldine",items:[{name:"Editor Toolbar",legend:"Press ${toolbarFocus} to navigate to the toolbar. Move to the next and previous toolbar group with TAB and SHIFT-TAB. Move to the next and previous toolbar button with RIGHT ARROW or LEFT ARROW. Press SPACE or ENTER to activate the toolbar button."},{name:"Editor Dialog",legend:"Inside a dialog, press TAB to navigate to next dialog field, press SHIFT + TAB to move to previous field, press ENTER to submit dialog, press ESC to cancel dialog. For dialogs that have multiple tab pages, press ALT + F10 to navigate to tab-list. Then move to next tab with TAB OR RIGTH ARROW. Move to previous tab with SHIFT + TAB or LEFT ARROW. Press SPACE or ENTER to select the tab page."},
{name:"Editor Context Menu",legend:"Press ${contextMenu} or APPLICATION KEY to open context-menu. Then move to next menu option with TAB or DOWN ARROW. Move to previous option with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the menu option. Open sub-menu of current option with SPACE or ENTER or RIGHT ARROW. Go back to parent menu item with ESC or LEFT ARROW. Close context menu with ESC."},{name:"Editor List Box",legend:"Inside a list-box, move to next list item with TAB OR DOWN ARROW. Move to previous list item with SHIFT + TAB or UP ARROW. Press SPACE or ENTER to select the list option. Press ESC to close the list-box."},
{name:"Editor Element Path Bar",legend:"Press ${elementsPathFocus} to navigate to the elements path bar. Move to next element button with TAB or RIGHT ARROW. Move to previous button with  SHIFT+TAB or LEFT ARROW. Press SPACE or ENTER to select the element in editor."}]},{name:"Commands",items:[{name:" Undo command",legend:"Press ${undo}"},{name:" Redo command",legend:"Press ${redo}"},{name:" Bold command",legend:"Press ${bold}"},{name:" Italic command",legend:"Press ${italic}"},{name:" Underline command",
legend:"Press ${underline}"},{name:" Link command",legend:"Press ${link}"},{name:" Toolbar Collapse command",legend:"Press ${toolbarCollapse}"},{name:" Access previous focus space command",legend:"Press ${accessPreviousSpace} to access the closest unreachable focus space before the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces."},{name:" Access next focus space command",legend:"Press ${accessNextSpace} to access the closest unreachable focus space after the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces."},
{name:" Accessibility Help",legend:"Press ${a11yHelp}"}]}],backspace:"Backspace",tab:"Tab",enter:"Enter",shift:"Shift",ctrl:"Ctrl",alt:"Alt",pause:"Pause",capslock:"Caps Lock",escape:"Escape",pageUp:"Page Up",pageDown:"Page Down",end:"End",home:"Home",leftArrow:"Left Arrow",upArrow:"Up Arrow",rightArrow:"Right Arrow",downArrow:"Down Arrow",insert:"Insert","delete":"Delete",leftWindowKey:"Left Windows key",rightWindowKey:"Right Windows key",selectKey:"Select key",numpad0:"Numpad 0",numpad1:"Numpad 1",
numpad2:"Numpad 2",numpad3:"Numpad 3",numpad4:"Numpad 4",numpad5:"Numpad 5",numpad6:"Numpad 6",numpad7:"Numpad 7",numpad8:"Numpad 8",numpad9:"Numpad 9",multiply:"Multiply",add:"Add",subtract:"Subtract",decimalPoint:"Decimal Point",divide:"Divide",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",numLock:"Num Lock",scrollLock:"Scroll Lock",semiColon:"Semicolon",equalSign:"Equal Sign",comma:"Comma",dash:"Dash",period:"Period",forwardSlash:"Forward Slash",
graveAccent:"Grave Accent",openBracket:"Open Bracket",backSlash:"Backslash",closeBracket:"Close Bracket",singleQuote:"Single Quote"});
=======
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'et', {
	title: 'Hõlbustuste kasutamise juhised',
	contents: 'Abi sisu. Selle dialoogi sulgemiseks vajuta ESC klahvi.',
	legend: [
		{
		name: 'Üldine',
		items: [
			{
			name: 'Redaktori tööriistariba',
			legend: 'Tööriistaribale navigeerimiseks vajuta ${toolbarFocus}. Järgmisele või eelmisele tööriistagrupile liikumiseks vajuta TAB või SHIFT+TAB. Järgmisele või eelmisele tööriistaribale liikumiseks vajuta PAREMALE NOOLT või VASAKULE NOOLT. Vajuta TÜHIKUT või ENTERIT, et tööriistariba nupp aktiveerida.'
		},

			{
			name: 'Redaktori dialoog',
			legend:
				'Dialoogi sees vajuta TAB, et liikuda järgmisele dialoogi elemendile, SHIFT+TAB, et liikuda tagasi, vajuta ENTER dialoogi kinnitamiseks, ESC dialoogi sulgemiseks. Kui dialoogil on mitu kaarti/sakki, pääseb kaartide nimekirjale ligi ALT+F10 klahvidega või TABi kasutades. Kui kaartide nimekiri on fookuses, saab järgmisele ja eelmisele kaardile vastavalt PAREMALE ja VASAKULE NOOLTEGA.' 
		},

			{
			name: 'Redaktori kontekstimenüü',
			legend: 'Vajuta ${contextMenu} või RAKENDUSE KLAHVI, et avada kontekstimenüü. Siis saad liikuda järgmisele reale TAB klahvi või ALLA NOOLEGA. Eelmisele valikule saab liikuda SHIFT+TAB klahvidega või ÜLES NOOLEGA. Kirje valimiseks vajuta TÜHIK või ENTER. Alamenüü saab valida kui alammenüü kirje on aktiivne ja valida kas TÜHIK, ENTER või PAREMALE NOOL. Ülemisse menüüsse tagasi saab ESC klahvi või VASAKULE NOOLEGA. Menüü saab sulgeda ESC klahviga.'
		},

			{
			name: 'Redaktori loetelu kast',
			legend: 'Loetelu kasti sees saab järgmisele reale liikuda TAB klahvi või ALLANOOLEGA. Eelmisele reale saab liikuda SHIFT+TAB klahvide või ÜLESNOOLEGA. Kirje valimiseks vajuta TÜHIKUT või ENTERIT. Loetelu kasti sulgemiseks vajuta ESC klahvi.'
		},

			{
			name: 'Redaktori elementide järjestuse riba',
			legend: 'Vajuta ${elementsPathFocus} et liikuda asukoha ribal asuvatele elementidele. Järgmise elemendi nupule saab liikuda TAB klahviga või PAREMALE NOOLEGA. Eelmisele nupule saab liikuda SHIFT+TAB klahvi või VASAKULE NOOLEGA. Vajuta TÜHIK või ENTER, et valida redaktoris vastav element.'
		}
		]
	},
		{
		name: 'Käsud',
		items: [
			{
			name: 'Tühistamise käsk',
			legend: 'Vajuta ${undo}'
		},
			{
			name: 'Uuesti tegemise käsk',
			legend: 'Vajuta ${redo}'
		},
			{
			name: 'Rasvase käsk',
			legend: 'Vajuta ${bold}'
		},
			{
			name: 'Kursiivi käsk',
			legend: 'Vajuta ${italic}'
		},
			{
			name: 'Allajoonimise käsk',
			legend: 'Vajuta ${underline}'
		},
			{
			name: 'Lingi käsk',
			legend: 'Vajuta ${link}'
		},
			{
			name: 'Tööriistariba peitmise käsk',
			legend: 'Vajuta ${toolbarCollapse}'
		},
			{
			name: 'Ligipääs eelmisele fookuskohale',
			legend: 'Vajuta ${accessPreviousSpace}, et pääseda ligi lähimale liigipääsematule fookuskohale enne kursorit, näiteks: kahe järjestikuse HR elemendi vahele. Vajuta kombinatsiooni uuesti, et pääseda ligi kaugematele kohtadele.'
		},
			{
			name: 'Ligipääs järgmisele fookuskohale',
			legend: 'Vajuta ${accessNextSpace}, et pääseda ligi lähimale liigipääsematule fookuskohale pärast kursorit, näiteks: kahe järjestikuse HR elemendi vahele. Vajuta kombinatsiooni uuesti, et pääseda ligi kaugematele kohtadele.'
		},
			{
			name: 'Hõlbustuste abi',
			legend: 'Vajuta ${a11yHelp}'
		},
			{
			name: 'Asetamine tavalise tekstina',
			legend: 'Vajuta ${pastetext}',
			legendEdge: 'Vajuta ${pastetext}, siis ${paste}'
		}
		]
	}
	],
	tab: 'Tabulaator',
	pause: 'Paus',
	capslock: 'Tõstulukk',
	escape: 'Paoklahv',
	pageUp: 'Leht üles',
	pageDown: 'Leht alla',
	leftArrow: 'Nool vasakule',
	upArrow: 'Nool üles',
	rightArrow: 'Nool paremale',
	downArrow: 'Nool alla',
	insert: 'Sisetamine',
	leftWindowKey: 'Vasak Windowsi klahv',
	rightWindowKey: 'Parem Windowsi klahv',
	selectKey: 'Vali klahv',
	numpad0: 'Numbriala 0',
	numpad1: 'Numbriala 1',
	numpad2: 'Numbriala 2',
	numpad3: 'Numbriala 3',
	numpad4: 'Numbriala 4',
	numpad5: 'Numbriala 5',
	numpad6: 'Numbriala 6',
	numpad7: 'Numbriala 7',
	numpad8: 'Numbriala 8',
	numpad9: 'Numbriala 9',
	multiply: 'Korrutus',
	add: 'Pluss',
	subtract: 'Miinus',
	decimalPoint: 'Koma',
	divide: 'Jagamine',
	f1: 'F1',
	f2: 'F2',
	f3: 'F3',
	f4: 'F4',
	f5: 'F5',
	f6: 'F6',
	f7: 'F7',
	f8: 'F8',
	f9: 'F9',
	f10: 'F10',
	f11: 'F11',
	f12: 'F12',
	numLock: 'Numbrilukk',
	scrollLock: 'Kerimislukk',
	semiColon: 'Semikoolon',
	equalSign: 'Võrdusmärk',
	comma: 'Koma',
	dash: 'Sidekriips',
	period: 'Punkt',
	forwardSlash: 'Kaldkriips',
	graveAccent: 'Rõhumärk',
	openBracket: 'Algussulg',
	backSlash: 'Kurakaldkriips',
	closeBracket: 'Lõpusulg',
	singleQuote: 'Ülakoma'
} );
>>>>>>> 4.12.1
