import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Home from "./Components/Home/Home";
import Feautures from "./Components/Feautures/Feautures";
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";
import Calendar from "./Components/Calendar/Calendar";
import FetchData from "./Components/services/getdata";

class App extends Component{
    fetchData = new FetchData();

    state = {
        title: 'Falcon 1',
        rocketFeatures: null,
        rockets: [],
        company: null,
        links: null,
    }

    rocketContent = {
        'Falcon 1': ['earth.mp4', 'falcon-1.png'],
        'Falcon 9': ['mars.mp4', 'falcon-9.png'],
        'Falcon Heavy': ['moon.mp4', 'falcon-heavy.png'],
        'Starship': ['space.mp4', 'starship.png']
    }

    componentDidMount() {
        this.updateRocket()
        this.updateCompany()
    }

    updateRocket() {
        this.fetchData.getRocket()
            .then(data => {
                // eslint-disable-next-line array-callback-return
                data.find(item => {
                    if (item.name === this.state.title) this.setState({rocketFeatures: item})
                })
                this.setState({rockets: data.map(elem => elem.name)})
            })
    }

    updateCompany() {
        this.fetchData.getCompany()
            .then(data => {
                this.setState({company: data})
                this.setState({links: data.links})
            })
    }

    changeRocket = rocket => {
        this.setState({title: rocket}, this.updateRocket)
    }

    render() {
        return (
            <BrowserRouter>
                <Header rockets = {this.state.rockets} change = {this.changeRocket} state = {this.state}/>
                <Route exact path='/'>
                    {this.state.company && <Home company={this.state.company}/>}
                </Route>
                <Route path='/rocket'>
                    <Main title = {this.state.title} content = {this.rocketContent}/>
                    {this.state.rocketFeatures && <Feautures property={this.state} content = {this.rocketContent}/>}
                </Route>
                <Route path='/calendar' component={Calendar}/>
                <Route path='/details/:id' component={Details}/>
                {this.state.links && <Footer {...this.state.links} />}
            </BrowserRouter>
        );
    }
}

export default App;
