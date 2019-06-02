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
            operationType: this.props.parameters[0],
            pathType: this.props.parameters[1],
            circlePathDirection: this.props.parameters[2],
            circlePathDiameter: this.props.parameters[3],
            linePathDistance: this.props.parameters[4],
            linePathAngle: this.props.parameters[5],
            operationRotationDirection: this.props.parameters[6]

        };
    }

    handleOperationTypeChange =  event => {
        this.props.handleOperationOperationTypeChange(event.target.value);
    };

    handlePathTypeChange =  event => {
        this.props.handleOperationPathTypeChange(event.target.value);
    };

    handleCirclePathChange =  event => {
        this.props.handleOperationCirclePathDirectionChange(event.target.value);
    };

    handleCirclePathDiameterChange = (event, circlePathDiameter) => {
        this.props.handleOperationCirclePathDiameterChange(circlePathDiameter);
  };

    handleLinePathDistanceChange = (event, linePathDistance) => {
        this.props.handleOperationLinePathDistanceChange(linePathDistance);
  };

    handleLinePathAngleChange = (event, linePathAngle) => {
        this.props.handleOperationLinePathAngleChange(linePathAngle);
  };

    handleOperationRotationDirectionChange =  event => {
        this.props.handleOperationOperationRotationDirectionChange(event.target.value);
    };

    render() {

    let operationTypePage;
    let patchPage;

    if(this.props.parameters[1]=="line"){
        patchPage = <div>
            <div>
            <Typography id="label"><h1>Dystans: {this.props.parameters[4]}</h1></Typography>
            <Slider
            id="sliders"
            value={this.props.parameters[4]}
            min={1}
            max={100}
            step={1}
            onChange={this.handleLinePathDistanceChange}
            />
        </div>
        <div>
            <Typography id="label"><h1>Kąt nachylenia: {this.props.parameters[5]}</h1></Typography>
            <Slider
            id="sliders"
            value={this.props.parameters[5]}
            min={0}
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
                value={this.props.parameters[2]}
                onChange={this.handleCirclePathChange}
            >
                <MenuItem value={"clockwise"}>zgodnie z zegarem</MenuItem>
                <MenuItem value={"counterclockwise"}>przeciwnie do zegara</MenuItem>
            </Select>
            </FormControl>
            <div>
            <Typography id="label"><h1>Średnica ścieżki: {this.props.parameters[3]}</h1></Typography>
            <Slider
            id="sliders"
            value={this.props.parameters[3]}
            min={1}
            max={100}
            step={1}
            onChange={this.handleCirclePathDiameterChange}
            />
        </div>
        </div>
    }



    if(this.props.parameters[0] == "translation") {
        operationTypePage = <div>
            <FormControl id="actorTypeDropdown">
            <InputLabel htmlFor="age-simple">Rodzaj ścieżki</InputLabel>
            <Select
                value={this.props.parameters[1]}
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
                value={this.props.parameters[6]}
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
                value={this.props.parameters[0]}
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