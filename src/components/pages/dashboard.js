"use strict";

//Efter man har loggat in...

import React from 'react';
import {VideoList} from  '../videolist'
var data = require('../../data/videos.json'); 



export default class Dashboard extends React.Component{	
  render(){ 	
    return (
    	<div > 
    	<h2>Dashboard</h2>
	    <hr />
	    <VideoList data= {data} />

    	</div>
    	);
  }
};