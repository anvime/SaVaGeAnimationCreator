import React, { Component } from 'react';
import Button from "@material-ui/core/Button/Button";
import Grid from '@material-ui/core/Grid';
import './App.css';
import './Navigation.css';
import './Properties.css';

import SvgView from "./pages/SvgView.js"
import SvgCodeLoader from "./pages/SvgCodeLoader.js"
import Navigation from "./pages/Navigation.js"
import ActorsProperties from "./pages/ActorsProperties.js"
import OperationsProperties from "./pages/OperationsProperties.js"
import ScenarioProperties from "./pages/ScenarioProperties.js"

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            svgCode:'',
            navIndex: "actors",
            selectedItemIndex: 0,
            actorsList: ["Actor1", "Actor2", "Actor3"],
            operationsList: ["Rotate1", "Rotate2", "Move1"],
            scenarioList: ["Scenario1"],
            name: "Actor1"
        };

    }

    handleSvgChange= (code) => {
        this.setState({
            svgCode: code});
    };

    handleNavIndexChange = (name) => {
        if(name == 'actors'){
            this.setState({navIndex: "actors"});
        } else if(name == 'operations'){
            this.setState({navIndex: "operations"});
        } else {
            this.setState({navIndex: "scenario"});
        }

    }

    updateSelectedItemIndex = (idx) => {
        this.setState({selectedItemIndex: idx}, ()=>{
            (() => {  this.updateName(idx)})();
            (() => { console.log(this.state.selectedItemIndex) })();
            }
        )
    }

    updateName = (idx) => {
        if (this.state.navIndex=="actors"){
            this.setState({name: this.state.actorsList[idx]})
        } else if (this.state.navIndex=="operations"){
            this.setState({name: this.state.operationsList[idx]})
        } else {
            this.setState({name: this.state.scenarioList[idx]})
        }
    }

    updateActorsList = (newActList) => {
        this.setState({actorsList: newActList});
    }

    updateOperationsList = (newOpList) => {
        this.setState({operationsList: newOpList});
    }

    updateScenarioList = (newScenList) => {
        this.setState({scenarioList: newScenList});
    }


  render() {
    let proertiesPage;

    if(this.state.navIndex == "actors"){
        proertiesPage = <ActorsProperties name={this.state.name}/>
    } else if (this.state.navIndex == "operations") {
        proertiesPage = <OperationsProperties  name={this.state.name}/>
    } else {
        proertiesPage = <ScenarioProperties name={this.state.name} operationsList={this.state.operationsList} actorsList={this.state.actorsList}/>
    }

    return (
      <div className="App">
          <Grid container direction="row" justify="space-around" alignItems="flex-start">
              <Grid item xs>
        <Navigation navIndex={this.state.navIndex} handleNavIndexChange={this.handleNavIndexChange} updateSelectedItemIndex={this.updateSelectedItemIndex} updateActorsList={this.updateActorsList} updateOperationsList={this.updateOperationsList} updateScenarioList={this.updateScenarioList}/>
              </Grid>
              <Grid item xs>
                  {proertiesPage}
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
