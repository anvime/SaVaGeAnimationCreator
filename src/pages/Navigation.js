import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import NavigationItem from "./NavigationItem.js"

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            navIndex: this.props.navIndex,
            actorsList: ["Actor1", "Actor2", "Actor3"],
            operationsList: ["Operation1", "Operation2", "Operation3"],
            scenarioList: ["Scenario1"],
            selectedItemIndex: 0, //indeks odpowiada actorsList lub operationsList lub scenarioList w zależności od wartości navIndex
            actorCount: 3,
            operationsCount: 3,
            scenarioCount: 1,
        };
    }

    selectActors = () =>{
        this.setState({navIndex: "actors"});
        this.props.handleNavIndexChange("actors");
        this.setState({selectedItemIndex: 0});
        this.props.updateSelectedItemIndex(0);
        this.props.selectParameters("actors",0);
    }

    selectOperations = () =>{
        this.setState({navIndex: "operations"});
        this.props.handleNavIndexChange("operations");
        this.setState({selectedItemIndex: 0});
        this.props.updateSelectedItemIndex(0);
        this.props.selectParameters("operations",0);
    }

    selectScenario = () =>{
        this.setState({navIndex: "scenario"});
        this.props.handleNavIndexChange("scenario");
        this.setState({selectedItemIndex: 0});
        this.props.updateSelectedItemIndex(0);
        this.props.selectParameters("scenario",0);
    }

    handleActorSelect = (idx) => {
        this.setState({selectedItemIndex: idx});
        this.props.updateSelectedItemIndex(idx);
        this.props.selectParameters(this.state.navIndex,idx);
    }

    addActor = () => {
        this.setState({
            actorsList: this.state.actorsList.concat("Actor" + (this.state.actorCount + 1).toString())
        }, ()=> this.props.updateActorsList(this.state.actorsList,-1));
        var tempCount = this.state.actorCount;
        this.setState({actorCount: tempCount + 1});
    }

    deleteActor = (idx) => {
        var actorsList = [...this.state.actorsList];
        actorsList.splice(idx, 1);

        this.setState({actorsList: actorsList},
            ()=> this.props.updateActorsList(this.state.actorsList,idx));
        this.setState({selectedItemIndex: 0});
        this.props.updateSelectedItemIndex(0);
        this.props.selectParameters(this.state.navIndex,0);
    }

    addOperation = () => {
        this.setState({
            operationsList: this.state.operationsList.concat("Operation" + (this.state.operationsCount + 1).toString())
        }, ()=> this.props.updateOperationsList(this.state.operationsList,-1));

        var tempCount = this.state.operationsCount;
        this.setState({operationsCount: tempCount + 1});
    }

    deleteOperation = (idx) => {
        var operationsList = [...this.state.operationsList];
        operationsList.splice(idx, 1);

        this.setState({operationsList: operationsList},
            ()=> this.props.updateOperationsList(this.state.operationsList,idx));

        this.setState({selectedItemIndex: 0});
        this.props.updateSelectedItemIndex(0);
        this.props.selectParameters(this.state.navIndex,0);
    }

    addScenario = () => {
        this.setState({
            scenarioList: this.state.scenarioList.concat("Scenario" + (this.state.scenarioCount + 1).toString())
        }, ()=> this.props.updateScenarioList(this.state.scenarioList,-1));

        var tempCount = this.state.scenarioCount;
        this.setState({scenarioCount: tempCount + 1});
    }

    deleteScenario = (idx) => {
        var scenarioList = [...this.state.scenarioList];
        scenarioList.splice(idx, 1);

        this.setState({scenarioList: scenarioList},
            ()=> this.props.updateScenarioList(this.state.scenarioList,idx));

        this.setState({selectedItemIndex: 0});
        this.props.updateSelectedItemIndex(0);
        this.props.selectParameters(this.state.navIndex,0);
    }

    render() {
        let navPage;
        let actorsListPage;
        let tricksListPage;
        let scenarioListPage;

        let actorsHelperPage = [];
        let tricksHelperPage = [];
        let scenarioHelperPage = [];

        if (this.state.actorsList.length == 0){
            actorsListPage = <div></div>
        } else {
            let i
            for (i=0;i<this.state.actorsList.length;i++){
                actorsHelperPage.push(<NavigationItem index={i}  selectedItemIndex={this.state.selectedItemIndex} clickFunction={this.handleActorSelect} name={this.state.actorsList[i]} deleteFunction={this.deleteActor}/>)
            }
            actorsListPage =
                <div>
                    {actorsHelperPage}
                </div>
        }

        if (this.state.operationsList.length == 0){
            tricksListPage = <div></div>
        } else {
            let j
            for (j=0;j<this.state.operationsList.length;j++){
                tricksHelperPage.push(<NavigationItem index={j}  selectedItemIndex={this.state.selectedItemIndex} clickFunction={this.handleActorSelect} name={this.state.operationsList[j]} deleteFunction={this.deleteOperation}/>)
            }
            tricksListPage =
                <div>
                    {tricksHelperPage}
                </div>
        }

        if (this.state.scenarioList.length == 0){
            scenarioListPage = <div></div>
        } else {
            let k
            for (k=0;k<this.state.scenarioList.length;k++){
                scenarioHelperPage.push(<NavigationItem index={k}  selectedItemIndex={this.state.selectedItemIndex} clickFunction={this.handleActorSelect} name={this.state.scenarioList[k]} deleteFunction={this.deleteScenario}/>)
            }
            scenarioListPage =
                <div>
                    {scenarioHelperPage}
                </div>
        }


        if(this.state.navIndex == 'actors'){
            navPage =
                <div className="navTitle">
                    <div>Aktorzy</div>
                    <Button onClick={this.addActor}>Dodaj</Button>
                    <div className="navContent">
                        {actorsListPage}
                    </div>
                </div>
        } else if(this.state.navIndex == 'operations') {
            navPage =
                <div className="navTitle">
                    <div>Operacje</div>
                    <Button onClick={this.addOperation}>Dodaj</Button>
                    <div className="navContent">
                        {tricksListPage}
                    </div>
                </div>
        } else if(this.state.navIndex == 'scenario') {
            navPage =
                <div className="navTitle">
                    <div>Scenariusz</div>
                    <Button onClick={this.addScenario}>Dodaj</Button>
                    <div className="navContent">
                        {scenarioListPage}
                    </div>
                </div>
        }

        return (
            <div id="scNav">
                <div id="selectCategory">
                    <Button id="categoryButton" onClick={this.selectActors}>Aktorzy</Button>
                    <Button id="categoryButton" onClick={this.selectOperations}>Operacje</Button>
                    <Button id="categoryButton" onClick={this.selectScenario}>Scenariusz</Button>
                </div>
                {navPage}
            </div>
        );
    }
}
export default Navigation;

