import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import {
    Main,
    Search,
    BookDetail,
    NoMatch
} from './containers'

import {
    Header,
    Footer
} from './components'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

import {
    colorRed,
    colorBlue,
    colorGray,
    colorTextDefault,
    colorWhite,
    colorDarkGray
} from './constants/colors'

import './assets/styles/App.css'

injectTapEventPlugin()
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: colorRed,
        primary2Color: colorBlue,
        primary3Color: colorGray,
        textColor: colorTextDefault,
        alternateTextColor: colorWhite,
        borderColor: colorDarkGray
    }
})

class BooksApp extends Component {

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
            <Router>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Switch>
                        <DashboardRoute exact path="/" component={Main} />
                        <DashboardRoute exact path="/:bookId" component={BookDetail} />
                        <DashboardRoute exact path="buscar" component={Search} />

                        <Route component={NoMatch} />
                    </Switch>
                </MuiThemeProvider>
            </Router>
        )
    }
}

export default BooksApp