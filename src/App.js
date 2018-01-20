import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import Counter from './Counter'
import DefaultPropsComponent from './DefaultPropsComponent'
import Sidebar from "./Sidebar";

import routes from './routes'

class App extends Component {
    state = {
        isDrawerOpen: false,
    }

    drawerToggle = () => {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        })
    }

    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div>
                        <AppBar
                            title="My First App"
                            onLeftIconButtonClick={this.drawerToggle}
                        />

                        <Sidebar
                            isDrawerOpen={this.state.isDrawerOpen}
                            drawerToggle={this.drawerToggle}
                        />

                        {
                            routes.map(route => (
                                <Route path={route.path}
                                       component={route.component}
                                />
                            ))
                        }

                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
}

export default App