<<<<<<< HEAD
﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.setLang("a11yhelp","lv",{title:"Pieejamības instrukcija",contents:"Palīdzības saturs. Lai aizvērtu ciet šo dialogu nospiediet ESC.",legend:[{name:"Galvenais",items:[{name:"Redaktora rīkjosla",legend:"Nospiediet ${toolbarFocus} lai pārvietotos uz rīkjoslu. Lai pārvietotos uz nākošo vai iepriekšējo rīkjoslas grupu izmantojiet pogu TAB un SHIFT+TAB.  Lai pārvietotos uz nākošo vai iepriekšējo rīkjoslas pogu izmantojiet Kreiso vai Labo bultiņu. Nospiediet Atstarpi vai ENTER lai aktivizētu rīkjosla pogu."},
{name:"Redaktora dialoga  logs",legend:"Dialoga logā nospiediet pogu TAB lai pārvietotos uz nākošo dialoga loga lauku, nospiediet SHIFT+TAB lai atgrieztos iepriekšējā laukā, nospiediet ENTER lai apstiprinātu dialoga datus, nospiediet ESC lai aizvērtu šo dialogu. Dialogam kuram ir vairākas cilnes, nospiediet ALT+F10 lai pārvietotos uz nepieciešamo cilni.  Lai pārvietotos uz nākošo cilni izmantojiet pogu TAB vai Labo bultiņu. Lai pārvietotos uz iepriekšējo cilni nospiediet SHIFT+TAB vai kreiso bultiņu. Nospiediet SPACE vai ENTER lai izvēlētos lapas cilni."},
{name:"Redaktora satura izvēle",legend:"Nospiediet ${contextMenu} vai APPLICATION KEY lai atvērtu satura izvēlni. Lai pārvietotos uz nākošo izvēlnes opciju izmantojiet pogu TAB vai pogu Bultiņu uz leju. Lai pārvietotos uz iepriekšējo opciju izmantojiet  SHIFT+TAB vai pogu Bultiņa uz augšu. Nospiediet SPACE vai ENTER lai izvelētos izvēlnes opciju. Atveriet tekošajā opcija apakšizvēlni ar SAPCE vai ENTER ka ari to var izdarīt ar Labo bultiņu. Lai atgrieztos atpakaļ uz sakuma izvēlni nospiediet ESC vai Kreiso bultiņu. Lai aizvērtu ciet izvēlnes saturu nospiediet ESC."},
{name:"Redaktora saraksta lauks",legend:"Saraksta laukā, lai pārvietotos uz nākošo saraksta elementu nospiediet TAB vai pogu Bultiņa uz leju. Lai pārvietotos uz iepriekšējo saraksta elementu nospiediet SHIFT+TAB vai pogu Bultiņa uz augšu. Nospiediet SPACE vai ENTER lai izvēlētos saraksta opcijas. Nospiediet ESC lai aizvērtu saraksta lauku. "},{name:"Redaktora elementa ceļa josla",legend:"Nospiediet ${elementsPathFocus} lai pārvietotos uz  elementa ceļa joslu. Lai pārvietotos uz nākošo elementa pogu izmantojiet TAB vai Labo bultiņu. Lai pārvietotos uz iepriekšējo elementa pogu  izmantojiet SHIFT + TAB vai Kreiso bultiņu. Nospiediet SPACE vai ENTER lai izvēlētos elementu redaktorā."}]},
{name:"Komandas",items:[{name:"Komanda atcelt darbību",legend:"Nospiediet ${undo}"},{name:"Komanda atkārtot darbību",legend:"Nospiediet ${redo}"},{name:"Treknraksta komanda",legend:"Nospiediet ${bold}"},{name:"Kursīva komanda",legend:"Nospiediet ${italic}"},{name:"Apakšsvītras komanda ",legend:"Nospiediet ${underline}"},{name:"Hipersaites komanda",legend:"Nospiediet ${link}"},{name:"Rīkjoslas aizvēršanas komanda",legend:"Nospiediet ${toolbarCollapse}"},{name:"Piekļūt iepriekšējai fokusa vietas komandai",
legend:"Nospiediet ${accessPreviousSpace} lai piekļūtu tuvākajai nepieejamajai fokusa vietai pirms kursora. Piemēram: diviem blakus esošiem līnijas HR elementiem. Atkārtojiet taustiņu kombināciju lai piekļūtu pie tālākām vietām."},{name:"Piekļūt nākošā fokusa apgabala komandai",legend:"Nospiediet ${accessNextSpace} lai piekļūtu tuvākajai nepieejamajai fokusa vietai pēc kursora. Piemēram: diviem blakus esošiem līnijas HR elementiem. Atkārtojiet taustiņu kombināciju lai piekļūtu pie tālākām vietām."},
{name:"Pieejamības palīdzība",legend:"Nospiediet ${a11yHelp}"}]}],backspace:"Backspace",tab:"Tab",enter:"Enter",shift:"Shift",ctrl:"Ctrl",alt:"Alt",pause:"Pause",capslock:"Caps Lock",escape:"Escape",pageUp:"Page Up",pageDown:"Page Down",end:"End",home:"Home",leftArrow:"Left Arrow",upArrow:"Up Arrow",rightArrow:"Right Arrow",downArrow:"Down Arrow",insert:"Insert","delete":"Delete",leftWindowKey:"Left Windows key",rightWindowKey:"Right Windows key",selectKey:"Select key",numpad0:"Numpad 0",numpad1:"Numpad 1",
numpad2:"Numpad 2",numpad3:"Numpad 3",numpad4:"Numpad 4",numpad5:"Numpad 5",numpad6:"Numpad 6",numpad7:"Numpad 7",numpad8:"Numpad 8",numpad9:"Numpad 9",multiply:"Multiply",add:"Add",subtract:"Subtract",decimalPoint:"Decimal Point",divide:"Divide",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",numLock:"Num Lock",scrollLock:"Scroll Lock",semiColon:"Semicolon",equalSign:"Equal Sign",comma:"Comma",dash:"Dash",period:"Period",forwardSlash:"Forward Slash",
graveAccent:"Grave Accent",openBracket:"Open Bracket",backSlash:"Backslash",closeBracket:"Close Bracket",singleQuote:"Single Quote"});
=======
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'lv', {
	title: 'Pieejamības instrukcija',
	contents: 'Palīdzības saturs. Lai aizvērtu ciet šo dialogu nospiediet ESC.',
	legend: [
		{
		name: 'Galvenais',
		items: [
			{
			name: 'Redaktora rīkjosla',
			legend: 'Nospiediet ${toolbarFocus} lai pārvietotos uz rīkjoslu. Lai pārvietotos uz nākošo vai iepriekšējo rīkjoslas grupu izmantojiet pogu TAB un SHIFT+TAB. Lai pārvietotos uz nākošo vai iepriekšējo rīkjoslas pogu izmantojiet Kreiso vai Labo bultiņu. Nospiediet Atstarpi vai ENTER lai aktivizētu rīkjosla pogu.'
		},

			{
			name: 'Redaktora dialoga  logs',
			legend:
				'Inside a dialog, press TAB to navigate to the next dialog element, press SHIFT+TAB to move to the previous dialog element, press ENTER to submit the dialog, press ESC to cancel the dialog. When a dialog has multiple tabs, the tab list can be reached either with ALT+F10 or with TAB as part of the dialog tabbing order. With tab list focused, move to the next and previous tab with RIGHT and LEFT ARROW, respectively.'  // MISSING
		},

			{
			name: 'Redaktora satura izvēle',
			legend: 'Nospiediet ${contextMenu} vai APPLICATION KEY lai atvērtu satura izvēlni. Lai pārvietotos uz nākošo izvēlnes opciju izmantojiet pogu TAB vai pogu Bultiņu uz leju. Lai pārvietotos uz iepriekšējo opciju izmantojiet  SHIFT+TAB vai pogu Bultiņa uz augšu. Nospiediet SPACE vai ENTER lai izvelētos izvēlnes opciju. Atveriet tekošajā opcija apakšizvēlni ar SAPCE vai ENTER ka ari to var izdarīt ar Labo bultiņu. Lai atgrieztos atpakaļ uz sakuma izvēlni nospiediet ESC vai Kreiso bultiņu. Lai aizvērtu ciet izvēlnes saturu nospiediet ESC.'
		},

			{
			name: 'Redaktora saraksta lauks',
			legend: 'Saraksta laukā, lai pārvietotos uz nākošo saraksta elementu nospiediet TAB vai pogu Bultiņa uz leju. Lai pārvietotos uz iepriekšējo saraksta elementu nospiediet SHIFT+TAB vai pogu Bultiņa uz augšu. Nospiediet SPACE vai ENTER lai izvēlētos saraksta opcijas. Nospiediet ESC lai aizvērtu saraksta lauku.'
		},

			{
			name: 'Redaktora elementa ceļa josla',
			legend: 'Nospiediet ${elementsPathFocus} lai pārvietotos uz elementa ceļa joslu. Lai pārvietotos uz nākošo elementa pogu izmantojiet TAB vai Labo bultiņu. Lai pārvietotos uz iepriekšējo elementa pogu izmantojiet SHIFT+TAB vai Kreiso bultiņu. Nospiediet SPACE vai ENTER lai izvēlētos elementu redaktorā.'
		}
		]
	},
		{
		name: 'Komandas',
		items: [
			{
			name: 'Komanda atcelt darbību',
			legend: 'Nospiediet ${undo}'
		},
			{
			name: 'Komanda atkārtot darbību',
			legend: 'Nospiediet ${redo}'
		},
			{
			name: 'Treknraksta komanda',
			legend: 'Nospiediet ${bold}'
		},
			{
			name: 'Kursīva komanda',
			legend: 'Nospiediet ${italic}'
		},
			{
			name: 'Apakšsvītras komanda ',
			legend: 'Nospiediet ${underline}'
		},
			{
			name: 'Hipersaites komanda',
			legend: 'Nospiediet ${link}'
		},
			{
			name: 'Rīkjoslas aizvēršanas komanda',
			legend: 'Nospiediet ${toolbarCollapse}'
		},
			{
			name: 'Piekļūt iepriekšējai fokusa vietas komandai',
			legend: 'Nospiediet ${accessPreviousSpace} lai piekļūtu tuvākajai nepieejamajai fokusa vietai pirms kursora. Piemēram: diviem blakus esošiem līnijas HR elementiem. Atkārtojiet taustiņu kombināciju lai piekļūtu pie tālākām vietām.'
		},
			{
			name: 'Piekļūt nākošā fokusa apgabala komandai',
			legend: 'Nospiediet ${accessNextSpace} lai piekļūtu tuvākajai nepieejamajai fokusa vietai pēc kursora. Piemēram: diviem blakus esošiem līnijas HR elementiem. Atkārtojiet taustiņu kombināciju lai piekļūtu pie tālākām vietām.'
		},
			{
			name: 'Pieejamības palīdzība',
			legend: 'Nospiediet ${a11yHelp}'
		},
			{
			name: ' Paste as plain text', // MISSING
			legend: 'Press ${pastetext}', // MISSING
			legendEdge: 'Press ${pastetext}, followed by ${paste}' // MISSING
		}
		]
	}
	],
	tab: 'Tab', // MISSING
	pause: 'Pause', // MISSING
	capslock: 'Caps Lock', // MISSING
	escape: 'Escape', // MISSING
	pageUp: 'Page Up', // MISSING
	pageDown: 'Page Down', // MISSING
	leftArrow: 'Left Arrow', // MISSING
	upArrow: 'Up Arrow', // MISSING
	rightArrow: 'Right Arrow', // MISSING
	downArrow: 'Down Arrow', // MISSING
	insert: 'Insert', // MISSING
	leftWindowKey: 'Left Windows key', // MISSING
	rightWindowKey: 'Right Windows key', // MISSING
	selectKey: 'Select key', // MISSING
	numpad0: 'Numpad 0', // MISSING
	numpad1: 'Numpad 1', // MISSING
	numpad2: 'Numpad 2', // MISSING
	numpad3: 'Numpad 3', // MISSING
	numpad4: 'Numpad 4', // MISSING
	numpad5: 'Numpad 5', // MISSING
	numpad6: 'Numpad 6', // MISSING
	numpad7: 'Numpad 7', // MISSING
	numpad8: 'Numpad 8', // MISSING
	numpad9: 'Numpad 9', // MISSING
	multiply: 'Multiply', // MISSING
	add: 'Add', // MISSING
	subtract: 'Subtract', // MISSING
	decimalPoint: 'Decimal Point', // MISSING
	divide: 'Divide', // MISSING
	f1: 'F1', // MISSING
	f2: 'F2', // MISSING
	f3: 'F3', // MISSING
	f4: 'F4', // MISSING
	f5: 'F5', // MISSING
	f6: 'F6', // MISSING
	f7: 'F7', // MISSING
	f8: 'F8', // MISSING
	f9: 'F9', // MISSING
	f10: 'F10', // MISSING
	f11: 'F11', // MISSING
	f12: 'F12', // MISSING
	numLock: 'Num Lock', // MISSING
	scrollLock: 'Scroll Lock', // MISSING
	semiColon: 'Semicolon', // MISSING
	equalSign: 'Equal Sign', // MISSING
	comma: 'Comma', // MISSING
	dash: 'Dash', // MISSING
	period: 'Period', // MISSING
	forwardSlash: 'Forward Slash', // MISSING
	graveAccent: 'Grave Accent', // MISSING
	openBracket: 'Open Bracket', // MISSING
	backSlash: 'Backslash', // MISSING
	closeBracket: 'Close Bracket', // MISSING
	singleQuote: 'Single Quote' // MISSING
} );
>>>>>>> 4.12.1
