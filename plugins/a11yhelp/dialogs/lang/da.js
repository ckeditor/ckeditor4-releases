<<<<<<< HEAD
﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.setLang("a11yhelp","da",{title:"Tilgængelighedsinstrukser",contents:"Onlinehjælp. For at lukke dette vindue klik ESC",legend:[{name:"Generelt",items:[{name:"Editor værktøjslinje",legend:"Press ${toolbarFocus} to navigate to the toolbar. Move to the next and previous toolbar group with TAB and SHIFT-TAB. Move to the next and previous toolbar button with RIGHT ARROW or LEFT ARROW. Press SPACE or ENTER to activate the toolbar button."},{name:"Editor Dialog",legend:"Inside a dialog, press TAB to navigate to next dialog field, press SHIFT + TAB to move to previous field, press ENTER to submit dialog, press ESC to cancel dialog. For dialogs that have multiple tab pages, press ALT + F10 to navigate to tab-list. Then move to next tab with TAB OR RIGTH ARROW. Move to previous tab with SHIFT + TAB or LEFT ARROW. Press SPACE or ENTER to select the tab page."},
{name:"Editor Context Menu",legend:"Press ${contextMenu} or APPLICATION KEY to open context-menu. Then move to next menu option with TAB or DOWN ARROW. Move to previous option with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the menu option. Open sub-menu of current option with SPACE or ENTER or RIGHT ARROW. Go back to parent menu item with ESC or LEFT ARROW. Close context menu with ESC."},{name:"Editor List Box",legend:"Inside a list-box, move to next list item with TAB OR DOWN ARROW. Move to previous list item with SHIFT + TAB or UP ARROW. Press SPACE or ENTER to select the list option. Press ESC to close the list-box."},
{name:"Editor Element Path Bar",legend:"Press ${elementsPathFocus} to navigate to the elements path bar. Move to next element button with TAB or RIGHT ARROW. Move to previous button with  SHIFT+TAB or LEFT ARROW. Press SPACE or ENTER to select the element in editor."}]},{name:"Kommandoer",items:[{name:"Fortryd kommando",legend:"Klik på ${undo}"},{name:"Gentag kommando",legend:"Klik ${redo}"},{name:" Bold command",legend:"Klik ${bold}"},{name:" Italic command",legend:"Press ${italic}"},{name:" Underline command",
legend:"Klik ${underline}"},{name:" Link command",legend:"Klik ${link}"},{name:" Toolbar Collapse command",legend:"Press ${toolbarCollapse}"},{name:" Access previous focus space command",legend:"Press ${accessPreviousSpace} to access the closest unreachable focus space before the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces."},{name:" Access next focus space command",legend:"Press ${accessNextSpace} to access the closest unreachable focus space after the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces."},
{name:" Accessibility Help",legend:"Kilk ${a11yHelp}"}]}],backspace:"Backspace",tab:"Tab",enter:"Enter",shift:"Shift",ctrl:"Ctrl",alt:"Alt",pause:"Pause",capslock:"Caps Lock",escape:"Escape",pageUp:"Page Up",pageDown:"Page Down",end:"End",home:"Home",leftArrow:"Left Arrow",upArrow:"Up Arrow",rightArrow:"Right Arrow",downArrow:"Down Arrow",insert:"Insert","delete":"Delete",leftWindowKey:"Left Windows key",rightWindowKey:"Right Windows key",selectKey:"Select key",numpad0:"Numpad 0",numpad1:"Numpad 1",
numpad2:"Numpad 2",numpad3:"Numpad 3",numpad4:"Numpad 4",numpad5:"Numpad 5",numpad6:"Numpad 6",numpad7:"Numpad 7",numpad8:"Numpad 8",numpad9:"Numpad 9",multiply:"Multiply",add:"Add",subtract:"Subtract",decimalPoint:"Decimal Point",divide:"Divide",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",numLock:"Num Lock",scrollLock:"Scroll Lock",semiColon:"Semicolon",equalSign:"Equal Sign",comma:"Comma",dash:"Dash",period:"Period",forwardSlash:"Forward Slash",
graveAccent:"Grave Accent",openBracket:"Open Bracket",backSlash:"Backslash",closeBracket:"Close Bracket",singleQuote:"Single Quote"});
=======
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'da', {
	title: 'Tilgængelighedsinstrukser',
	contents: 'Onlinehjælp. For at lukke dette vindue klik ESC',
	legend: [
		{
		name: 'Generelt',
		items: [
			{
			name: 'Editor værktøjslinje',
			legend: 'Tryk ${toolbarFocus} for at navigere til værktøjslinjen. Flyt til næste eller forrige værktøjsline gruppe ved hjælp af TAB eller SHIFT+TAB. Flyt til næste eller forrige værktøjslinje knap med venstre- eller højre piltast. Tryk på SPACE eller ENTER for at aktivere værktøjslinje knappen.'
		},

			{
			name: 'Editor dialogboks',
			legend:
				'Inde i en dialogboks kan du, trykke på TAB for at navigere til næste element, trykke på SHIFT+TAB for at navigere til forrige element, trykke på ENTER for at afsende eller trykke på ESC for at lukke dialogboksen.\r\nNår en dialogboks har flere faner, fanelisten kan tilgås med ALT+F10 eller med TAB. Hvis fanelisten er i fokus kan du skifte til næste eller forrige tab, med højre- og venstre piltast.' 
		},

			{
			name: 'Redaktør kontekstmenu',
			legend: 'Tryk ${contextMenu} eller APPLICATION KEY for at åbne kontekstmenuen. Flyt derefter til næste menuvalg med TAB eller PIL NED. Flyt til forrige valg med SHIFT+TAB eller PIL OP. Tryk MELLEMRUM eller RETUR for at vælge menu-muligheder. Åben under-menu af aktuelle valg med MELLEMRUM eller RETUR eller HØJRE PIL. Gå tilbage til overliggende menu-emne med ESC eller VENSTRE PIL. Luk kontekstmenu med ESC.'
		},

			{
			name: 'Redaktør listeboks',
			legend: 'Flyt til næste emne med TAB eller PIL NED inde i en listeboks. Flyt til forrige listeemne med SHIFT+TAB eller PIL OP. Tryk MELLEMRUM eller RETUR for at vælge liste-muligheder. Tryk ESC for at lukke liste-boksen.'
		},

			{
			name: 'Redaktør elementsti-bar',
			legend: 'Tryk ${elementsPathFocus} for at navigere til elementernes sti-bar. Flyt til næste element-knap med TAB eller HØJRE PIL. Flyt til forrige knap med SHIFT+TAB eller VENSTRE PIL. Klik MELLEMRUM eller RETUR for at vælge element i editoren.'
		}
		]
	},
		{
		name: 'Kommandoer',
		items: [
			{
			name: 'Fortryd kommando',
			legend: 'Klik på ${undo}'
		},
			{
			name: 'Gentag kommando',
			legend: 'Klik ${redo}'
		},
			{
			name: 'Fed kommando',
			legend: 'Klik ${bold}'
		},
			{
			name: 'Kursiv kommando',
			legend: 'Klik ${italic}'
		},
			{
			name: 'Understregnings kommando',
			legend: 'Klik ${underline}'
		},
			{
			name: 'Link kommando',
			legend: 'Klik ${link}'
		},
			{
			name: 'Klap værktøjslinje sammen kommando ',
			legend: 'Klik ${toolbarCollapse}'
		},
			{
			name: 'Adgang til forrige fokusområde kommando',
			legend: 'Press ${accessPreviousSpace} to access the closest unreachable focus space before the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces.' // MISSING
		},
			{
			name: ' Access next focus space command', // MISSING
			legend: 'Press ${accessNextSpace} to access the closest unreachable focus space after the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces.' // MISSING
		},
			{
			name: 'Tilgængelighedshjælp',
			legend: 'Kilk ${a11yHelp}'
		},
			{
			name: 'Indsæt som ren tekst',
			legend: 'Klik ${pastetext}',
			legendEdge: 'Klik ${pastetext}, efterfult af ${paste}'
		}
		]
	}
	],
	tab: 'Tab',
	pause: 'Pause',
	capslock: 'Caps Lock',
	escape: 'Escape',
	pageUp: 'Page Up',
	pageDown: 'Page Down',
	leftArrow: 'Venstre pil',
	upArrow: 'Pil op',
	rightArrow: 'Højre pil',
	downArrow: 'Pil ned',
	insert: 'Insert',
	leftWindowKey: 'Venstre Windows tast',
	rightWindowKey: 'Højre Windows tast',
	selectKey: 'Select-knap',
	numpad0: 'Numpad 0',
	numpad1: 'Numpad 1',
	numpad2: 'Numpad 2',
	numpad3: 'Numpad 3',
	numpad4: 'Numpad 4',
	numpad5: 'Numpad 5',
	numpad6: 'Numpad 6',
	numpad7: 'Numpad 7',
	numpad8: 'Numpad 8',
	numpad9: 'Numpad 9',
	multiply: 'Gange',
	add: 'Plus',
	subtract: 'Minus',
	decimalPoint: 'Komma',
	divide: 'Divider',
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
	numLock: 'Num Lock',
	scrollLock: 'Scroll Lock',
	semiColon: 'Semikolon',
	equalSign: 'Lighedstegn',
	comma: 'Komma',
	dash: 'Bindestreg',
	period: 'Punktum',
	forwardSlash: 'Skråstreg',
	graveAccent: 'Accent grave',
	openBracket: 'Start klamme',
	backSlash: 'Omvendt skråstreg',
	closeBracket: 'Slut klamme',
	singleQuote: 'Enkelt citationstegn'
} );
>>>>>>> 4.12.1
