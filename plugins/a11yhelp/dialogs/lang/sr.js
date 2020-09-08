<<<<<<< HEAD
﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.setLang("a11yhelp","sr",{title:"Accessibility Instructions",contents:"Help Contents. To close this dialog press ESC.",legend:[{name:"Опште",items:[{name:"Editor Toolbar",legend:"Press ${toolbarFocus} to navigate to the toolbar. Move to the next and previous toolbar group with TAB and SHIFT-TAB. Move to the next and previous toolbar button with RIGHT ARROW or LEFT ARROW. Press SPACE or ENTER to activate the toolbar button."},{name:"Editor Dialog",legend:"Inside a dialog, press TAB to navigate to next dialog field, press SHIFT + TAB to move to previous field, press ENTER to submit dialog, press ESC to cancel dialog. For dialogs that have multiple tab pages, press ALT + F10 to navigate to tab-list. Then move to next tab with TAB OR RIGTH ARROW. Move to previous tab with SHIFT + TAB or LEFT ARROW. Press SPACE or ENTER to select the tab page."},
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

CKEDITOR.plugins.setLang( 'a11yhelp', 'sr', {
	title: 'Упутства за помоћ',
	contents: 'Садржаји за помоћ. Да би сте затворили дијалог притисните ЕСЦ',
	legend: [
		{
		name: 'Опште',
		items: [
			{
			name: 'Алатке за преуређиванје',
			legend: 'Притисните ${toolbarFocus} да би означили алатке. До следеће и претходне групе алатки можете дићи тастером  TAB и SHIFT+TAB. До тастера следеће и претходне групе алатки можете доћи са тастерима СТРЕЛИЦА ЛЕВО и СТРЕЛИЦА ДЕСНО. Притисните СПАЦЕ и ЕНТЕР да би активирали тастер алатки.'
		},

			{
			name: 'Уређивач дијалога',
			legend:
				'У прозору дијалог притисните ТАБ да би дошли до следећег поља дијалога, притисните ЕНТЕР за прихватање дијалога, притисните ЕСЦ за одбијање дијалога. Када дијалог има више картица, до њих можете доћи притиском на АЛТ+Ф10 или ТАБ. Затим са ТАБ или СТРЕЛИЦА ДЕСНО долазите до наредне картице.' 
		},

			{
			name: 'Уређивач локалног менија.',
			legend: 'Притисните ${contextMenu} или APPLICATION ТАСТЕР за отварање локалног менија. Затим са ТАБ или СТРЕЛИЦА ДОЛЕ можете прећи на следећу зачку менија. Претходну опцију можете постићи са ШХИФТ+ТАБ или СТРЕЛИЦА ГОРЕ. Притисните СПАЦЕ или ЕНТЕР за одабир тачке менија. Притисните СПАЦЕ или ЕНТЕР да би се отворио подмени тренутне ставке менија. За повратак у главни мени притисмите ЕСЦ или СТРЕЛИЦА ДЕСНО. Затворите локални мени помоћу тастера ЕСЦ.'
		},

			{
			name: 'Уређивач листе',
			legend: 'До следећег елемента листе можете дочи са ТАБ или СТРЕЛИЦА ДОЛЕ. За одабир петходног елемента притисните СХИФТ+TAБ или  СТРЕЛИЦА ДОЛЕ. За одабир елемента притисните СПАЦЕ или ЕНТЕР. Са притиско ЕСЦ затварате листу. '
		},

			{
			name: 'Уређивач траке пута елемената',
			legend: 'Притисни ${elementsPathFocus} да би означили траку пута елемената. До следећег елемента можете доћи са TAБ или СТРЕЛИЦА ДЕСНО. До претходног долазите са СХИФТ+TAБ или СТРЕЛИЦА ДЕСНО. Са  СПАЦЕ или ЕНТЕР можете одабрати елемент у уређивачу.'
		}
		]
	},
		{
		name: 'Команда',
		items: [
			{
			name: 'Откажи команду',
			legend: 'Притисни ${undo}'
		},
			{
			name: 'Понови команду',
			legend: 'Притисни ${redo}'
		},
			{
			name: 'Подебљана команда',
			legend: 'Притисни ${bold}'
		},
			{
			name: 'Курзив команда',
			legend: 'Притисни ${italic}'
		},
			{
			name: 'Прецтрана команда',
			legend: 'Притисни ${underline}'
		},
			{
			name: 'Линк команда',
			legend: 'Притисни ${link}'
		},
			{
			name: 'Затвори траку уређивача команда',
			legend: 'Притисни ${toolbarCollapse}'
		},
			{
			name: 'Приступ претходном фокус месту команда',
			legend: 'Притисни ${accessNextSpace} да би приступио најближем недоступном фокус месту пре знака  hiányjel, на пример: дав сусаедна ХР елемента. Понови комбинацију тастера да пронађеш фокус место које се налази даље.'
		},
			{
			name: 'Приступ следећем фокус  месту команда ',
			legend: 'Притисни ${accessNextSpace} да би приступио најближем недоступном фокус месту после знака hiányjel, на пример: дав сусаедна ХР елемента. Понови комбинацију тастера да пронађеш фокус место које се налази даље.'
		},
			{
			name: 'Помоћ приступачнсти',
			legend: 'Притисни ${a11yHelp}'
		},
			{
			name: ' Налепи као обичан текст',
			legend: 'Притисните: ${pastetext}',
			legendEdge: 'Притисните ${pastetext}, затим ${paste}'
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
	leftArrow: 'Стрелица лево',
	upArrow: 'Стрелица горе',
	rightArrow: 'Стрелица десно',
	downArrow: 'Стрелица доле',
	insert: 'Insert',
	leftWindowKey: 'леви Windows-тастер',
	rightWindowKey: 'десни Windows-тастер',
	selectKey: 'Одабир тастера',
	numpad0: 'Тастери са бројевима 0',
	numpad1: 'Тастери са бројевима 1',
	numpad2: 'Тастери са бројевима 2',
	numpad3: 'Тастери са бројевима 3',
	numpad4: 'Тастери са бројевима 4',
	numpad5: 'Тастери са бројевима 5',
	numpad6: 'Тастери са бројевима 6',
	numpad7: 'Тастери са бројевима 7',
	numpad8: 'Тастери са бројевима 8',
	numpad9: ' Тастери са бројевима 9',
	multiply: 'Множење',
	add: 'Сабирање',
	subtract: 'Одузимање',
	decimalPoint: 'Децимална тачка',
	divide: 'Дељење',
	f1: 'Ф1',
	f2: 'Ф2',
	f3: 'Ф3',
	f4: 'Ф4',
	f5: 'Ф5',
	f6: 'Ф6',
	f7: 'Ф7',
	f8: 'Ф8',
	f9: 'Ф9',
	f10: 'Ф10',
	f11: 'Ф11',
	f12: 'Ф12',
	numLock: 'Num Lock',
	scrollLock: 'Scroll Lock',
	semiColon: 'Тачка зарез',
	equalSign: 'Знак једнакости',
	comma: 'Зарез',
	dash: 'Цртица',
	period: 'Тачка',
	forwardSlash: 'Коса црта',
	graveAccent: 'Обрнути знак акцента',
	openBracket: 'Отворена ћошкаста заграда',
	backSlash: 'обрнута коса црта',
	closeBracket: 'Затворена ћошкаста заграда',
	singleQuote: 'Симпли знак навода'
} );
>>>>>>> 4.12.1
