import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../pages/Home';
import About from './../pages/About';

const MainContent = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
        </Switch>
    </main>
)

export default MainContent;
