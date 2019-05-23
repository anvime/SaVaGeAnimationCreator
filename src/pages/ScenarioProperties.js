import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import Slider from "@material-ui/lab/Slider/Slider";
import NavigationItem from "./NavigationItem";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStylesActors(name, that) {
  return {
    fontWeight:
      that.state.selectedActors.indexOf(name) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium,
  };
}

function getStylesOperations(name, that) {
  return {
    fontWeight:
      that.state.selectedOperations.indexOf(name) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium,
  };
}

class ScenarioProperties extends Component {

    constructor(props){
        super(props);
        this.state = {
            durationTime: 2,
            startAfter: 0,
            numOfRepeats: 20,
            repeatDelay: 0,
            selectedActors: [],
            selectedOperations: []
        };
    }

    handleDurationTimeChange = (event, durationTime) => {
    this.setState({ durationTime });
  };

    handleStartAfterChange = (event, startAfter) => {
    this.setState({ startAfter });
  };

    handleNumOfRepeatsChange = (event, numOfRepeats) => {
    this.setState({ numOfRepeats });
  };

    handleRepeatDelayChange = (event, repeatDelay) => {
    this.setState({ repeatDelay });
  };

    handleSelectedActorsChange = event => {
    this.setState({ selectedActors: event.target.value });
  };

    handleSelectedOperationsChange = event => {
    this.setState({ selectedOperations: event.target.value });
  };

    render() {
    const { classes } = this.props;

    return (
      <div id="parametersSetting">
          <h1 >{this.props.name}</h1>

          <div id={"scenarioContent"}>
            <div>
            <Typography id="label"><h1>Czas trwania (s): {this.state.durationTime}</h1></Typography>
            <Slider
            id="sliders"
            value={this.state.durationTime}
            min={0}
            max={20}
            step={1}
            onChange={this.handleDurationTimeChange}
            />
            </div>

            <div>
            <Typography id="label"><h1>Rozpocznij po (s): {this.state.startAfter}</h1></Typography>
            <Slider
            id="sliders"
            value={this.state.startAfter}
            min={0}
            max={20}
            step={1}
            onChange={this.handleStartAfterChange}
            />
            </div>

          <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-chip">Aktorzy:</InputLabel>
            <Select
                multiple
                value={this.state.selectedActors}
                onChange={this.handleSelectedActorsChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={selected => (
                <div className={classes.chips}>
                    {selected.map(value => (
                    <Chip key={value} label={value} className={classes.chip}/>
                    ))}
                </div>
                )}
                MenuProps={MenuProps}
            >
                {this.props.actorsList.map(actorsList => (
                <MenuItem key={actorsList} value={actorsList} style={getStylesActors(actorsList, this)}>
                    {actorsList}
                </MenuItem>
                ))}
          </Select>
        </FormControl>
        </div>
              
        <div>
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-chip">Operacje:</InputLabel>
            <Select
                multiple
                value={this.state.selectedOperations}
                onChange={this.handleSelectedOperationsChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={selected => (
                <div className={classes.chips}>
                    {selected.map(value => (
                    <Chip key={value} label={value} className={classes.chip}/>
                    ))}
                </div>
                )}
                MenuProps={MenuProps}
            >
                {this.props.operationsList.map(operationsList => (
                <MenuItem key={operationsList} value={operationsList} style={getStylesOperations(operationsList, this)}>
                    {operationsList}
                </MenuItem>
                ))}
          </Select>
        </FormControl>
        </div>

            <div>
            <Typography id="label"><h1>Liczba powtórzeń: {this.state.numOfRepeats}</h1></Typography>
            <Slider
            id="sliders"
            value={this.state.numOfRepeats}
            min={0}
            max={30}
            step={1}
            onChange={this.handleNumOfRepeatsChange}
            />
            </div>

            <div>
            <Typography id="label"><h1>Opóźnienie wykonania powtórzenia (s): {this.state.repeatDelay}</h1></Typography>
            <Slider
            id="sliders"
            value={this.state.repeatDelay}
            min={0}
            max={20}
            step={1}
            onChange={this.handleRepeatDelayChange}
            />
            </div>

          </div>
      </div>
    );
  }
}

ScenarioProperties.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ScenarioProperties);