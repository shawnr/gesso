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
// ------------------------------------------------------------------------- //
// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });
//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });
// chrome.runtime.onInstalled.addListener(function() {
//   // Replace all rules ...
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     // With a new rule ...
//     chrome.declarativeContent.onPageChanged.addRules([
//       {
//         // That fires when a page's URL contains a 'g' ...
//         conditions: [
//           new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: { urlMatches: [^'discussion_topics'] },
//           })
//         ],
//         // And shows the extension's page action.
//         actions: [ new chrome.declarativeContent.ShowPageAction() ]
//       }
//     ]);
//   });
// });