import React from 'react';
import './App.css';
import ShortClock from './ShortClock';
import LongClock from './LongClock';
import DefaultDate from './DefaultDate';
import TextDate from './TextDate';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      mode: 0
    };
  }

  getRandomColor() {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }

  renderMode() {
    switch(this.state.mode) {
      case 1:
        return <LongClock />;
      case 2:
        return <DefaultDate />;
      case 3:
        return <TextDate />;
      default:
        return <ShortClock />;
    }
  }

  changeMode = () => {
    const newMode = this.state.mode < 3 ? this.state.mode + 1 : 0;
    this.setState({
      mode: newMode
    });
  }

  render() {
    return (
      <div 
        className="container" 
        style={{backgroundColor: this.getRandomColor()}} 
        onClick={this.changeMode}
      >
        {this.renderMode()}
      </div>
    );
  }
}

export default App;
