chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
        
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
        function executeScripts(scripts, index) {
            var element, script;
            if (!index)
                index = 0;
            if (index < scripts.length) {
                script = scripts[index];
                element = document.createElement("script");
                element.setAttribute("type", "text/javascript");
                if (script.file) {
                    element.setAttribute("src", chrome.extension.getURL(scripts[index].file));
                    element.addEventListener("load", function() {
                        executeScripts(scripts, index + 1);
                    });
                    document.head.appendChild(element);
                } else if (script.code) {
                    element.innerText = script.code;
                    document.head.appendChild(element);
                    executeScripts(scripts, index + 1);
                }
            }
        }

        executeScripts([ {
            code : "var CKEDITOR_BASEPATH = '" + chrome.extension.getURL("js/ckeditor/") + "';"
        }, {
            file : "js/ckeditor/ckeditor.js"
        }, {
            file : "js/ckeditor_config.js"
        }, {
            code : "[].forEach.call(document.querySelectorAll('textarea'), function(textarea) { CKEDITOR.replace(textarea, { customConfig: 'js/ckeditor_config.js'}); });"        
        } ]);

        //CKEDITOR.basePath = chrome.extension.getURL('js/ckeditor/');
        //console.log('basePath: '+CKEDITOR.basePath);
        


        // CKEDITOR.replaceAll(function(textarea, config) { 
        //     config.stylesSet = 'my_styles';
        //     config.allowedContent = true;
        //     config.contentsCss = 'https://seattleu.instructure.com/assets/vendor.css';
        //     config.height = 800;
        //     config.basePath = chrome.extension.getURL('js/ckeditor/');
        //     config.contentsLanguage = 'en';
        //     config.defaultLanguage = 'en';
        //     config.language = 'en';
        // }); 
        setTimeout(function(){
            $('span.mceEditor').remove();
            $('a.wiki_switch_views_link').remove();
            $('a.toggle_views_link').remove();
        },300);
    }
	}, 10);
});