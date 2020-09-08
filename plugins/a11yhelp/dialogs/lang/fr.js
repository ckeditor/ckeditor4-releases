<<<<<<< HEAD
﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.setLang("a11yhelp","fr",{title:"Instructions d'accessibilité",contents:"Contenu de l'aide. Pour fermer ce dialogue, appuyez sur la touche Ech (Echappement).",legend:[{name:"Général",items:[{name:"Barre d'outils de l'éditeur",legend:"Appuyer sur ${toolbarFocus} pour accéder à la barre d'outils. Se déplacer vers les groupes suivant ou précédent de la barre d'outil avec les touches TAB et SHIFT-TAB. Se déplacer vers les boutons suivant ou précédent de la barre d'outils avec les touches FLECHE DROITE et FLECHE GAUCHE. Appuyer sur la barre d'espace ou la touche ENTRER pour activer le bouton de barre d'outils."},
{name:"Dialogue de l'éditeur",legend:"A l'intérieur d'un dialogue, appuyer sur la touche TAB pour naviguer jusqu'au champ de dalogue suivant, appuyez sur les touches SHIFT + TAB pour revenir au champ précédent, appuyez sur la touche ENTRER pour soumettre le dialogue, appuyer sur la touche ESC pour annuler le dialogue. Pour les dialogues avec plusieurs pages d'onglets, appuyer sur ALT + F10 pour naviguer jusqu'à la liste des onglets. Puis se déplacer vers l'onglet suivant avec la touche TAB ou FLECHE DROITE. Se déplacer vers l'onglet précédent avec les touches SHIFT + TAB ou FLECHE GAUCHE. Appuyer sur la barre d'espace ou la touche ENTRER pour sélectionner la page de l'onglet."},
{name:"Menu contextuel de l'éditeur",legend:"Appuyer sur ${contextMenu} ou entrer le RACCOURCI CLAVIER pour ouvrir le menu contextuel. Puis se déplacer vers l'option suivante du menu avec les touches TAB ou FLECHE BAS. Se déplacer vers l'option précédente avec les touches  SHIFT+TAB ou FLECHE HAUT. appuyer sur la BARRE D'ESPACE ou la touche ENTREE pour sélectionner l'option du menu. Oovrir le sous-menu de l'option courante avec la BARRE D'ESPACE ou les touches ENTREE ou FLECHE DROITE. Revenir à l'élément de menu parent avec les touches Ech ou FLECHE GAUCHE. Fermer le menu contextuel avec Ech."},
{name:"Zone de liste de l'éditeur",legend:"Dans la liste en menu déroulant, se déplacer vers l'élément suivant de la liste avec les touches TAB ou FLECHE BAS. Se déplacer vers l'élément précédent de la liste avec les touches MAJ + TAB ou FLECHE HAUT. Appuyer sur la BARRE D'ESPACE ou sur ENTREE pour sélectionner l'option dans la liste. Appuyer sur ESC pour fermer le menu déroulant."},{name:"Barre d'emplacement des éléments de l'éditeur",legend:"Appuyer sur ${elementsPathFocus} pour naviguer vers la barre d'emplacement des éléments de l'éditeur. Se déplacer vers le bouton d'élément suivant avec les touches TAB ou FLECHE DROITE. Se déplacer vers le bouton d'élément précédent avec les touches MAJ+TAB ou FLECHE GAUCHE. Appuyer sur la BARRE D'ESPACE ou sur ENTREE pour sélectionner l'élément dans l'éditeur."}]},
{name:"Commandes",items:[{name:" Annuler la commande",legend:"Appuyer sur ${undo}"},{name:"Refaire la commande",legend:"Appuyer sur ${redo}"},{name:" Commande gras",legend:"Appuyer sur ${bold}"},{name:" Commande italique",legend:"Appuyer sur ${italic}"},{name:" Commande souligné",legend:"Appuyer sur ${underline}"},{name:" Commande lien",legend:"Appuyer sur ${link}"},{name:" Commande enrouler la barre d'outils",legend:"Appuyer sur ${toolbarCollapse}"},{name:"Accéder à la précédente commande d'espace de mise au point",
legend:"Appuyez sur ${accessPreviousSpace} pour accéder à l'espace hors d'atteinte le plus proche avant le caret, par exemple: deux éléments HR adjacents. Répétez la combinaison de touches pour atteindre les espaces de mise au point distants."},{name:"Accès à la prochaine commande de l'espace de mise au point",legend:"Appuyez sur ${accessNextSpace} pour accéder au plus proche espace de mise au point hors d'atteinte après le caret, par exemple: deux éléments HR adjacents. répétez la combinaison de touches pour atteindre les espace de mise au point distants."},
{name:" Aide Accessibilité",legend:"Appuyer sur ${a11yHelp}"}]}],backspace:"Retour arrière",tab:"Tabulation",enter:"Entrée",shift:"Majuscule",ctrl:"Ctrl",alt:"Alt",pause:"Pause",capslock:"Verr. Maj.",escape:"Echap",pageUp:"Page supérieure",pageDown:"Page inférieure",end:"Fin",home:"Retour",leftArrow:"Flèche gauche",upArrow:"Flèche haute",rightArrow:"Flèche droite",downArrow:"Flèche basse",insert:"Insertion","delete":"Supprimer",leftWindowKey:"Touche Windows gauche",rightWindowKey:"Touche Windows droite",
selectKey:"Touche menu",numpad0:"Pavé numérique 0",numpad1:"Pavé numérique 1",numpad2:"Pavé numérique 2",numpad3:"Pavé numérique 3",numpad4:"Pavé numérique 4",numpad5:"Pavé numérique 5",numpad6:"Pavé numérique 6",numpad7:"Pavé numérique 7",numpad8:"Pavé numérique 8",numpad9:"Pavé numérique 9",multiply:"Multiplier",add:"Addition",subtract:"Soustraire",decimalPoint:"Point décimal",divide:"Diviser",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",
numLock:"Verrouillage numérique",scrollLock:"Arrêt défilement",semiColon:"Point virgule",equalSign:"Signe égal",comma:"Virgule",dash:"Tiret",period:"Point",forwardSlash:"Barre oblique",graveAccent:"Accent grave",openBracket:"Parenthèse ouvrante",backSlash:"Barre oblique inverse",closeBracket:"Parenthèse fermante",singleQuote:"Apostrophe"});
=======
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'fr', {
	title: 'Instructions d\'accessibilité',
	contents: 'Contenu de l\'aide. Pour fermer cette fenêtre, appuyez sur la touche Échap.',
	legend: [
		{
		name: 'Général',
		items: [
			{
			name: 'Barre d\'outils de l\'éditeur',
			legend: 'Appuyer sur ${toolbarFocus} pour accéder à la barre d\'outils. Se déplacer vers le groupe suivant ou précédent de la barre d\'outils avec les touches Tab et Maj+Tab. Se déplacer vers le bouton suivant ou précédent de la barre d\'outils avec les touches Flèche droite et Flèche gauche. Appuyer sur la barre d\'espace ou la touche Entrée pour activer le bouton de barre d\'outils.'
		},

			{
			name: 'Fenêtre de l\'éditeur',
			legend:
				'Dans une boîte de dialogue, appuyer sur Tab pour passer à l\'élément suivant, appuyer sur Maj+Tab pour passer à l\'élément précédent, appuyer sur Entrée pour valider, appuyer sur Échap pour annuler. Quand une boîte de dialogue possède des onglets, la liste peut être atteinte avec Alt+F10 ou avec Tab. Dans la liste des onglets, se déplacer vers le suivant et le précédent avec les touches Flèche droite et Flèche gauche respectivement.' 
		},

			{
			name: 'Menu contextuel de l\'éditeur',
			legend: 'Appuyer sur ${contextMenu} ou sur la touche Menu pour ouvrir le menu contextuel. Se déplacer ensuite vers l\'option suivante du menu avec les touches Tab ou Flèche bas. Se déplacer vers l\'option précédente avec les touches Maj+Tab ou Flèche haut. Appuyer sur la barre d\'espace ou la touche Entrée pour sélectionner l\'option du menu. Appuyer sur la barre d\'espace, la touche Entrée ou Flèche droite pour ouvrir le sous-menu de l\'option sélectionnée. Revenir à l\'élément de menu parent avec la touche Échap ou Flèche gauche. Fermer le menu contextuel avec Échap.'
		},

			{
			name: 'Zone de liste de l\'éditeur',
			legend: 'Dans une liste en menu déroulant, se déplacer vers l\'élément suivant de la liste avec les touches Tab ou Flèche bas. Se déplacer vers l\'élément précédent de la liste avec les touches Maj+Tab ou Flèche haut. Appuyer sur la barre d\'espace ou sur Entrée pour sélectionner l\'option dans la liste. Appuyer sur Échap pour fermer le menu déroulant.'
		},

			{
			name: 'Barre du chemin d\'éléments de l\'éditeur',
			legend: 'Appuyer sur ${elementsPathFocus} pour naviguer vers la barre du fil d\'Ariane des éléments. Se déplacer vers le bouton de l\'élément suivant avec les touches Tab ou Flèche droite. Se déplacer vers le bouton précédent avec les touches Maj+Tab ou Flèche gauche. Appuyer sur la barre d\'espace ou sur Entrée pour sélectionner l\'élément dans l\'éditeur.'
		}
		]
	},
		{
		name: 'Commandes',
		items: [
			{
			name: ' Annuler la commande',
			legend: 'Appuyer sur ${undo}'
		},
			{
			name: 'Commande restaurer',
			legend: 'Appuyer sur ${redo}'
		},
			{
			name: ' Commande gras',
			legend: 'Appuyer sur ${bold}'
		},
			{
			name: ' Commande italique',
			legend: 'Appuyer sur ${italic}'
		},
			{
			name: ' Commande souligné',
			legend: 'Appuyer sur ${underline}'
		},
			{
			name: ' Commande lien',
			legend: 'Appuyer sur ${link}'
		},
			{
			name: ' Commande enrouler la barre d\'outils',
			legend: 'Appuyer sur ${toolbarCollapse}'
		},
			{
			name: 'Commande d\'accès à l\'élément sélectionnable précédent',
			legend: 'Appuyer sur ${accessNextSpace} pour accéder à l\'élément sélectionnable inatteignable le plus proche avant le curseur, par exemple : deux lignes horizontales adjacentes. Répéter la combinaison de touches pour atteindre les éléments sélectionnables précédents.'
		},
			{
			name: 'Commande d\'accès à l\'élément sélectionnable suivant',
			legend: 'Appuyer sur ${accessNextSpace} pour accéder à l\'élément sélectionnable inatteignable le plus proche après le curseur, par exemple : deux lignes horizontales adjacentes. Répéter la combinaison de touches pour atteindre les éléments sélectionnables suivants.'
		},
			{
			name: ' Aide sur l\'accessibilité',
			legend: 'Appuyer sur ${a11yHelp}'
		},
			{
			name: 'Coller comme texte sans mise en forme',
			legend: 'Appuyer sur ${pastetext}',
			legendEdge: 'Enfoncez ${pastetext}, suivi par ${paste}'
		}
		]
	}
	],
	tab: 'Tabulation',
	pause: 'Pause',
	capslock: 'Verr. Maj.',
	escape: 'Échap',
	pageUp: 'Page supérieure',
	pageDown: 'Page suivante',
	leftArrow: 'Flèche gauche',
	upArrow: 'Flèche haut',
	rightArrow: 'Flèche droite',
	downArrow: 'Flèche basse',
	insert: 'Inser',
	leftWindowKey: 'Touche Windows gauche',
	rightWindowKey: 'Touche Windows droite',
	selectKey: 'Touche Sélectionner',
	numpad0: '0 du pavé numérique',
	numpad1: '1 du pavé numérique',
	numpad2: '2 du pavé numérique',
	numpad3: '3 du pavé numérique',
	numpad4: '4 du pavé numérique',
	numpad5: '5 du pavé numérique',
	numpad6: '6 du pavé numérique',
	numpad7: '7 du pavé numérique',
	numpad8: 'Pavé numérique 8',
	numpad9: '9 du pavé numérique',
	multiply: 'Multiplier',
	add: 'Plus',
	subtract: 'Moins',
	decimalPoint: 'Point décimal',
	divide: 'Diviser',
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
	numLock: 'Verr. Num.',
	scrollLock: 'Arrêt défil.',
	semiColon: 'Point-virgule',
	equalSign: 'Signe égal',
	comma: 'Virgule',
	dash: 'Tiret',
	period: 'Point',
	forwardSlash: 'Barre oblique',
	graveAccent: 'Accent grave',
	openBracket: 'Parenthèse ouvrante',
	backSlash: 'Barre oblique inverse',
	closeBracket: 'Parenthèse fermante',
	singleQuote: 'Apostrophe'
} );
>>>>>>> 4.12.1
