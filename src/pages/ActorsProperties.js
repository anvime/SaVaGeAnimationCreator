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
            actorType: this.props.parameters[0],
            circleDiameter: this.props.parameters[1],
            squareSize: this.props.parameters[2],
            positionX: this.props.parameters[3],
            positionY: this.props.parameters[4],
            color: this.props.parameters[5]
        };
    }

    handleActorTypeChange =  event => {
        this.props.handleActorTypeChange(event.target.value);
    };

    handleDiameterChange = (event, circleDiameter) => {
        this.props.handleActorCircleDiameterChange(circleDiameter);
  };

    handleSquareSizeChange = (event, squareSize) => {
        this.props.handleActorSquareSizeChange(squareSize);
  };

    handlePositionXChange = (event, positionX) => {
        this.props.handleActorXChange(positionX);
  };

    handlePositionYChange = (event, positionY) => {
        this.props.handleActorYChange(positionY);
  };

    handleColorChange = (color) => {
        this.props.handleActorColorChange(color.hex);
  };

    render() {
    let typeOfSizePage;

    if(this.props.parameters[0] == "circle"){
        typeOfSizePage = <div>
            <Typography id="label"><h1>Promień koła: {this.props.parameters[1]}</h1></Typography>
            <Slider
            id="sliders"
            value={this.props.parameters[1]}
            min={1}
            max={500}
            step={1}
            onChange={this.handleDiameterChange}
            />
        </div>
    } else {
       typeOfSizePage = <div>
            <Typography id="label"><h1>Rozmiar kwadratu: {this.props.parameters[2]}</h1></Typography>
            <Slider
            id="sliders"
            value={this.props.parameters[2]}
            min={1}
            max={500}
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
            value={this.props.parameters[0]}
            onChange={this.handleActorTypeChange}
          >
            <MenuItem value={"circle"}>koło</MenuItem>
            <MenuItem value={"square"}>kwadrat</MenuItem>

          </Select>

        </FormControl>

        {typeOfSizePage}

      <h1 id="label">Pozycja:</h1>
      <div>
            <Typography id="label"><h1>X: {this.props.parameters[3]}</h1></Typography>
            <Slider
            id="sliders"
            value={this.props.parameters[3]}
            min={1}
            max={500}
            step={1}
            onChange={this.handlePositionXChange}
            />
        </div>
        <div>
            <Typography id="label"><h1>Y: {this.props.parameters[4]}</h1></Typography>
            <Slider
            id="sliders"
            value={this.props.parameters[4]}
            min={1}
            max={500}
            step={1}
            onChange={this.handlePositionYChange}
            />
        </div>
        <h1 id="label">Kolor:</h1>
        <div id="colorPicker">
            <ChromePicker
            color={ this.props.parameters[5] }
            onChangeComplete={ this.handleColorChange }
        />
        </div>
      </div>
      </div>
    );
  }
}

export default ActorsProperties;
