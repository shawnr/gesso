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

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {

	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
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
            file : "js/toggle_editor.js"
        }, {
            code : "[].forEach.call(document.querySelectorAll('textarea'), function(textarea) { CKEDITOR.replace(textarea, { customConfig: 'js/ckeditor_config.js'}); });"
        } ]);

        // setTimeout(function(){
        //     $('span.mceEditor').remove();
        //     $('a.wiki_switch_views_link').remove();
        //     $('a.toggle_views_link').remove();
        // },300);
    }
	}, 10);
});