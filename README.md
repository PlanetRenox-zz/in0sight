# inØsight [![Mozilla Add-on](https://img.shields.io/amo/users/in0sight.svg)](https://addons.mozilla.org/en-US/firefox/addon/in0sight/) [![License](https://img.shields.io/github/license/planetrenox/in0sight.svg)](https://github.com/PlanetRenox/in0sight/blob/master/LICENSE)

This extension is able to detect and obfuscate any message inside hidden zero width spaces which can be placed (almost) anywhere invisible to the naked eye. 

There is no limit. You can hide entire PGP messages inside version 1. 
Versions 2.0 and 2.1 are limited in characters. They offer compatibility for sites like Twitter and Protonmail or other places that restrict some ZW characters. 
Future versions will focus on reducing storage size so they are even harder to detect. 

If you come across any bugs or questions submit them to the issues tab or email at planetrenox@pm.me

###### Some sites use zero width characters in their ui functionality and that will set off a false 10sec notice. This is a known issue and we will try to narrow it down in the future. If you come across any, please report them in.  

The current roadmap for the next update currently includes reworking the 10 second notice, introducing a much more efficient algorithm to reduce storage size in case of obfuscating larger chunks of text, having the extension auto detect the version, and a completely seperate java client to be run in a desktop enviroment for windows, mac, and linux. And when the more minor details are stable, introduce password encryption on top of the zero width obfuscation. 

* Firefox: [Download](https://addons.mozilla.org/en-US/firefox/addon/in0sight/)
* Chrome: Under Consideration
* Desktop Client: TBA

--------------------------------------------------------------

Contributors are welcome to help improve/expand the project. Also willing to assign a co-dev position if the vision is there. This currently being a 100% solo project, finding the time is difficult since I am also working on other projects/school. No matter how minor the pull request, you will be credited. 

Next update is planned for December 2018.

###### It should also be mentioned that if the zero width is inserted using javascript after the page loads, it will not be detected. This is preferred so the addon doesn't use too many resources. If your threat level is that high, using NoScript is recommended.

###### If you are having trouble de-obfuscating, first make sure you copied the zero width completely, in order to avoid this problem always place the ZW in-between words. If this is not the case, test to see if the the place you stored the ZW supports all ZW characters and did not cut anything. You can test this by comparing the before and after unicode to make sure nothing changes. If something has been cut (please notify us so we can add compatibility) you can try looking at the dictionary for your version inside ui-script.js to try and manually decode it. If you still have a hard time figuring it out and really need it decoded you can send an email and I will look at it if there are no privacy issues.

# License
[WTFPL](https://github.com/PlanetRenox/in0sight/blob/master/LICENSE)
