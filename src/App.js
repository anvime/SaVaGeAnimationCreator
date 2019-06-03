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
import SaveIntoProgramm from "./pages/SaveIntoProgramm.js"

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            nameOfSvg: "PrzykładSvg",
            svgCode:'',
            svgActorsCode: '',
            svgOperationsAndScenariosCode: '',
            navIndex: "actors",
            selectedItemIndex: 0,
            actorsList: ["Actor1", "Actor2", "Actor3"],
            operationsList: ["Operation1", "Operation2", "Operation3"],
            scenarioList: ["Scenario1"],
            actorsParameters: [["circle",20,20,50,50,'#d53904'],["square",30,30,60,40,'#e07fb2'],["circle",20,20,30,30,'#a2127a']],
            operationsParameters: [["translation","line","clockwise",40,20,90,"clockwise"],["translation","line","clockwise",30,40,0,"clockwise"],["translation","line","clockwise",35,50,45,"clockwise"]],
            scenarioParameters: [[2,0,20,0,[],[]],[5,0,20,0,[],[]],[6,0,20,0,[],[]]],
            name: "Actor1",
            selectedParameters: ["circle",20,20,50,50,'#fff'],
        };
    }

    componentDidMount(){
        this.buildSvg();
        this.joinSvgCode();
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (this.state.actorsParameters !== prevState.actorsParameters) {
                this.buildSvg();
            }
        if (this.state.operationsParameters !== prevState.operationsParameters) {
               this.buildSvgOperationsAndScenarios();
            }
        if (this.state.scenarioParameters !== prevState.scenarioParameters) {
                this.buildSvgOperationsAndScenarios();
            }

        if (this.state.svgActorsCode !== prevState.svgActorsCode) {
                console.log(prevState.svgCode);
                this.joinSvgCode();
            }



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

    //Tworzenie kodu SVG
    joinSvgCode = () => {
        let joinedSvg = "<?xml version=\"1.0\"?>\n" +
            "\n" +
            "<svg width=\"500px\" height=\"500px\">";

        joinedSvg += this.state.svgActorsCode;
        joinedSvg += this.state.svgOperationsAndScenariosCode;

        joinedSvg +=
                "\n" +
                "</svg>";

        this.setState({
            svgCode: joinedSvg}, () => console.log(this.state.svgCode));
    }

    buildSvg = () => {
        let svgString =  '';
        for (let i=0; i<this.state.actorsParameters.length; i++){

            if(this.state.actorsParameters[i][0] == "square"){
                svgString += "<rect id=\"" + this.state.actorsList[i] + "\" x=\"" + this.state.actorsParameters[i][3] +
                "\" y=\"" + this.state.actorsParameters[i][4] + "\" width=\"" + this.state.actorsParameters[i][2] +
                "\" height=\"" + this.state.actorsParameters[i][2] + "\" fill=\"" + this.state.actorsParameters[i][5] + "\">\n" +
                "</rect>       \n" ;
            } else {
                svgString += "<circle  id=\"" + this.state.actorsList[i] + "\" cx=\"" + this.state.actorsParameters[i][3] +
                "\" cy=\"" + this.state.actorsParameters[i][4] + "\" r=\"" + this.state.actorsParameters[i][1] + "\" fill=\"" +
                    this.state.actorsParameters[i][5] + "\">\n" +
                "</circle >       \n" ;
            }

        }

        this.setState({
            svgActorsCode: svgString}, ()=> {this.buildSvgOperationsAndScenarios()});
    }

    buildSvgOperationsAndScenarios = () => {
        let svgString =  '';

        for (let i=0; i<this.state.scenarioParameters.length; i++){
            for (let j=0; j<this.state.scenarioParameters[i][4].length; j++){ //actors
                for (let k=0; k<this.state.scenarioParameters[i][5].length; k++){ //operations
                    let xlinearTranslation;
                    let ylinearTranslation;
                    let timeOfBegginings = '';
                    let timeOfBegginings2 = '';
                    let currOperationIndex=this.state.operationsList.indexOf(this.state.scenarioParameters[i][5][k]);
                    let currActorIndex=this.state.actorsList.indexOf(this.state.scenarioParameters[i][4][j]);
                    let typeOfX;
                    let typeOfY;
                    let scenarioOperationId1 = "scenarioOperation1"+  this.state.actorsList[currActorIndex] + this.state.operationsList[currOperationIndex];
                    let scenarioOperationId2 = "scenarioOperation2"+  this.state.actorsList[currActorIndex] + this.state.operationsList[currOperationIndex];


                    if(this.state.actorsParameters[currActorIndex][0] == 'circle'){
                        typeOfX = "cx";
                        typeOfY = "cy";
                    } else {
                        typeOfX = "x";
                        typeOfY = "y";
                    }

                    timeOfBegginings += this.state.scenarioParameters[i][1].toString() + "s;";
                    timeOfBegginings2 += this.state.scenarioParameters[i][1].toString() + "s;";
                    if(this.state.scenarioParameters[i][2] < 30){
                        for(let m=1; m<this.state.scenarioParameters[i][2] ;m++){
                            timeOfBegginings += (this.state.scenarioParameters[i][1] + m*(this.state.scenarioParameters[i][3] + this.state.scenarioParameters[i][0])).toString() + "s;";
                            timeOfBegginings2 += (this.state.scenarioParameters[i][1] + m*(this.state.scenarioParameters[i][3] + this.state.scenarioParameters[i][0])).toString() + "s;";
                        }
                    } else {
                        timeOfBegginings += scenarioOperationId1 + ".end+" + this.state.scenarioParameters[i][3].toString() + "s";
                        timeOfBegginings2 += scenarioOperationId2 + ".end+" + this.state.scenarioParameters[i][3].toString() + "s";
                    }



                    if(this.state.operationsParameters[currOperationIndex][0]=="translation" && this.state.operationsParameters[currOperationIndex][1] =="line"){
                        ylinearTranslation = (this.state.actorsParameters[currActorIndex][4] + this.state.operationsParameters[currOperationIndex][4] * Math.sin(this.state.operationsParameters[currOperationIndex][5]*Math.PI/180)).toString();
                        xlinearTranslation = (this.state.actorsParameters[currActorIndex][3] + this.state.operationsParameters[currOperationIndex][4] * Math.cos(this.state.operationsParameters[currOperationIndex][5]*Math.PI/180)).toString();

                        svgString += "<animate \n" + "           id=\"" + scenarioOperationId1 + "\"\n"  +
                            "           xlink:href=\"#" + this.state.scenarioParameters[i][4][j] + "\"\n" +
                            "           attributeName=\"" + typeOfX + "\" \n" +
                            "           from=\"" + this.state.actorsParameters[currActorIndex][3] + "\"\n" +
                            "           to=\"" + xlinearTranslation + "\" \n" +
                            "           dur=\"" + this.state.scenarioParameters[i][0].toString() + "s\"\n" +
                            "           begin=\"" + timeOfBegginings + "\"\n" +
                            "           fill=\"freeze\" \n" +
                            "           /> \n";

                        svgString += "<animate \n" + "           id=\"" + scenarioOperationId2 + "\"\n"  +
                            "           xlink:href=\"#" + this.state.scenarioParameters[i][4][j] + "\"\n" +
                            "           attributeName=\"" + typeOfY + "\" \n" +
                            "           from=\"" + this.state.actorsParameters[currActorIndex][4] + "\"\n" +
                            "           to=\"" + ylinearTranslation + "\" \n" +
                            "           dur=\"" + this.state.scenarioParameters[i][0].toString() + "s\"\n" +
                            "           begin=\"" + timeOfBegginings2 + "\"\n" +
                            "           fill=\"freeze\" \n" +
                            "           /> \n";

                    } else if (this.state.operationsParameters[currOperationIndex][0]=="translation" && this.state.operationsParameters[currOperationIndex][1] =="circle"){

                        let motionPathId = "motionPath"+  this.state.actorsList[currActorIndex] + this.state.operationsList[currOperationIndex];
                        let rotationDirection;

                        if(this.state.operationsParameters[currOperationIndex][2]=="clockwise"){
                            rotationDirection = "1";
                        } else {
                            rotationDirection = "0";
                        }

                        svgString += "<path id=\"" + motionPathId + "\" fill=\"none\" d=\"\n" +
                            "        M 0,0\n" +
                            "        m " + (-1 * this.state.operationsParameters[currOperationIndex][3]).toString() + ", 0\n" +
                            "        a " + this.state.operationsParameters[currOperationIndex][3].toString() + "," +
                        this.state.operationsParameters[currOperationIndex][3].toString() + " 0 1," + rotationDirection + " " +
                            (2*this.state.operationsParameters[currOperationIndex][3]).toString() + ",0\n" +
                            "        a " + this.state.operationsParameters[currOperationIndex][3].toString() + "," +
                        this.state.operationsParameters[currOperationIndex][3].toString() + " 0 1," + rotationDirection + " " +
                            (-2*this.state.operationsParameters[currOperationIndex][3]).toString() + ",0\n" + "\n" +
                            "        \"/>";

                        svgString += "<animateMotion  \n" + "           id=\"" + scenarioOperationId1 + "\"\n"  +
                        "           xlink:href=\"#" + this.state.scenarioParameters[i][4][j] + "\"\n" +
                        "           dur=\"" + this.state.scenarioParameters[i][0].toString() + "s\"\n" +
                        "           begin=\"" + timeOfBegginings + "\"\n" +
                        "           fill=\"freeze\"> \n" + "\n" + "    <mpath xlink:href=\"#" + motionPathId + "\" />" +
                        "           </animateMotion> \n";
                    } else if (this.state.operationsParameters[currOperationIndex][0]=="rotation"){
                        let centerOfRotationX;
                        let centerOfRotationY;
                        let centerString;
                        let direction;

                        if(this.state.actorsParameters[currActorIndex][0] == 'circle'){
                            continue;
                        } else {
                            centerOfRotationX = this.state.actorsParameters[currActorIndex][3] + this.state.actorsParameters[currActorIndex][1]/2;
                            centerOfRotationY = this.state.actorsParameters[currActorIndex][4] + this.state.actorsParameters[currActorIndex][1]/2;
                            centerString = centerOfRotationX.toString() + " " + centerOfRotationY.toString();
                        }

                        if(this.state.operationsParameters[currOperationIndex][6]=="clockwise"){
                            direction="360 ";
                        } else {
                            direction="-360 ";
                        }

                        svgString += "<animateTransform xlink:href=\"#" + this.state.scenarioParameters[i][4][j] + "\" \n" +
                            "           id=\"" + scenarioOperationId1 + "\"\n"  +
                            "           attributeName=\"transform\"\n" +
                            "           attributeType=\"XML\"\n" +
                            "           type=\"rotate\"\n" +
                            "           from=\"0 " + centerString + "\"\n" +
                            "           to=\"" + direction + centerString + "\"\n" +
                            "           dur=\"" + this.state.scenarioParameters[i][0].toString() + "s\"\n" +
                            "           begin=\"" + timeOfBegginings +"\"/>";

                    }

        }
        }
        }
        this.setState({
            svgOperationsAndScenariosCode: svgString}, () => this.joinSvgCode());

    }

    //Koniec tworzenia kodu SVG

    //Wczytywanie danych kodu svg
    loadSvgData = (actList, opList, scenList, actParam, opParam, scenParam) => {

        this.setState({navIndex: "actors",
        selectedItemIndex: 0,
        actorsList: actList,
        operationsList: opList,
        scenarioList: scenList,
        actorsParameters: actParam,
        operationsParameters: opParam,
        scenarioParameters: scenParam,
        name: actList[0],
        selectedParameters: actParam[0]}, () => {this.buildSvg()});

    }

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
            <SaveIntoProgramm loadSvgData={this.loadSvgData} actorsList={this.state.actorsList} operationsList={this.state.operationsList} scenarioList={this.state.scenarioList} actorsParameters={this.state.actorsParameters} operationsParameters={this.state.operationsParameters} scenarioParameters={this.state.scenarioParameters} />
            <SvgView svg={this.state.svgCode}/>
            <SvgCodeLoader loadSvg={this.handleSvgChange}/>
            </div>
              </Grid>
          </Grid>
      </div>
    );
  }
}

export default App;
