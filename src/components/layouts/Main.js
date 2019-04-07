import React from 'react';
import { Switch, Route } from 'react-router-dom';

// imported components
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Data from '../pages/Data';
import Partials from '../pages/Partials';
import RandomUsers from '../api/RandomUsers';
import PersonList from '../api/PersonList';

class Main extends React.Component {
    render() {
        return (
            <div>
                Main
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/data" component={Data} />
                    <Route path="/partials" component={Partials} />
                    <Route path="/randomusers" component={RandomUsers} />
                    <Route path="/personlist" component={PersonList} />
                </Switch>

            </div>
        )
    }

}

export default Main;