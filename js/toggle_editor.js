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



// Toggle Editor Replacement
;(function(global) {
  'use strict';

  var useGesso = true;

  $('#wiki_edit_view_secondary, #right-side').prepend('<button id="gesso-toggle" class="btn btn-sidebar-wide"><i class="icon-edit"></i> Switch Back to Default Editor</button>');
  $('#editor_tabs').hide();
  $('#wiki_edit_view_secondary, #right-side').append('<p id="gesso-helptext" class="warning">Page Tools are unavailable when using the alternative editor. Click the button above to switch back to the default editor.</p>');

  $('.edit_link, .edit_assignment_link').on('click', function() {
  	$('#editor_tabs').hide();
  	$('.mceEditor').hide();
  	$('a.wiki_switch_views_link').hide();
  	$('a.toggle_views_link').hide();
  })
  
  $('#gesso-toggle').on('click', function(){
  	if (useGesso){
      // User is turning Gesso OFF
  		useGesso = false;
      
  		$('#gesso-toggle').text(' Switch to Gesso Editor');
  		$('#gesso-toggle').prepend('<i class="icon-edit"></i>');
  		// Show default stuff
  		$('#editor_tabs').fadeIn("slow");
  		$('.mceEditor').fadeIn("slow");
  		$('a.wiki_switch_views_link').fadeIn("slow");
  		$('a.toggle_views_link').fadeIn("slow");
  		// Hide enhanced stuff
  		$('#gesso-helptext').fadeOut("slow");
  		$('#cke_wiki_page_body').fadeOut("slow");
      for ( var i in CKEDITOR.instances ){
         var currentInstance = i;
         break;
      }
      console.log('currentInstance: '+currentInstance);
  		tinyMCE.activeEditor.setContent(CKEDITOR.instances[currentInstance].getData());
  	} else {
      // User is turning Gesso ON
  		useGesso = true;
  		$('#gesso-toggle').text(' Switch Back to Default Editor');
  		$('#gesso-toggle').prepend('<i class="icon-edit"></i>');
  		// Hide default stuff
  		$('#editor_tabs').fadeOut("slow");
  		$('.mceEditor').fadeOut("slow");
  		$('a.wiki_switch_views_link').fadeOut("slow");
  		$('a.toggle_views_link').fadeOut("slow");
  		//Show enhanced stuff
		  $('#cke_wiki_page_body').fadeIn("slow");
  		$('#gesso-helptext').fadeIn("slow");
      for ( var i in CKEDITOR.instances ){
         var currentInstance = i;
         break;
      }
      console.log('currentInstance: '+currentInstance);
      CKEDITOR.instances[currentInstance].setData(tinyMCE.activeEditor.getContent());
  	}
  })


}(this.self || global));