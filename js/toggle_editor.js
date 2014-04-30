// Toggle Editor Replacement
;(function(global) {
  'use strict';

  var useGesso = true;

  $('#wiki_edit_view_secondary').prepend('<a href="#edit" id="gesso-toggle" class="btn btn-sidebar-wide"><i class="icon-edit"></i> Switch Back to Default Editor</a>');
  $('#editor_tabs').hide();
  $('#wiki_edit_view_secondary').append('<p id="gesso-helptext" class="warning">Page Tools are unavailable when using the alternative editor. Click the button above to switch back to the default editor.</p>');
  
  $('#edit').on('click', function() {
  	$('#editor_tabs').hide();
  	$('.mceEditor').hide();
	$('a.wiki_switch_views_link').hide();
	$('a.toggle_views_link').hide();
  })

  $('#gesso-toggle').on('click', function(){
  	if (useGesso){
  		useGesso = false;
  		$('#gesso-toggle').text(' Switch to Gesso Editor');
  		$('#gesso-toggle').prepend('<i class="icon-edit"></i>');
  		// Show default stuff
  		$('#editor_tabs').show();
  		$('.mceEditor').show();
		$('a.wiki_switch_views_link').show();
		$('a.toggle_views_link').show();
		// Hide enhanced stuff
  		$('#gesso-helptext').hide();
  		$('#cke_wiki_page_body').hide();
  		console.log(CKEDITOR.instances.wiki_page_body.getData());
  	} else {
  		useGesso = true;
  		$('#gesso-toggle').text(' Switch Back to Default Editor');
  		$('#gesso-toggle').prepend('<i class="icon-edit"></i>');
  		// Hide default stuff
  		$('#editor_tabs').hide();
  		$('.mceEditor').hide();
		$('a.wiki_switch_views_link').hide();
		$('a.toggle_views_link').hide();
		//Show enhanced stuff
		$('#cke_wiki_page_body').show();
  		$('#gesso-helptext').show();
  	}
  })
  

}(this.self || global));