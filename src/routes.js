import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Error from './pages/Error';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route exact path="/movie/:id" component={Movie} />
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;