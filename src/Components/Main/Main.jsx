import React from "react";
import './main.css'

const Main = ({content, title, name}) => {

    let video, videoPath;

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
                <video className="video" autoPlay loop muted src={videoPath && video[0] ? videoPath + video[0]
                    : './video/earth.mp4'}/>
            </div>
        </section>
    )
}

export default Main
