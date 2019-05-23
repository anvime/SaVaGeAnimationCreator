import React, { Component } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import { ChromePicker } from 'react-color';

class ActorsProperties extends Component {

    constructor(props){
        super(props);
        this.state = {
            actorType: "circle",
            circleDiameter: 20,
            squareSize: 20,
            positionX: 50,
            positionY: 50,
            color: '#fff'
        };
    }

    handleActorTypeChange =  event => {
        this.setState({ actorType: event.target.value });
    };

    handleDiameterChange = (event, circleDiameter) => {
    this.setState({ circleDiameter });
  };

    handleSquareSizeChange = (event, squareSize) => {
    this.setState({ squareSize });
  };

    handlePositionXChange = (event, positionX) => {
    this.setState({ positionX });
  };

    handlePositionYChange = (event, positionY) => {
    this.setState({ positionY });
  };

    handleColorChange = (color) => {
    this.setState({ color: color.hex });
  };

    render() {
    let typeOfSizePage;

    if(this.state.actorType == "circle"){
        typeOfSizePage = <div>
            <Typography id="label"><h1>Promień koła: {this.state.circleDiameter}</h1></Typography>
            <Slider
            id="sliders"
            value={this.state.circleDiameter}
            min={1}
            max={100}
            step={1}
            onChange={this.handleDiameterChange}
            />
        </div>
    } else {
       typeOfSizePage = <div>
            <Typography id="label"><h1>Rozmiar kwadratu: {this.state.squareSize}</h1></Typography>
            <Slider
            id="sliders"
            value={this.state.squareSize}
            min={1}
            max={100}
            step={1}
            onChange={this.handleSquareSizeChange}
            />
        </div>
    }

    return (
      <div id="parametersSetting">
          <h1 >{this.props.name}</h1>
          <div id={"parametersContent"}>

              <FormControl id="actorTypeDropdown">
          <InputLabel htmlFor="age-simple">Rodzaj aktora</InputLabel>
          <Select
            value={this.state.actorType}
            onChange={this.handleActorTypeChange}
          >
            <MenuItem value={"circle"}>koło</MenuItem>
            <MenuItem value={"square"}>kwadrat</MenuItem>

          </Select>

        </FormControl>

        {typeOfSizePage}

      <h1 id="label">Pozycja:</h1>
      <div>
            <Typography id="label"><h1>X: {this.state.positionX}</h1></Typography>
            <Slider
            id="sliders"
            value={this.state.positionX}
            min={1}
            max={100}
            step={1}
            onChange={this.handlePositionXChange}
            />
        </div>
        <div>
            <Typography id="label"><h1>Y: {this.state.positionY}</h1></Typography>
            <Slider
            id="sliders"
            value={this.state.positionY}
            min={1}
            max={100}
            step={1}
            onChange={this.handlePositionYChange}
            />
        </div>
        <h1 id="label">Kolor:</h1>
        <div id="colorPicker">
            <ChromePicker
            color={ this.state.color }
            onChangeComplete={ this.handleColorChange }
        />
        </div>
      </div>
      </div>
    );
  }
}

export default ActorsProperties;
