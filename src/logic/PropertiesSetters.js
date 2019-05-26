

function handleActorTypeChange(newType) {
        let helperOne = [...this.state.actorsParameters[this.state.selectedItemIndex]];

        helperOne[0] = newType;

      const list = this.state.actorsParameters.map((item, j) => {
        if (j === 0) {
          return helperOne;
        } else {
          return item;
        }
      });
      this.setState({actorsParameters: list}, ()=>{this.selectParameters("actors",this.state.selectedItemIndex)});
    }