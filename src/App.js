import React, { Component } from 'react';
import Button from "@material-ui/core/Button/Button";
import Grid from '@material-ui/core/Grid';
import './App.css';
import './Navigation.css';

import SvgView from "./pages/SvgView.js"
import SvgCodeLoader from "./pages/SvgCodeLoader.js"
import Navigation from "./pages/Navigation.js"

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            svgCode:''
        };
    }

    handleSvgChange= (code) => {
        this.setState({
            svgCode: code});
    };


  render() {
    return (
      <div className="App">
          <Grid container direction="row" justify="space-around" alignItems="flex-start">
              <Grid item xs>
        <Navigation />
              </Grid>
              <Grid item xs>
                  <div id="parametersSetting">
                  <h1 >Ustawianie wartości</h1>
                  </div>
              </Grid>
              <Grid item xs={6}>
        <div className="mainPage">
            <SvgCodeLoader loadSvg={this.handleSvgChange}/>
            <SvgView svg={this.state.svgCode}/>
        </div>
              </Grid>
          </Grid>
      </div>
    );
  }
}

export default App;
