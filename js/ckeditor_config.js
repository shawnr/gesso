/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */
 CKEDITOR.stylesSet.add( 'my_styles', [
    // Block-level styles
    { name: 'Red Title' , element: 'h3', styles: { 'color': '#aa0000' } },
    // Object Styles
    { name: 'Pull Right (photo)', element: 'img', attributes: { 'class': 'pull-right img-polaroid' }, styles: { 'margin': '1.5em 0 1.5em 1.5em' } },
    { name: 'Pull Left (photo)', element: 'img', attributes: { 'class': 'pull-left img-polaroid' }, styles: { 'margin': '1.5em 1.5em 1.5em 0' } },
    { name: 'Circle Image (right)', element: 'img', attributes: { 'class': 'img-circle pull-right' }, styles: { 'margin': '1.5em 0 1.5em 1.5em' }  },
    { name: 'Circle Image (left)', element: 'img', attributes: { 'class': 'img-circle pull-left' }, styles: { 'margin': '1.5em 1.5em 1.5em 0' } },
    { name: 'Pull Right (all)', element: ['a', 'embed', 'hr', 'img', 'li', 'object', 'ol', 'table', 'td', 'tr', 'ul'], attributes: { 'class': 'pull-right'} },
    { name: 'Align Top', element: [ 'table', 'td', 'tr' ], styles: { 'vertical-align': 'top'} },
    { name: 'Align Middle', element: [ 'table', 'td', 'tr' ], styles: { 'vertical-align': 'middle'} },
    { name: 'Align Bottom', element: [ 'table', 'td', 'tr' ], styles: { 'vertical-align': 'bottom'} },
    { name: 'Add Padding', element: 'table', attributes: { 'cellpadding': '10'} },
    { name: 'Add Spacing', element: 'table', attributes: { 'cellspacing': '10'} },
    { name: 'Bordered Table', element: 'table', attributes: { 'class': 'table table-striped table-hover table-bordered'} },
    { name: 'Condensed Table', element: 'table', attributes: { 'class': 'table table-striped table-hover table-condensed'} },
    

    // Inline styles
    { name: 'Lead Text', element: 'p', attributes: { 'class': 'lead' } },
    { name: 'Serif Text', element: ['p', 'div', 'td', 'tr', 'table', 'ul', 'ol', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'], styles: { 'font-family': '"Garamond" serif' } },
    { name: 'Loose Text', element: ['p', 'div', 'td', 'tr', 'table', 'ul', 'ol'], styles: { 'line-height': '2' } },
    { name: 'Background: Gray', element: ['a', 'li', 'ol', 'table', 'td', 'tr', 'ul', 'p', 'span' ], styles: { 'background-color': '#ccc' } },
    { name: 'Background: Black', element: ['a', 'li', 'ol', 'table', 'td', 'tr', 'ul', 'p', 'span' ], styles: { 'background-color': '#333' } },
	{ name: 'Background: SU Red', element: ['a', 'li', 'ol', 'table', 'td', 'tr', 'ul', 'p', 'span' ], styles: { 'background-color': '#aa0000' } },
    { name: 'Button: Default', element: ['span', 'p', 'a', 'button'], attributes: { 'class': 'btn' } },
    { name: 'Button: Primary', element: ['span', 'p', 'a', 'button'], attributes: { 'class': 'btn btn-primary' } },
    { name: 'Button: Info', element: ['span', 'p', 'a', 'button'], attributes: { 'class': 'btn btn-info' } },
    { name: 'Button: Success', element: ['span', 'p', 'a', 'button'], attributes: { 'class': 'btn btn-success' } },
    { name: 'Button: Warning', element: ['span', 'p', 'a', 'button'], attributes: { 'class': 'btn btn-warning' } },
    { name: 'Button: Danger', element: ['span', 'p', 'a', 'button'], attributes: { 'class': 'btn btn-danger' } },
    { name: 'Button: Inverse', element: ['span', 'p', 'a', 'button'], attributes: { 'class': 'btn btn-inverse' } },
    { name: 'Button: Link', element: ['span', 'p', 'a', 'button'], attributes: { 'class': 'btn btn-link' } },
    { name: 'Marker: green', element: 'span', styles: { 'background-color': 'Green' } },
    { name: 'Marker: yellow', element: 'span', styles: { 'background-color': 'Yellow' } }
] );

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config
	config.stylesSet = 'my_styles';
    config.allowedContent = true;
    config.contentsCss = 'https://seattleu.instructure.com/assets/vendor.css';
    config.height = 800;

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
};
