chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
        var tareas = document.getElementsByTagName('textarea');
        for (var i=0; i<=tareas.length; i++) {
            console.log(tareas.item(i));
        }
        // var script = document.createElement("script");
        // script.type = "text/javascript";
        // script.src = chrome.extension.getURL('/js/ckeditor/ckeditor.js');

        // document.body.appendChild(script);
        $('.edit_link').off('click');
        $('.edit_link').on('click', function () {
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

            if (true){
                console.log('instantiating ckeditor.')
                CKEDITOR.replaceAll( {
                    stylesSet: 'my_styles',
                    allowedContent: true,
                    contentsCss: 'https://seattleu.instructure.com/assets/vendor.css',
                    height: 800,
                    customConfig: '',
                    baseHref: chrome.extension.getURL('ckeditor/')
                });
                setTimeout(function(){
                    $('span.mceEditor').remove();
                    $('a.wiki_switch_views_link').remove();
                    $('a.toggle_views_link').remove();
                },3000);
            }
        });
    }
	}, 10);
});