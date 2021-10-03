import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Article from './article/Article';


class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={Article} />
                </Switch>
            </Router>
        )
    }
}

export default Routes