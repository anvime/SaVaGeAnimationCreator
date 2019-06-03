import React, {Component} from 'react'
import Button from '@material-ui/core/Button';

class NavigationItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index,
        };
    }

    render() {
        let colorClass;

        if(this.state.index == this.props.selectedItemIndex){
            colorClass = "navItemSelected";
        } else {
            colorClass = "navItem";
        }

    return (
        <div className={colorClass}>
            <div  id="navItemTitle" onClick={() => this.props.clickFunction(this.state.index)}>{this.props.name}</div>
            <Button className="deleteButton" onClick={() => this.props.deleteFunction(this.state.index)}>Usuń</Button>
        </div>
    );
  }
}
export default NavigationItem;
