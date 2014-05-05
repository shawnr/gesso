# Gesso

>  Gesso &ellipsis; is a white paint mixture consisting of a binder mixed with chalk, gypsum, pigment, or any combination of these. It is used in artwork as a preparation for any number of substrates such as wood panels, *canvas* and sculpture as a base for paint and other materials that are applied over it.
> [Wikipedia](http://en.wikipedia.org/wiki/Gesso) (_Emphasis added._)

Gesso is a [Google Chrome](http://www.google.com/chrome/) extension designed to enhance the content editing experience in [Canvas LMS](http://canvas.instructure.com) by [Instructure](http://instructure.com).

## Not Ready for Prime Time

Gesso is currently in the testing phase and is not available through the Chrome App Store. I encourage you to try out Gesso and contribute feedback to this project using the [Issues page](https://github.com/shawnr/gesso/issues). 

## Installation

Gesso is a Google Page Action Extension. It can be installed like any extension in development:

1. Clone or [download](https://github.com/shawnr/gesso/archive/master.zip) this repo
2. Open Chrome and put ``chrome://extensions`` into the address bar to go to the Extensions management page
3. Click the checkbox for "developer mode" in the upper left of the Extensions management page
4. Click the button labelled "Install Unpacked Extension"
5. In the file selection dialog, select the ``gesso`` directory (the one that contains ``manifest.json``)

Once a development-mode extension is installed you may enable/disable or delete it just as you do with any other extension.

### Recommended Installation

If you want to keep up with changes to the codebase (which is evolving at the moment), then I recommend cloning the repository so you can more easily pull down changes. If you have trouble cloning the repository, check out the Github desktop client for [Mac](http://mac.github.com) and [Windows](http://windows.github.com). Once you install the desktop client, you can use the ``Clone in Desktop`` button on the [Gesso project page](https://github.com/shawnr/gesso). This will automatically clone the repo into a location of your choosing on your computer.

## Updates

Since this extension is in developer mode, updates are not automatic. In order to get updates, you perform the following:

1. Update (or Sync) the Gesso repository
2. Open Chrome and put ``chrome://extensions`` into the address bar to go to the Extensions management page
3. Under the listing for Gesso, click the "Reload" link (near the "Allow in Incognito" checkbox)
4. Refresh any tabs you have open to instructure.com URLs

## Usage

The extension automatically activates anytime you are at a URL matching the pattern ``https://*.instructure.com/*``. You will notice the red and white "G" icon showing up in the Chrome address bar to indicate the extension is working.

Gesso will replace the WYSIWYG text editor on content editing pages with a custom one. It also provides a button to "Switch Back to Default Editor." There are features of the default editor that Gesso cannot reproduce, so switching between the two is likely to be necessary in order to have a more complete editing experience.

## Thanks and attributions

Gesso is based on a framework generated at [Extensionizr](http://extensionizr.com/) and review of many, many open source [Google Chrome extensions on Github](https://github.com/search?q=chrome+extension). 

Thanks to everyone testing and helping figure out what to put into the extension. Lists of names will ensue!

## Licensing and Use

Gesso - A Google Chrome extension for the Canvas LMS
Copyright (C) 2014  Shawn Rider

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

Gesso is in no way affiliated with Instructure. Canvas and all associated properties, trademarks and rights remain with their original owners.