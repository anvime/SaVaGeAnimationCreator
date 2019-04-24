import React, { Component } from 'react';
import Button from "@material-ui/core/Button/Button";
import './App.css';

import SvgView from "./pages/SvgView.js"
import SvgCodeLoader from "./pages/SvgCodeLoader.js"

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
        <div className="Header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <SvgCodeLoader loadSvg={this.handleSvgChange}/>
        <SvgView svg={this.state.svgCode}/>
      </div>
    );
  }
}

export default App;
