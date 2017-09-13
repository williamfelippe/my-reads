/**
 * 
 */
import React, { Component } from 'react'

/**
 * 
 */
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

/**
 * 
 */
import {
    Main,
    Search,
    BookDetail,
    NoMatch
} from './containers'

/**
 * 
 */
import {
    Header,
    Footer
} from './components'

import './assets/styles/App.css'

class BooksApp extends Component {

    /**
     * 
     * 
     * @param {any} prevProps 
     * @memberof BooksApp
     */
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        
        const DashboardRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={props => (
                <div className="app">
                    <Header />

                    <main>
                        <Component {...props} />
                    </main>

                    <Footer />
                </div>
            )} />
        )

        return (
            /**
             * 
             */
            <Router>
                <Switch>
                    <DashboardRoute exact path="/" component={Main} />
                    <DashboardRoute exact path="/:bookId" component={BookDetail} />
                    <DashboardRoute exact path="buscar" component={Search} />

                    <Route component={NoMatch} />
                </Switch>
            </Router>
        )
    }
}

export default BooksApp