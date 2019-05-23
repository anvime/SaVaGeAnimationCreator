import React, { Component } from 'react';

import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Typography from "@material-ui/core/Typography/Typography";
import Slider from "@material-ui/lab/Slider/Slider";

class OperationsProperties extends Component {

    constructor(props){
        super(props);
        this.state = {
            operationType: "translation",
            pathType: "line",
            circlePathDirection: "clockwise",
            circlePathDiameter: 40,
            linePathDistance: 20,
            linePathAngle: 90,
            operationRotationDirection: "clockwise"

        };
    }

    handleOperationTypeChange =  event => {
        this.setState({ operationType: event.target.value });
    };

    handlePathTypeChange =  event => {
        this.setState({ pathType: event.target.value });
    };

    handleCirclePathChange =  event => {
        this.setState({ circlePathDirection: event.target.value });
    };

    handleCirclePathDiameterChange = (event, circlePathDiameter) => {
    this.setState({ circlePathDiameter });
  };

    handleLinePathDistanceChange = (event, linePathDistance) => {
    this.setState({ linePathDistance });
  };

    handleLinePathAngleChange = (event, linePathAngle) => {
    this.setState({ linePathAngle });
  };

    handleOperationRotationDirectionChange =  event => {
        this.setState({ operationRotationDirection: event.target.value });
    };

    render() {

    let operationTypePage;
    let patchPage;

    if(this.state.pathType=="line"){
        patchPage = <div>
            <div>
            <Typography id="label"><h1>Dystans: {this.state.linePathDistance}</h1></Typography>
            <Slider
            id="sliders"
            value={this.state.linePathDistance}
            min={1}
            max={100}
            step={1}
            onChange={this.handleLinePathDistanceChange}
            />
        </div>
        <div>
            <Typography id="label"><h1>Kąt nachylenia: {this.state.linePathAngle}</h1></Typography>
            <Slider
            id="sliders"
            value={this.state.linePathAngle}
            min={1}
            max={360}
            step={1}
            onChange={this.handleLinePathAngleChange}
            />
        </div>
        </div>
    } else{
        patchPage = <div>
            <FormControl id="actorTypeDropdown">
            <InputLabel htmlFor="age-simple">Kierunek</InputLabel>
            <Select
                value={this.state.circlePathDirection}
                onChange={this.handleCirclePathChange}
            >
                <MenuItem value={"clockwise"}>zgodnie z zegarem</MenuItem>
                <MenuItem value={"counterclockwise"}>przeciwnie do zegara</MenuItem>
            </Select>
            </FormControl>
            <div>
            <Typography id="label"><h1>Średnica ścieżki: {this.state.circlePathDiameter}</h1></Typography>
            <Slider
            id="sliders"
            value={this.state.circlePathDiameter}
            min={1}
            max={100}
            step={1}
            onChange={this.handleCirclePathDiameterChange}
            />
        </div>
        </div>
    }



    if(this.state.operationType == "translation") {
        operationTypePage = <div>
            <FormControl id="actorTypeDropdown">
            <InputLabel htmlFor="age-simple">Rodzaj ścieżki</InputLabel>
            <Select
                value={this.state.pathType}
                onChange={this.handlePathTypeChange}
            >
                <MenuItem value={"line"}>linia prosta</MenuItem>
                <MenuItem value={"circle"}>po okręgu</MenuItem>
            </Select>
            </FormControl>

            {patchPage}

        </div>
    } else {
       operationTypePage =  <div>
           <FormControl id="actorTypeDropdown">
            <InputLabel htmlFor="age-simple">Kierunek</InputLabel>
            <Select
                value={this.state.operationRotationDirection}
                onChange={this.handleOperationRotationDirectionChange}
            >
                <MenuItem value={"clockwise"}>zgodnie z zegarem</MenuItem>
                <MenuItem value={"counterclockwise"}>przeciwnie do zegara</MenuItem>
            </Select>
            </FormControl>
       </div>
    }

    return (
      <div id="parametersSetting">
          <h1 >{this.props.name}</h1>
          <div id={"parametersContent"}>

           <FormControl id="actorTypeDropdown">
            <InputLabel htmlFor="age-simple">Rodzaj operacji</InputLabel>
            <Select
                value={this.state.operationType}
                onChange={this.handleOperationTypeChange}
            >
                <MenuItem value={"translation"}>translacja</MenuItem>
                <MenuItem value={"rotation"}>rotacja</MenuItem>
            </Select>
            </FormControl>

            {operationTypePage}

          </div>
      </div>
    );
  }
}

export default OperationsProperties;