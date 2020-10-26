import React from "react";
import './main.css'

const Main = ({content, title, name}) => {

    let video, videoPath;

    const videoFile = () => {
        if (name) {
            return
        } else {
            return (
                <video className="video" autoPlay loop muted src={videoPath && video[0] ? videoPath + video[0]
                    : './video/earth.mp4'}/>
            )
        }
    }

    try {
        video = content[title];
        videoPath = "./video/"
    } catch (e) {

    }

    return (
        <section className="main">
            <h1 className="title">
                {title || name || 'Календарь SpaceX'}
            </h1>

            <div className="video-container">
                {videoFile()}
            </div>
        </section>
    )
}

export default Main
