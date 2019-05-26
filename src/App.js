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
            actorsParameters: [["circle",20,20,50,50,'#fff'],["square",30,30,60,40,'#fff'],["circle",20,20,30,30,'#fff']],
            operationsParameters: [["translation","line","clockwise",40,20,90,"clockwise"],["translation","line","clockwise",30,40,0,"clockwise"],["translation","line","clockwise",35,50,45,"clockwise"]],
            scenarioParameters: [[2,0,20,0,[],[]],[5,0,20,0,[],[]],[6,0,20,0,[],[]]],
            name: "Actor1",
            selectedParameters: ["circle",20,20,50,50,'#fff'],
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
            (() => { this.updateName(idx)})();
            (() => { console.log(this.state.selectedItemIndex) })();
            }
        )
    }

    selectParameters = (name, idx) => {
        if(name == 'actors'){
            this.setState({selectedParameters: this.state.actorsParameters[idx]});
        } else if(name == 'operations'){
            this.setState({selectedParameters: this.state.operationsParameters[idx]});
        } else {
            this.setState({selectedParameters: this.state.scenarioParameters[idx]});
        }
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

    updateActorsList = (newActList,idx) => {
        if(idx == -1){
            let newActorParameters = new Array("circle",20,20,50,50,'#fff');
            this.setState(prevState => ({
                actorsParameters: [...prevState.actorsParameters, newActorParameters]
            }))
        } else {
            let helper = [...this.state.actorsParameters];
            helper.splice(idx, 1);
            this.setState({actorsParameters: helper});
        }
        this.setState({actorsList: newActList});
        }

    updateOperationsList = (newOpList,idx) => {
        if(idx == -1){
            let newOperationsParameters = new Array("translation","line","clockwise",40,20,90,"clockwise");
            this.setState(prevState => ({
                operationsParameters: [...prevState.operationsParameters, newOperationsParameters]
            }))
        } else {
            let helper = [...this.state.operationsParameters];
            helper.splice(idx, 1);
            this.setState({operationsParameters: helper});
        }
        this.setState({operationsList: newOpList});
    }

    updateScenarioList = (newScenList,idx) => {
        if(idx == -1){
            let newScenarioParameters = new Array(2,0,20,0,[],[]);
            this.setState(prevState => ({
                scenarioParameters: [...prevState.scenarioParameters, newScenarioParameters]
            }))
        } else {
            let helper = [...this.state.scenarioParameters];
            helper.splice(idx, 1);
            this.setState({scenarioParameters: helper});
        }
        this.setState({scenarioList: newScenList});
    }

    // Funkcje wykorzystywane przez klay Properties, nwm jak je przenieść do osobnego pliku..

    //ACTORS
    handleActorTypeChange = (newType) => {
        let helperOne = [...this.state.actorsParameters[this.state.selectedItemIndex]];

        helperOne[0] = newType;

      const list = this.state.actorsParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({actorsParameters: list}, ()=>{this.selectParameters("actors",this.state.selectedItemIndex)});
    }

    handleActorCircleDiameterChange = (newDiameter) => {
        let helperOne = [...this.state.actorsParameters[this.state.selectedItemIndex]];

        helperOne[1] = newDiameter;

      const list = this.state.actorsParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({actorsParameters: list}, ()=>{this.selectParameters("actors",this.state.selectedItemIndex)});
    }

    handleActorSquareSizeChange = (newSquareSize) => {
        let helperOne = [...this.state.actorsParameters[this.state.selectedItemIndex]];

        helperOne[2] = newSquareSize;

      const list = this.state.actorsParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({actorsParameters: list}, ()=>{this.selectParameters("actors",this.state.selectedItemIndex)});
    }

    handleActorXChange = (newX) => {
        let helperOne = [...this.state.actorsParameters[this.state.selectedItemIndex]];

        helperOne[3] = newX;

      const list = this.state.actorsParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({actorsParameters: list}, ()=>{this.selectParameters("actors",this.state.selectedItemIndex)});
    }

    handleActorYChange = (newY) => {
        let helperOne = [...this.state.actorsParameters[this.state.selectedItemIndex]];

        helperOne[4] = newY;

      const list = this.state.actorsParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({actorsParameters: list}, ()=>{this.selectParameters("actors",this.state.selectedItemIndex)});
    }

    handleActorColorChange = (newActorColor) => {
        let helperOne = [...this.state.actorsParameters[this.state.selectedItemIndex]];

        helperOne[5] = newActorColor;

      const list = this.state.actorsParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({actorsParameters: list}, ()=>{this.selectParameters("actors",this.state.selectedItemIndex)});
    }

    //OPERATIONS

    handleOperationOperationTypeChange = (newOperationType) => {
        let helperOne = [...this.state.operationsParameters[this.state.selectedItemIndex]];

        helperOne[0] = newOperationType;

      const list = this.state.operationsParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({operationsParameters: list}, ()=>{this.selectParameters("operations",this.state.selectedItemIndex)});
    }

    handleOperationPathTypeChange = (newPathType) => {
        let helperOne = [...this.state.operationsParameters[this.state.selectedItemIndex]];

        helperOne[1] = newPathType;

      const list = this.state.operationsParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({operationsParameters: list}, ()=>{this.selectParameters("operations",this.state.selectedItemIndex)});
    }

    handleOperationCirclePathDirectionChange = (newCirclePathDirection) => {
        let helperOne = [...this.state.operationsParameters[this.state.selectedItemIndex]];

        helperOne[2] = newCirclePathDirection;

      const list = this.state.operationsParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({operationsParameters: list}, ()=>{this.selectParameters("operations",this.state.selectedItemIndex)});
    }

    handleOperationCirclePathDiameterChange = (newCirclePathDiameter) => {
        let helperOne = [...this.state.operationsParameters[this.state.selectedItemIndex]];

        helperOne[3] = newCirclePathDiameter;

      const list = this.state.operationsParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({operationsParameters: list}, ()=>{this.selectParameters("operations",this.state.selectedItemIndex)});
    }

    handleOperationLinePathDistanceChange = (newLinePathDistance) => {
        let helperOne = [...this.state.operationsParameters[this.state.selectedItemIndex]];

        helperOne[4] = newLinePathDistance;

      const list = this.state.operationsParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({operationsParameters: list}, ()=>{this.selectParameters("operations",this.state.selectedItemIndex)});
    }

    handleOperationLinePathAngleChange = (newLinePathAngle) => {
        let helperOne = [...this.state.operationsParameters[this.state.selectedItemIndex]];

        helperOne[5] = newLinePathAngle;

      const list = this.state.operationsParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({operationsParameters: list}, ()=>{this.selectParameters("operations",this.state.selectedItemIndex)});
    }

    handleOperationOperationRotationDirectionChange = (newOperationRotationDirection) => {
        let helperOne = [...this.state.operationsParameters[this.state.selectedItemIndex]];

        helperOne[6] = newOperationRotationDirection;

      const list = this.state.operationsParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({operationsParameters: list}, ()=>{this.selectParameters("operations",this.state.selectedItemIndex)});
    }

    //SCENARIO

    handleScenarioDurationTimeChange = (DurationTime) => {
        let helperOne = [...this.state.scenarioParameters[this.state.selectedItemIndex]];

        helperOne[0] = DurationTime;

      const list = this.state.scenarioParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({scenarioParameters: list}, ()=>{this.selectParameters("scenario",this.state.selectedItemIndex)});
    }

    handleScenarioStartAfterChange = (StartAfter) => {
        let helperOne = [...this.state.scenarioParameters[this.state.selectedItemIndex]];

        helperOne[1] = StartAfter;

      const list = this.state.scenarioParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({scenarioParameters: list}, ()=>{this.selectParameters("scenario",this.state.selectedItemIndex)});
    }

    handleScenarioNumOfRepeatsChange = (NumOfRepeats) => {
        let helperOne = [...this.state.scenarioParameters[this.state.selectedItemIndex]];

        helperOne[2] = NumOfRepeats;

      const list = this.state.scenarioParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({scenarioParameters: list}, ()=>{this.selectParameters("scenario",this.state.selectedItemIndex)});
    }

    handleScenarioRepeatDelayChange = (RepeatDelay) => {
        let helperOne = [...this.state.scenarioParameters[this.state.selectedItemIndex]];

        helperOne[3] = RepeatDelay;

      const list = this.state.scenarioParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({scenarioParameters: list}, ()=>{this.selectParameters("scenario",this.state.selectedItemIndex)});
    }

    handleScenarioSelectedActorsChange = (SelectedActors) => {
        let helperOne = [...this.state.scenarioParameters[this.state.selectedItemIndex]];

        helperOne[4] = SelectedActors;

      const list = this.state.scenarioParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({scenarioParameters: list}, ()=>{this.selectParameters("scenario",this.state.selectedItemIndex)});
    }

    handleScenarioSelectedOperationsChange = (SelectedOperations) => {
        let helperOne = [...this.state.scenarioParameters[this.state.selectedItemIndex]];

        helperOne[5] = SelectedOperations;

      const list = this.state.scenarioParameters.map((item, j) => {
        if (j === this.state.selectedItemIndex) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({scenarioParameters: list}, ()=>{this.selectParameters("scenario",this.state.selectedItemIndex)});
    }

//koniec funcji do klas properties

  render() {
    let proertiesPage;

    if(this.state.navIndex == "actors"){
        proertiesPage = <ActorsProperties name={this.state.name} parameters={this.state.selectedParameters} handleActorTypeChange={this.handleActorTypeChange} handleActorCircleDiameterChange={this.handleActorCircleDiameterChange} handleActorSquareSizeChange={this.handleActorSquareSizeChange} handleActorXChange={this.handleActorXChange} handleActorYChange={this.handleActorYChange} handleActorColorChange={this.handleActorColorChange}/>
    } else if (this.state.navIndex == "operations") {
        proertiesPage = <OperationsProperties  name={this.state.name} parameters={this.state.selectedParameters} handleOperationOperationTypeChange={this.handleOperationOperationTypeChange} handleOperationPathTypeChange={this.handleOperationPathTypeChange} handleOperationCirclePathDirectionChange={this.handleOperationCirclePathDirectionChange} handleOperationCirclePathDiameterChange={this.handleOperationCirclePathDiameterChange} handleOperationLinePathDistanceChange={this.handleOperationLinePathDistanceChange} handleOperationLinePathAngleChange={this.handleOperationLinePathAngleChange} handleOperationOperationRotationDirectionChange={this.handleOperationOperationRotationDirectionChange}/>
    } else {
        proertiesPage = <ScenarioProperties name={this.state.name} operationsList={this.state.operationsList} actorsList={this.state.actorsList} parameters={this.state.selectedParameters} handleScenarioDurationTimeChange={this.handleScenarioDurationTimeChange} handleScenarioStartAfterChange={this.handleScenarioStartAfterChange} handleScenarioNumOfRepeatsChange={this.handleScenarioNumOfRepeatsChange} handleScenarioRepeatDelayChange={this.handleScenarioRepeatDelayChange} handleScenarioSelectedActorsChange={this.handleScenarioSelectedActorsChange} handleScenarioSelectedOperationsChange={this.handleScenarioSelectedOperationsChange}/>
    }

    return (
      <div className="App">
          <Grid container direction="row" justify="space-around" alignItems="flex-start">
              <Grid item xs>
        <Navigation navIndex={this.state.navIndex} handleNavIndexChange={this.handleNavIndexChange} updateSelectedItemIndex={this.updateSelectedItemIndex} updateActorsList={this.updateActorsList} updateOperationsList={this.updateOperationsList} updateScenarioList={this.updateScenarioList} selectParameters={this.selectParameters}/>
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
