import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import FormControl from "@material-ui/core/FormControl/FormControl";

class SaveIntoProgramm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listOfactorsList: [["Actor1", "Actor2", "Actor3"]],
            listOfoperationsList: [["Operation1", "Operation2", "Operation3"]],
            listOfscenarioList: [["Scenario1"]],
            listOfactorsParameters: [[["circle",20,20,50,50,'#d53904'],["square",30,30,60,40,'#e07fb2'],["circle",20,20,30,30,'#a2127a']]],
            listOfoperationsParameters: [[["translation","line","clockwise",40,20,90,"clockwise"],["translation","line","clockwise",30,40,0,"clockwise"],["translation","line","clockwise",35,50,45,"clockwise"]]],
            listOfscenarioParameters: [[[2,0,20,0,[],[]],[5,0,20,0,[],[]],[6,0,20,0,[],[]]]],
            listOfSvgNames: ["PrzykładSvg"],
            currentSvg: "PrzykładSvg",
            svgCounter: 1

        };
    }

    saveSvg = () => {


        this.setState(prevState => ({
                listOfactorsList: [...prevState.listOfactorsList, this.props.actorsList]
            }))
        this.setState(prevState => ({
                listOfoperationsList: [...prevState.listOfoperationsList, this.props.operationsList]
            }))
        this.setState(prevState => ({
                listOfscenarioList: [...prevState.listOfscenarioList, this.props.scenarioList]
            }))
        this.setState(prevState => ({
                listOfactorsParameters: [...prevState.listOfactorsParameters, this.props.actorsParameters]
            }))
        this.setState(prevState => ({
                listOfoperationsParameters: [...prevState.listOfoperationsParameters, this.props.operationsParameters]
            }))
        this.setState(prevState => ({
                listOfscenarioParameters: [...prevState.listOfscenarioParameters, this.props.scenarioParameters]
            }))

        this.setState({
            listOfSvgNames: this.state.listOfSvgNames.concat("New Svg" + (this.state.svgCounter + 1).toString())

        });

        this.setState({
            svgCounter: this.state.svgCounter + 1
        })
    }

    updateSvg = () => {
      let index = this.state.listOfSvgNames.indexOf(this.state.currentSvg);

      const list1 = this.state.listOfactorsList.map((item, j) => {
        if (j === index) {
          return this.props.actorsList;
        } else {
          return item;
        }
      });
      const list2 = this.state.listOfoperationsList.map((item, j) => {
        if (j === index) {
          return this.props.operationsList;
        } else {
          return item;
        }
      });
      const list3 = this.state.listOfscenarioList.map((item, j) => {
        if (j === index) {
          return this.props.scenarioList;
        } else {
          return item;
        }
      });
      const list4 = this.state.listOfactorsParameters.map((item, j) => {
        if (j === index) {
          return this.props.actorsParameters;
        } else {
          return item;
        }
      });
      const list5 = this.state.listOfoperationsParameters.map((item, j) => {
        if (j === index) {
          return this.props.operationsParameters;
        } else {
          return item;
        }
      });
      const list6 = this.state.listOfscenarioParameters.map((item, j) => {
        if (j === index) {
          return this.props.scenarioParameters;
        } else {
          return item;
        }
      });

      this.setState({
            listOfactorsList: list1,
            listOfoperationsList: list2,
            listOfscenarioList: list3,
            listOfactorsParameters: list4,
            listOfoperationsParameters: list5,
            listOfscenarioParameters: list6
        });

    }

    deleteSvg = () => {

        let index = this.state.listOfSvgNames.indexOf(this.state.currentSvg);
        this.setState({currentSvg: this.state.listOfSvgNames[0]});

        const list1 = this.state.listOfactorsList.filter((item, j) => index !== j);
        const list2 = this.state.listOfoperationsList.filter((item, j) => index !== j);
        const list3 = this.state.listOfscenarioList.filter((item, j) => index !== j);
        const list4 = this.state.listOfactorsParameters.filter((item, j) => index !== j);
        const list5 = this.state.listOfoperationsParameters.filter((item, j) => index !== j);
        const list6 = this.state.listOfscenarioParameters.filter((item, j) => index !== j);
        const list7 = this.state.listOfSvgNames.filter((item, j) => index !== j);

        this.setState({
            listOfactorsList: list1,
            listOfoperationsList: list2,
            listOfscenarioList: list3,
            listOfactorsParameters: list4,
            listOfoperationsParameters: list5,
            listOfscenarioParameters: list6,
            listOfSvgNames: list7
        });

        this.props.loadSvgData(this.state.listOfactorsList[0], this.state.listOfoperationsList[0], this.state.listOfscenarioList[0], this.state.listOfactorsParameters[0], this.state.listOfoperationsParameters[0], this.state.listOfscenarioParameters[0])

    }

    handleSvgSelect = event => {
        let index = this.state.listOfSvgNames.indexOf(event.target.value);
        this.setState({currentSvg: this.state.listOfSvgNames[index]});
        this.props.loadSvgData(this.state.listOfactorsList[index], this.state.listOfoperationsList[index], this.state.listOfscenarioList[index], this.state.listOfactorsParameters[index], this.state.listOfoperationsParameters[index], this.state.listOfscenarioParameters[index])

    };

    render() {
    return (
        <div >
            <FormControl id="actorTypeDropdown">
          <InputLabel htmlFor="age-simple">Przeglądaj zapisane svg</InputLabel>
          <Select
            value={this.state.currentSvg}
            onChange={this.handleSvgSelect}
          >
            {this.state.listOfSvgNames.map(svgName => (
                <MenuItem key={svgName} value={svgName} >
                    {svgName}
                </MenuItem>
                ))}

          </Select>

        </FormControl>
            <div>
                <Button id= "saveToProgrammButton" variant="outlined"  onClick={() => this.saveSvg()}>Zapisz jako nowy svg</Button>
                <Button id= "updateSvgButton" variant="outlined"  onClick={() => this.updateSvg()}>Nadpisz obecny svg</Button>
                <Button id= "deleteSvgButton"variant="outlined"  onClick={() => this.deleteSvg()}>Usuń</Button>
            </div>
        </div>
    );
  }
}
export default SaveIntoProgramm;