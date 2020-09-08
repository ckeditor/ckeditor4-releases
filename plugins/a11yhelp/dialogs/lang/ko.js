<<<<<<< HEAD
﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.setLang("a11yhelp","ko",{title:"Accessibility Instructions",contents:"Help Contents. To close this dialog press ESC.",legend:[{name:"일반",items:[{name:"편집기 툴바",legend:"Press ${toolbarFocus} to navigate to the toolbar. Move to the next and previous toolbar group with TAB and SHIFT-TAB. Move to the next and previous toolbar button with RIGHT ARROW or LEFT ARROW. Press SPACE or ENTER to activate the toolbar button."},{name:"편집기 다이얼로그",legend:"다이얼로그 내부에서 TAB"},{name:"편집기 환경 메뉴",legend:"Press ${contextMenu} or APPLICATION KEY to open context-menu. Then move to next menu option with TAB or DOWN ARROW. Move to previous option with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the menu option. Open sub-menu of current option with SPACE or ENTER or RIGHT ARROW. Go back to parent menu item with ESC or LEFT ARROW. Close context menu with ESC."},
{name:"편집기 목록 박스",legend:"Inside a list-box, move to next list item with TAB OR DOWN ARROW. Move to previous list item with SHIFT + TAB or UP ARROW. Press SPACE or ENTER to select the list option. Press ESC to close the list-box."},{name:"Editor Element Path Bar",legend:"Press ${elementsPathFocus} to navigate to the elements path bar. Move to next element button with TAB or RIGHT ARROW. Move to previous button with  SHIFT+TAB or LEFT ARROW. Press SPACE or ENTER to select the element in editor."}]},
{name:"명령",items:[{name:" Undo command",legend:"Press ${undo}"},{name:" Redo command",legend:"Press ${redo}"},{name:" Bold command",legend:"Press ${bold}"},{name:" Italic command",legend:"Press ${italic}"},{name:" Underline command",legend:"Press ${underline}"},{name:" Link command",legend:"Press ${link}"},{name:" Toolbar Collapse command",legend:"Press ${toolbarCollapse}"},{name:" Access previous focus space command",legend:"Press ${accessPreviousSpace} to access the closest unreachable focus space before the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces."},
{name:" Access next focus space command",legend:"Press ${accessNextSpace} to access the closest unreachable focus space after the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces."},{name:" Accessibility Help",legend:"Press ${a11yHelp}"}]}],backspace:"Backspace",tab:"Tab",enter:"Enter",shift:"Shift",ctrl:"Ctrl",alt:"Alt",pause:"Pause",capslock:"Caps Lock",escape:"Escape",pageUp:"Page Up",pageDown:"Page Down",end:"End",home:"Home",leftArrow:"Left Arrow",
upArrow:"Up Arrow",rightArrow:"Right Arrow",downArrow:"Down Arrow",insert:"Insert","delete":"Delete",leftWindowKey:"Left Windows key",rightWindowKey:"Right Windows key",selectKey:"Select key",numpad0:"Numpad 0",numpad1:"Numpad 1",numpad2:"Numpad 2",numpad3:"Numpad 3",numpad4:"Numpad 4",numpad5:"Numpad 5",numpad6:"Numpad 6",numpad7:"Numpad 7",numpad8:"Numpad 8",numpad9:"Numpad 9",multiply:"Multiply",add:"Add",subtract:"Subtract",decimalPoint:"Decimal Point",divide:"Divide",f1:"F1",f2:"F2",f3:"F3",
f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",numLock:"Num Lock",scrollLock:"Scroll Lock",semiColon:"Semicolon",equalSign:"Equal Sign",comma:"Comma",dash:"Dash",period:"Period",forwardSlash:"Forward Slash",graveAccent:"Grave Accent",openBracket:"Open Bracket",backSlash:"Backslash",closeBracket:"Close Bracket",singleQuote:"Single Quote"});
=======
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'ko', {
	title: '접근성 설명',
	contents: '도움말. 이 창을 닫으시려면 ESC 를 누르세요.',
	legend: [
		{
		name: '일반',
		items: [
			{
			name: '편집기 툴바',
			legend: '툴바를 탐색하시려면 ${toolbarFocus} 를 투르세요. 이전/다음 툴바 그룹으로 이동하시려면 TAB 키 또는 SHIFT+TAB 키를 누르세요. 이전/다음 툴바 버튼으로 이동하시려면 오른쪽 화살표 키 또는 왼쪽 화살표 키를 누르세요. 툴바 버튼을 활성화 하려면 SPACE 키 또는 ENTER 키를 누르세요.'
		},

			{
			name: '편집기 다이얼로그',
			legend:
				'TAB 키를 누르면 다음 대화상자로 이동하고, SHIFT+TAB 키를 누르면 이전 대화상자로 이동합니다. 대화상자를 제출하려면 ENTER 키를 누르고, ESC 키를 누르면 대화상자를 취소합니다. 대화상자에 탭이 여러개 있을 때, ALT+F10 키 또는 TAB 키를 누르면 순서에 따라 탭 목록에 도달할 수 있습니다. 탭 목록에 초점이 맞을 때, 오른쪽과 왼쪽 화살표 키를 이용하면 각각 다음과 이전 탭으로 이동할 수 있습니다.' 
		},

			{
			name: '편집기 환경 메뉴',
			legend: '${contextMenu} 또는 어플리케이션 키를 누르면 환경-메뉴를 열 수 있습니다. 환경-메뉴에서 TAB 키 또는 아래 화살표 키를 누르면 다음 메뉴 옵션으로 이동할 수 있습니다. 이전 옵션으로 이동은 SHIFT+TAB 키 또는 위 화살표 키를 눌러서 할 수 있습니다. 스페이스 키 또는 ENTER 키를 눌러서 메뉴 옵션을 선택할 수 있습니다. 스페이스 키 또는 ENTER 키 또는 오른쪽 화살표 키를 눌러서 하위 메뉴를 열 수 있습니다. 부모 메뉴 항목으로 돌아가려면 ESC 키 또는 왼쪽 화살표 키를 누릅니다. ESC 키를 눌러서 환경-메뉴를 닫습니다.'
		},

			{
			name: '편집기 목록 박스',
			legend: '리스트-박스 내에서, 목록의 다음 항목으로 이동하려면 TAB 키 또는 아래쪽 화살표 키를 누릅니다. 목록의 이전 항목으로 이동하려면 SHIFT+TAB 키 또는 위쪽 화살표 키를 누릅니다. 스페이스 키 또는 ENTER 키를 누르면 목록의 해당 옵션을 선택합니다. ESC 키를 눌러서 리스트-박스를 닫을 수 있습니다.'
		},

			{
			name: '편집기 요소 경로 막대',
			legend: '${elementsPathFocus}를 눌러서 요소 경로 막대를 탐색할 수 있습니다. 다음 요소로 이동하려면 TAB 키 또는 오른쪽 화살표 키를 누릅니다. SHIFT+TAB 키 또는 왼쪽 화살표 키를 누르면 이전 버튼으로 이동할 수 있습니다. 스페이스 키나 ENTER 키를 누르면 편집기의 해당 항목을 선택합니다.'
		}
		]
	},
		{
		name: '명령',
		items: [
			{
			name: ' 명령 실행 취소',
			legend: '${undo} 누르시오'
		},
			{
			name: ' 명령 다시 실행',
			legend: '${redo} 누르시오'
		},
			{
			name: ' 굵게 명령',
			legend: '${bold} 누르시오'
		},
			{
			name: ' 기울임 꼴 명령',
			legend: '${italic} 누르시오'
		},
			{
			name: ' 밑줄 명령',
			legend: '${underline} 누르시오'
		},
			{
			name: ' 링크 명령',
			legend: '${link} 누르시오'
		},
			{
			name: ' 툴바 줄이기 명령',
			legend: '${toolbarCollapse} 누르시오'
		},
			{
			name: ' 이전 포커스 공간 접근 명령',
			legend: '탈자 기호(^) 이전에 ${accessPreviousSpace} 를 누르면, 접근 불가능하면서 가장 가까운 포커스 영역에 접근합니다. 예를 들면, 두 인접한 HR 요소가 있습니다. 키 조합을 반복해서 멀리있는 포커스 영역들에 도달할 수 있습니다.'
		},
			{
			name: '다음 포커스 공간 접근 명령',
			legend: '탈자 기호(^) 다음에 ${accessNextSpace} 를 누르면, 접근 불가능하면서 가장 가까운 포커스 영역에 접근합니다. 예를 들면, 두 인접한 HR 요소가 있습니다. 키 조합을 반복해서 멀리있는 포커스 영역들에 도달할 수 있습니다. '
		},
			{
			name: ' 접근성 도움말',
			legend: '${a11yHelp} 누르시오'
		},
			{
			name: ' Paste as plain text', // MISSING
			legend: 'Press ${pastetext}', // MISSING
			legendEdge: 'Press ${pastetext}, followed by ${paste}' // MISSING
		}
		]
	}
	],
	tab: '탭 키',
	pause: '일시정지 키',
	capslock: '캡스 록 키',
	escape: '이스케이프 키',
	pageUp: '페이지 업 키',
	pageDown: '페이지 다운 키',
	leftArrow: '왼쪽 화살표 키',
	upArrow: '위쪽 화살표 키',
	rightArrow: '오른쪽 화살표 키',
	downArrow: '아래쪽 화살표 키',
	insert: '인서트 키',
	leftWindowKey: '왼쪽 윈도우 키',
	rightWindowKey: '오른쪽 윈도우 키',
	selectKey: '셀렉트 키',
	numpad0: '숫자 패드 0 키',
	numpad1: '숫자 패드 1 키',
	numpad2: '숫자 패드 2 키',
	numpad3: '숫자 패드 3 키',
	numpad4: '숫자 패드 4 키',
	numpad5: '숫자 패드 5 키',
	numpad6: '숫자 패드 6 키',
	numpad7: '숫자 패드 7 키',
	numpad8: '숫자 패드 8 키',
	numpad9: '숫자 패드 9 키',
	multiply: '곱셈(*) 키',
	add: '덧셈(+) 키',
	subtract: '뺄셈(-) 키',
	decimalPoint: '온점(.) 키',
	divide: '나눗셈(/) 키',
	f1: 'F1 키',
	f2: 'F2 키',
	f3: 'F3 키',
	f4: 'F4 키',
	f5: 'F5 키',
	f6: 'F6 키',
	f7: 'F7 키',
	f8: 'F8 키',
	f9: 'F9 키',
	f10: 'F10 키',
	f11: 'F11 키',
	f12: 'F12 키',
	numLock: 'Num Lock 키',
	scrollLock: 'Scroll Lock 키',
	semiColon: '세미콜론(;) 키',
	equalSign: '등호(=) 키',
	comma: '쉼표(,) 키',
	dash: '대시(-) 키',
	period: '온점(.) 키',
	forwardSlash: '슬래시(/) 키',
	graveAccent: '억음 악센트(`) 키',
	openBracket: '브라켓 열기([) 키',
	backSlash: '역슬래시(\\\\) 키',
	closeBracket: '브라켓 닫기(]) 키',
	singleQuote: '외 따옴표(\') 키'
} );
>>>>>>> 4.12.1
