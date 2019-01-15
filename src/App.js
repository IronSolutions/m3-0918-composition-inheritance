import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Label } from './components/Label';
import { ExtendedLabel, ExtendedLabelWarning} from './components/ExtendedLabel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p><b>Composed Label</b></p>
          <Label>Normal</Label>
          <Label status="info">Normal</Label>
          <Label status="warning">Normal</Label>
          <Label status="error">Normal</Label>
          <Label>
            Normal
            <Label status="error">Normal</Label>
          </Label>

          <p><b>Inherited Label</b></p>
          <ExtendedLabel>Inherited</ExtendedLabel>
          <ExtendedLabelWarning>Warning</ExtendedLabelWarning>
        </header>
      </div>
    );
  }
}

export default App;
