import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Video} from  './Video.js'   //TODO change
import styles from '../CSS-modules/videoList.css';
import actions from '../actions';
import C from "../constants";
import _ from "lodash";


export class VideoList extends Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        const p = this.props,
            videos = _.map(p.videos.data.videos, function (videoInfo, yid) { // loop through all videos
                var videostate = p.videos.states[yid];

                return <Video
                    key={yid}
                    id={yid}
                    title={videoInfo.title}
                    state={videostate}
                    play={p.loadVideo.bind(this,yid)}/>;
            }, this);


        return (
            <div className={styles.videosWrapper}>
                {videos}
            </div>
        );
    }

    _handleClick() {
        console.log('I was clicked')
    }
}

const mapStateToProps = function (appState) {
    return {
        videos: appState.videos,
        auth: appState.auth
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        loadVideo: function (youtubeid) {
            dispatch(actions.loadVideo(youtubeid));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);