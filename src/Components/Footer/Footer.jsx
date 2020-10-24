import React from "react";
import './footer.css'

const Footer = (props) => {
    return (
        <footer className="footer">
            <img src="./SpaceX-Layout/img/logo.svg" alt="logo Space X" className="logo"/>
            <nav className="footer-nav">
                <ul className="list">
                    <li className="item"><a href={props.elon_twitter} rel="noopener noreferrer" target='_blank' className="item-link">Elon
                        Musk Twitter</a></li>
                    <li className="item"><a href={props.twitter} rel="noopener noreferrer" target='_blank'
                                            className="item-link">Twitter</a></li>
                    <li className="item"><a href={props.flickr} rel="noopener noreferrer" target='_blank'
                                            className="item-link">Flickr</a></li>
                    <li className="item"><a href={props.website} rel="noopener noreferrer" target='_blank'
                                            className="item-link">Website</a></li>
                </ul>
            </nav>
            <p className="footer-text">
                For additional questions, contact
                <a className="footer-link" href="mailto:rideshare@spacex.com"
                >rideshare@spacex.com</a
                >
            </p>

        </footer>
    )
}

export default Footer
