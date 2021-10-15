import React, { Component } from 'react';
import Figure from './components/Figure';
import { defData1, defData2 } from './data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request1: { response: false, data: defData1 },
      request2: { response: false, data: defData2 },
    };
  }

  componentDidMount() {
    const request1 = new XMLHttpRequest();
    const request2 = new XMLHttpRequest();
    request1.onreadystatechange = () => {
      if (request1.readyState === 4) {
        if (request1.status === 200) {
          this.setState(state => ({
            request1: { response: true, data: JSON.parse(request1.responseText) }
          }));
        } else {
          this.setState(state => ({
            request1: { response: true, data: defData1 }
          }));
        }
      }
    }
    request2.onreadystatechange = () => {
      if (request2.readyState === 4) {
        if (request2.status === 200) {
          this.setState(state => ({
            request2: { response: true, data: JSON.parse(request2.responseText) }
          }));
        } else {
          this.setState(state => ({
            request2: { response: true, data: defData2 }
          }));
        }
      }
    }
    request1.open("GET", "https://rcslabs.ru/ttrp1.json");
    request1.send();
    request2.open("GET", "https://rcslabs.ru/ttrp2.json");
    request2.send();
  }
  
  render() {
    if (this.state.request1.response && this.state.request2.response) {
      return (
        <div className='flex-container'>
          <Figure data={this.state.request1.data} />
          <Figure data={this.state.request2.data} />
        </div>
      );
    } else {
      return <p className='loading-info'>Loading data...</p>
    }
  }
}

export default App;
