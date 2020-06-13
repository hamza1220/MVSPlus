import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, createMuiTheme, responsiveFontSizes } from "@material-ui/core";

import Navbar from './components/navbar/navbar'
import Home from './pages/home/Home';
import Movie from './pages/movie/Movie'
import Search from './pages/search/Search'
import ScrollToTop from './components/scrollToTop/scrollToTop'

import './App.css';

let theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#141414"
    }
  },
  typography: {
    fontFamily: "Netflix Sans, Roboto, sans-serif",
  }
});
theme = responsiveFontSizes(theme)

class App extends Component {
  render() {
    const App = () => (
      <ThemeProvider theme={theme}>
        <ScrollToTop/>
        <CssBaseline />
        <div className = "App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Movie/:id' component={Movie} />
            <Route path='/Search' component={Search} />
          </Switch>
        </div>
      </ThemeProvider>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;