<<<<<<< HEAD
﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.setLang("a11yhelp","pt",{title:"Instruções de Acessibilidade",contents:"Conteúdos da Ajuda. Pressione em 'ESC' para fechar esta janela.",legend:[{name:"Geral",items:[{name:"Barra de Ferramentas do Editor",legend:"Clique em ${toolbarFocus} para navegar para a barra de ferramentas. Vá para o grupo da barra de ferramentas anterior e seguinte com TAB e SHIFT+TAB. Vá para o botão da barra de ferramentas anterior com a SETA DIREITA ou ESQUERDA. Pressione ESPAÇO ou ENTER para ativar o botão da barra de ferramentas."},
{name:"Janela do Editor",legend:"Dentro de uma janela, pressione TAB para navigar para o campo da janela seguinte, pressione SHIFT + TAB para mover para o campo anterior, pressione ENTER para submeter a janela, pressione ESC para cancelar a janela. Para as janelas que têm múltiplos páginas com separadores, pressione ALT + F10 para navegar para a lista do separador. Depois mova para o seguinte separador com TAB ou SETA DIREITA. Mover para o separador anterior com SHIFT + TAB ou SETA ESQUERDA. Pressione ESPAÇO ou ENTER para selecionar o separador da página."},
{name:"Menu de Contexto do Editor",legend:"Clique em ${contextMenu} ou TECLA APLICAÇÃO para abrir o menu de contexto. Depois vá para a opção do menu seguinte com TAB ou SETA PARA BAIXO. Vá para a opção anterior com  SHIFT+TAB ou SETA PARA CIMA. Pressione ESPAÇO ou ENTER para selecionar a opção do menu.  Abra o submenu da opção atual com ESPAÇO, ENTER ou SETA DIREITA. GVá para o item do menu parente  com ESC ou SETA ESQUERDA. Feche o menu de contexto com ESC."},{name:"Caixa Lista Editor",legend:"Dentro da caixa da lista, vá para o itemda lista seguinte com TAB ou SETA PARA BAIXO. Move Vá parao item da lista anterior com SHIFT+TAB ou SETA PARA BAIXO. Pressione ESPAÇO ou ENTER para selecionar a opção da lista. Pressione ESC para fechar a caisa da lista."},
{name:"Caminho Barra Elemento Editor",legend:"Clique em ${elementsPathFocus} para navegar para a barra do caminho dos elementos. Vá para o botão do elemento seguinte com TAB ou SETA DIREITA. Vá para o botão anterior com   SHIFT+TAB ou SETA ESQUERDA. Pressione ESPAÇO ou ENTER para selecionar o elemento no editor."}]},{name:"Comandos",items:[{name:"Comando de Anular",legend:"Pressione ${undo}"},{name:"Comando de Refazer",legend:"Pressione ${redo}"},{name:"Comando de Negrito",legend:"Pressione ${bold}"},
{name:"Comando de Itálico",legend:"Pressione ${italic}"},{name:"Comando de Sublinhado",legend:"Pressione ${underline}"},{name:"Comando de Hiperligação",legend:"Pressione ${link}"},{name:"Comando de Ocultar Barra de Ferramentas",legend:"Pressione ${toolbarCollapse}"},{name:"Acesso comando do espaço focus anterior",legend:"Clique em ${accessPreviousSpace} para aceder ao espaço do focos inalcançável mais perto antes do sinal de omissão, por exemplo: dois elementos HR adjacentes. Repetir a combinação da chave para alcançar os espaços dos focos distantes."},
{name:"Acesso comando do espaço focus seguinte",legend:"Pressione ${accessNextSpace} para aceder ao espaço do focos inalcançável mais perto depois do sinal de omissão, por exemplo: dois elementos HR adjacentes. Repetir a combinação da chave para alcançar os espaços dos focos distantes."},{name:"Ajuda de Acessibilidade",legend:"Pressione ${a11yHelp}"}]}],backspace:"Backspace",tab:"Tab",enter:"Enter",shift:"Shift",ctrl:"Ctrl",alt:"Alt",pause:"Pause",capslock:"Caps Lock",escape:"Escape",pageUp:"Page Up",
pageDown:"Page Down",end:"End",home:"Home",leftArrow:"Left Arrow",upArrow:"Up Arrow",rightArrow:"Right Arrow",downArrow:"Down Arrow",insert:"Insert","delete":"Delete",leftWindowKey:"Left Windows key",rightWindowKey:"Right Windows key",selectKey:"Select key",numpad0:"Numpad 0",numpad1:"Numpad 1",numpad2:"Numpad 2",numpad3:"Numpad 3",numpad4:"Numpad 4",numpad5:"Numpad 5",numpad6:"Numpad 6",numpad7:"Numpad 7",numpad8:"Numpad 8",numpad9:"Numpad 9",multiply:"Multiply",add:"Add",subtract:"Subtract",decimalPoint:"Decimal Point",
divide:"Divide",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",numLock:"Num Lock",scrollLock:"Scroll Lock",semiColon:"Semicolon",equalSign:"Equal Sign",comma:"Comma",dash:"Dash",period:"Period",forwardSlash:"Forward Slash",graveAccent:"Grave Accent",openBracket:"Open Bracket",backSlash:"Backslash",closeBracket:"Close Bracket",singleQuote:"Single Quote"});
=======
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'pt', {
	title: 'Instruções de acessibilidade',
	contents: 'Conteúdo de ajuda. Use a tecla ESC para fechar esta janela.',
	legend: [
		{
		name: 'Geral',
		items: [
			{
			name: 'Barra de ferramentas do editor',
			legend: 'Clique em ${toolbarFocus} para navegar na barra de ferramentas. Para navegar entre o grupo da barra de ferramentas anterior e seguinte use TAB e SHIFT+TAB. Para navegar entre o botão da barra de ferramentas seguinte e anterior use a SETA DIREITA ou SETA ESQUERDA. Carregue em ESPAÇO ou ENTER para ativar o botão da barra de ferramentas.'
		},

			{
			name: 'Janela do editor',
			legend:
				'Dentro de uma janela de diálogo, use TAB para navegar para o campo seguinte; use SHIFT + TAB para mover para o campo anterior, use ENTER para submeter a janela, use ESC para cancelar a janela. Para as janelas que tenham vários separadores, use ALT + F10 para navegar na lista de separadores. Na lista pode mover entre o separador seguinte ou anterior com SETA DIREITA e SETA ESQUERDA, respetivamente' 
		},

			{
			name: 'Menu de contexto do editor',
			legend: 'Clique em ${contextMenu} ou TECLA APLICAÇÃO para abrir o menu de contexto. Depois vá para a opção do menu seguinte com TAB ou SETA PARA BAIXO. Vá para a opção anterior com  SHIFT+TAB ou SETA PARA CIMA. Pressione ESPAÇO ou ENTER para selecionar a opção do menu.  Abra o submenu da opção atual com ESPAÇO, ENTER ou SETA DIREITA. Vá para o item do menu contentor com ESC ou SETA ESQUERDA. Feche o menu de contexto com ESC.'
		},

			{
			name: 'Editor de caixa em lista',
			legend: 'Dentro de uma lista, para navegar para o item seguinte da lista use TAB ou SETA PARA BAIXO. Para o item anterior da lista use SHIFT+TAB ou SETA PARA BAIXO. Carregue em ESPAÇO ou ENTER para selecionar a opção lista. Carregue em ESC para fechar a caixa da lista.'
		},

			{
			name: 'Editor da barra de caminho dos elementos',
			legend: 'Clique em ${elementsPathFocus} para navegar na barra de caminho dos elementos. Para o botão do elemento seguinte use TAB ou SETA DIREITA. para o botão anterior use SHIFT+TAB ou SETA ESQUERDA. Carregue em ESPAÇO ou ENTER para selecionar o elemento no editor.'
		}
		]
	},
		{
		name: 'Comandos',
		items: [
			{
			name: 'Comando de anular',
			legend: 'Carregar ${undo}'
		},
			{
			name: 'Comando de refazer',
			legend: 'Clique ${redo}'
		},
			{
			name: 'Comando de negrito',
			legend: 'Pressione ${bold}'
		},
			{
			name: 'Comando de itálico',
			legend: 'Pressione ${italic}'
		},
			{
			name: 'Comando de sublinhado',
			legend: 'Pressione ${underline}'
		},
			{
			name: 'Comando de hiperligação',
			legend: 'Pressione ${link}'
		},
			{
			name: 'Comando de ocultar barra de ferramentas',
			legend: 'Pressione ${toolbarCollapse}'
		},
			{
			name: 'Aceder ao comando espaço de foco anterior',
			legend: 'Clique em ${accessPreviousSpace} para aceder ao espaço do focos inalcançável mais perto antes do sinal de omissão, por exemplo: dois elementos HR adjacentes. Repetir a combinação da chave para alcançar os espaços dos focos distantes.'
		},
			{
			name: 'Acesso comando do espaço focus seguinte',
			legend: 'Pressione ${accessNextSpace} para aceder ao espaço do focos inalcançável mais perto depois do sinal de omissão, por exemplo: dois elementos HR adjacentes. Repetir a combinação da chave para alcançar os espaços dos focos distantes.'
		},
			{
			name: 'Ajuda a acessibilidade',
			legend: 'Pressione ${a11yHelp}'
		},
			{
			name: ' Paste as plain text', // MISSING
			legend: 'Press ${pastetext}', // MISSING
			legendEdge: 'Press ${pastetext}, followed by ${paste}' // MISSING
		}
		]
	}
	],
	tab: 'Separador',
	pause: 'Pausa',
	capslock: 'Maiúsculas',
	escape: 'Esc',
	pageUp: 'Subir página',
	pageDown: 'Descer página',
	leftArrow: 'Seta esquerda',
	upArrow: 'Seta para cima',
	rightArrow: 'Seta direita',
	downArrow: 'Seta para baixo',
	insert: 'Inserir',
	leftWindowKey: 'Tecla esquerda Windows',
	rightWindowKey: 'Tecla direita Windows',
	selectKey: 'Selecionar tecla',
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
	multiply: 'Multiplicar',
	add: 'Adicionar',
	subtract: 'Subtrair',
	decimalPoint: 'Ponto decimal',
	divide: 'Separar',
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
	numLock: 'Num Lock', // MISSING
	scrollLock: 'Scroll Lock', // MISSING
	semiColon: 'Ponto e vírgula',
	equalSign: 'Sinald e igual',
	comma: 'Vírgula',
	dash: 'Cardinal',
	period: 'Ponto',
	forwardSlash: 'Forward Slash', // MISSING
	graveAccent: 'Acento grave',
	openBracket: 'Open Bracket', // MISSING
	backSlash: 'Backslash', // MISSING
	closeBracket: 'Close Bracket', // MISSING
	singleQuote: 'Plica'
} );
>>>>>>> 4.12.1
