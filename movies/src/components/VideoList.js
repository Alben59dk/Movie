import React, { Component } from 'react'
import VideoListItem from './VideoListItem'

export default class VideoList extends Component {
    render () {
        return (
            <div>
                <ul>
                    <VideoListItem />
                    <VideoListItem />
                    <VideoListItem />
                    <VideoListItem />
                    <VideoListItem />
                </ul>
            </div>

        )
    }
}
