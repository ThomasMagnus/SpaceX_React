import React from "react";
import { useHistory } from 'react-router-dom';
import './details.css'
import useLaunches from "../getLaunches/getLaunches";
import Main from "../Main/Main";
import YouTube from "react-youtube";

const Details = (props) => {
    const history = useHistory()
    const {getLaunch} = useLaunches()
    const launch = getLaunch(props.match.params.id);

    return (
        <>
            <Main name = {launch?.name}/>
            <main className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img src={launch?.links.patch.small} alt={launch?.name}/>
                        </div>
                        <div className="details-content">
                            <p className="details-description">{launch?.details}</p>
                        </div>
                    </div>
                    <div>
                        <YouTube className="details-youtube" videoId={launch?.links.youtube_id}/>
                    </div>
                </div>
                <a onClick={history.goBack} className="button button-back">go back</a>
            </main>
        </>
    )
}

export default Details
