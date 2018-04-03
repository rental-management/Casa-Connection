import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Properties from './components/Properties/Properties';
import Service from './components/Service/Service';
import SingleProperty from './components/SingleProperty/SingleProperty';
import SplashLanding from './components/SplashLanding/SplashLanding';

export default (
    <Switch>
        <Route exact path="/" component={SplashLanding} />
        <Route path="/properties" component={Properties} />
        <Route path="/service" component={Service} />
        {/* <Route path="/property/:id" component={SingleProperty} /> */}
    </Switch>
);

