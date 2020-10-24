import React from "react";
import './feautures.css';
import RellaxWrapper from 'react-rellax-wrapper'

const Feautures = props => {
    const {name, height, diameter, mass, payload_weights: playload} = props.property.rocketFeatures
    let imgPath = "./SpaceX-Layout/img/";
    const img = props.content[props.property.title]
    return (
        <section className="features">
            <h2 className="features-title">
                {name} <br/>Overview
            </h2>
            <div className="overview">

                <table className="table">
                    <caption className="table-title">
                        Size
                    </caption>
                    <thead>
                    <tr>
                        <td className="table-column">HEIGHT</td>
                        <td className="table-column"> {height.meters} m
                            / {height.feet} ft</td>
                    </tr>
                    <tr>
                        <td className="table-column">DIAMETER</td>
                        <td className="table-column">{diameter.meters} m
                            / {diameter.feet} ft</td>
                    </tr>
                    <tr>
                        <td className="table-column">MASS</td>
                        <td className="table-column">{mass.kg / 1000} kg
                            / {mass.lb / 1000} lb</td>
                    </tr>
                    {playload.map(item => {
                        return (
                            <tr key={item.id}>
                                <td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
                                <td className="table-column">{item.kg} kg / {item.lb} lb</td>
                            </tr>
                        )
                    })}
                    </thead>
                </table>
                <RellaxWrapper speed={14}>
                    <img
                        src={imgPath + img[1]}
                        alt="rocket"
                        className="rocket"
                    />
                </RellaxWrapper>
                <article>
                    <h3 className="features-subtitle">DESCRIPTION</h3>
                    <p className="features-text">
                        The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX
                        during
                        2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel
                        launch
                        vehicle to go into orbit around the Earth.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Feautures
