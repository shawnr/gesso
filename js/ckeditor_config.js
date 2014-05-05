// Gesso - A Google Chrome extension for the Canvas LMS
// Copyright (C) 2014  Shawn Rider

// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License along
// with this program; if not, write to the Free Software Foundation, Inc.,
// 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

// Gesso is in no way affiliated with Instructure. Canvas and all associated properties, trademarks and rights remain with their original owners.
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
    { name: 'Serif Font', element: ['p', 'div', 'td', 'tr', 'table', 'ul', 'ol', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'], styles: { 'font-family': '"Garamond" "Palatino Linotype", "Book Antiqua", Palatino, serif' } },
    { name: 'Sans Serif Font', element: ['p', 'div', 'td', 'tr', 'table', 'ul', 'ol', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'], styles: { 'font-family': 'Arial, Helvetica, sans-serif' } },
    { name: 'Monospaced Font', element: ['p', 'div', 'td', 'tr', 'table', 'ul', 'ol', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'], styles: { 'font-family': '"Lucida Console", Monaco, monospace' } },
    { name: 'Loose Text', element: ['p', 'div', 'td', 'tr', 'table', 'ul', 'ol'], styles: { 'line-height': '2' } },
    { name: 'Medium Text', element: ['p', 'div', 'td', 'tr', 'table', 'ul', 'ol'], styles: { 'line-height': '1.5' } },
    { name: 'Tight Text', element: ['p', 'div', 'td', 'tr', 'table', 'ul', 'ol'], styles: { 'line-height': '1' } },
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
    'use strict';
	config.stylesSet = 'my_styles';
    config.contentsCss = 'https://seattleu.instructure.com/assets/vendor.css';
    config.height = 600;

	//The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'document',      groups: [ 'mode', 'document', 'doctools' ] },
        { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        '/',
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
        { name: 'links' },
		//{ name: 'forms' },
        { name: 'insert' },
        '/',
		{ name: 'styles' },
		{ name: 'colors' },
        { name: 'tools' },
        { name: 'pbckcode' },
        { name: 'others' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Smiley,Flash,InsertSymbol,Underline,NewPage,Preview,Templates,Print,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Language';



	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	//config.removeDialogTabs = 'image:advanced;link:advanced';
    config.removeDialogTabs = '';
    // ADVANCED CONTENT FILTER (ACF)
     // ACF protects your CKEditor instance of adding unofficial tags
     // however it strips out the pre tag of pbckcode plugin
     // add this rule to enable it, useful when you want to re edit a post
     config.allowedContent= true; // add other rules here

     // PBCKCODE CUSTOMIZATION
     config.pbckcode = {
         // An optional class to your pre tag.
        cls : '',

         // The syntax highlighter you will use in the output view
        highlighter : 'PRETTIFY',

         // An array of the available modes for you plugin.
         // The key corresponds to the string shown in the select tag.
         // The value correspond to the loaded file for ACE Editor.
        modes :  [
            // Available modes
            ['C/C++'        , 'c_pp'],
            ['C9Search'     , 'c9search'],
            ['Clojure'      , 'clojure'],
            ['CoffeeScript' , 'coffee'],
            ['ColdFusion'   , 'coldfusion'],
            ['C#'           , 'csharp'],
            ['CSS'          , 'css'],
            ['Diff'         , 'diff'],
            ['Glsl'         , 'glsl'],
            ['Go'           , 'golang'],
            ['Groovy'       , 'groovy'],
            ['haXe'         , 'haxe'],
            ['HTML'         , 'html'],
            ['Jade'         , 'jade'],
            ['Java'         , 'java'],
            ['JavaScript'   , 'javascript'],
            ['JSON'         , 'json'],
            ['JSP'          , 'jsp'],
            ['JSX'          , 'jsx'],
            ['LaTeX'        , 'latex'],
            ['LESS'         , 'less'],
            ['Liquid'       , 'liquid'],
            ['Lua'          , 'lua'],
            ['LuaPage'      , 'luapage'],
            ['Markdown'     , 'markdown'],
            ['OCaml'        , 'ocaml'],
            ['Perl'         , 'perl'],
            ['pgSQL'        , 'pgsql'],
            ['PHP'          , 'php'],
            ['Powershell'   , 'powershel1'],
            ['Python'       , 'python'],
            ['R'            , 'ruby'],
            ['OpenSCAD'     , 'scad'],
            ['Scala'        , 'scala'],
            ['SCSS/Sass'    , 'scss'],
            ['SH'           , 'sh'],
            ['SQL'          , 'sql'],
            ['SVG'          , 'svg'],
            ['Tcl'          , 'tcl'],
            ['Text'         , 'text'],
            ['Textile'      , 'textile'],
            ['XML'          , 'xml'],
            ['XQuery'       , 'xq'],
            ['YAML'         , 'yaml']
        ],

         // The theme of the ACE Editor of the plugin.
        theme : 'github',

         // Tab indentation (in spaces)
        tab_size : '4'
     };
};
