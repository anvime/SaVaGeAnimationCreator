import React, {Component} from 'react'

class SvgView extends Component {


  render() {

    return (
        //to jest NIEBEZPIECZE, atak XSS
      <div dangerouslySetInnerHTML={{__html: this.props.svg}}  className="SvgViewer">
      </div>
    );
  }
}

export default SvgView;