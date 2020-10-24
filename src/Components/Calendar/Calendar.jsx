import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Main from "../Main/Main";
import FetchData from "../services/getdata";
import './calendar.css'

const Calendar = () => {
    const fetchData = new FetchData();

    const [data, setData] = useState([])
    useEffect(() => {
        fetchData.getLaunches()
            .then(launches => setData(launches))
    }, [])

    return (
        <>
            <Main />
            <section className="calendar">
                <div className="container">
                    <ul className="calendar-list">
                        {data.map(item => (
                            <li className="calendar-item" key={item.id}>
                                <article className="launches">
                                    <div className="launches-image">
                                        <img src={item.links.patch.small} alt=""/>
                                        <a className="launches-youtube" href="https://www.youtube.com/watch?v=dLQ2tZEH6G0"/>
                                    </div>
                                    <div className="launches-content">
                                        <h2 className="launches-title">{item.name}</h2>
                                        <Link to="/details" className="button launches-details">Подробнее</Link>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Calendar
