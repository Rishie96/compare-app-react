import React from 'react';
import Fruits from './Fruits';
import ComparisonTable from './ComparisonTable';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      compare: []
    }
  }

  onClickHandler = (item) => {
    let items = this.state.compare;
    items.push(item);

    //REMOVE IF DUPLCATE =>
    for(let i=0; i<items.length; i++) {
      for(let j=i+1; j<items.length; j++) {
        if(items[i].name === items[j].name)
          items.splice(j, 1);
      }
    }
    // <=

    this.setState({compare: items});
  }

  onRemoveHandler = (item) => {
    let items = this.state.compare;
    if(items.length === 2) {
      this.setState({compare: []});
      return;
    }
    for(let i=0; i<items.length; i++) {
      if(items[i].name === item.name) {
        items.splice(i, 1);
        break;
      }        
    }    
    this.setState({compare: items});
  }

  render() {
    return (
      <div>
        <div className="header">Compare Products</div>
        <Fruits onClick={this.onClickHandler} />
        <ComparisonTable fruits={this.state.compare} onRemove={this.onRemoveHandler} />
      </div>
    );
  }
}

export default App;
