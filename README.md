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

- Fix navigation (the current menu-link should not be clickable) see [issue#3](https://github.com/mn22nw/favovid/issues/3)
- *Video* - It's shouldn't be possible to add a video that already exists for the user. 

	**Enhancements**  
    - *Draggable*  - The current draggable-box should be placed on top of the others. 
    - *Draggable*  - The current position for the video-boxes should be saved. (dissapears on relaod)
    - *Video* - The current time position needs to be saved. (dissapears on reload/navigation elsewhere)

    **Things I might need to do myself:**
    * Adding remove buttons etc. at the bottom of the videobox
    * Add inputfield on top of the 'videoboardContainer' where you can add a new youtubevideo 

***Completed features:***   
* When pressing the playbutton it loads the iframe and hides the image etc. (imgContainer). (I have images first, since they load faster)
* The videos-boxes are draggable with the help of [react-draggable](https://github.com/mzabriskie/react-draggable)
* Connecting to firebase and fetches youtubevidoes based on userid
* Add a youtube video to the dashboard 

***Almost completed features***
* Restricted routes depening on auth-status *(A little too slow....)*
* Sign up
* Feedback when adding video


Built on top of the [https://github.com/gaearon/react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)


