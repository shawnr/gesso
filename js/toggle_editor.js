// Toggle Editor Replacement
;(function(global) {
  'use strict';

  var useGesso = true;

  $('#wiki_edit_view_secondary').prepend('<button id="gesso-toggle" class="btn btn-sidebar-wide"><i class="icon-edit"></i> Switch Back to Default Editor</button>');
  $('#editor_tabs').hide();
  $('#wiki_edit_view_secondary').append('<p id="gesso-helptext" class="warning">Page Tools are unavailable when using the alternative editor. Click the button above to switch back to the default editor.</p>');

  $('.edit_link').on('click', function() {
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