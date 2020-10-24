import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import './header.css';

class Header extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <Link to="/">
                    <img
                        src="./SpaceX-Layout/img/logo.svg"
                        alt="Logo Space X"
                        className="logo"
                    />
                </Link>
                <nav className="main-nav nav">
                    <ul className="list">
                        {this.props.rockets.map((item, i) => {
                           return (
                                <li key={i} className="item">
                                <Link
                                      to='/rocket'
                                      onClick={e => {
                                          const target = e.target;
                                          this.props.change(target.textContent)
                                      }}
                                      className="item-link">{item}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <nav className="secondary-nav">
                    <ul className="list">
                        <li className="item">
                            <NavLink exact activeClassName="active" to="/" className="item-link">Home</NavLink>
                        </li>
                        <li className="item">
                            <NavLink activeClassName="active" to="calendar" className="item-link">Calendar</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )

    }
}

export default Header
