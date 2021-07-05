import React from 'react';
import { Switch,Route, Redirect } from 'react-router-dom';
import { Navigation } from './Navigation';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';

export const Layout:React.FC = () => {
    return(<>
        <Navigation/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about/:sectionId">
                    <About/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/contact-old">
                    <Redirect to="/contact" />
                </Route>
            </Switch>
        </>
    );
}