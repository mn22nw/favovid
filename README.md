# Project for my course RIA-development with JavaScript  2DV607 ![build status](https://travis-ci.org/mn22nw/favovid.svg)

```
git clone https://github.com/mn22nw/favovid.git
npm install
npm start
open http://localhost:3000
```
**Description**  
This the beginning of my favovid app.   [VIEW DEMO](http://mn22nw.github.io/favovid/)     
The distribution files are located in the gh-pages branch 


It's a bit messy at the moment, with some code and modules that wont be there later, but I thought I could put it up anyways...

**WHAT'S UP NEXT**  -  *If you want to contribute, you could have a look at these:*   

* Fix navigation (the current menu-link should not be clickable) see [issue#3](https://github.com/mn22nw/favovid/issues/3)
* Test to implement dragging using [interact.js](http://interactjs.io/)  

    **Things I might need to do myself:**
    * Connecting to firebase and get youtubeIds from there instead of json - based on userid
    * Adding remove buttons etc. at the bottom of the videobox
    * Add inputfield on top of the 'videoboardContainer' where you can add a new youtubevideo 

***Completed features:***   
* When pressing the playbutton it loads the iframe and hides the image etc. (imgContainer). (I have images first, since they load faster)
* Restricted routes depening on auth-status


Built on top of the [https://github.com/gaearon/react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)

