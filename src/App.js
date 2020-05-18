import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Hogwarts from './components/Hogwarts'

class App extends Component {

  state = {
    allWizards: []
  }

  componentDidMount(){
    fetch(`http://localhost:4000/wizards`)
      .then(response => response.json())
      .then((fetchedWizards) => {
        this.setState({
          allWizards: fetchedWizards
        })
      })
  }

  enrollNewWizard = (newWizard) => {
    fetch(`http://localhost:4000/wizards`, {
      method: "POST",
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(newWizard)
    })
      .then(response => response.json())
      .then((newlyEnrolledWizard) => {
        let updatedAllWizards = [...this.state.allWizards, newlyEnrolledWizard]
        this.setState({
          allWizards: updatedAllWizards
        })
      })
  }

  graduateAWizard = (idOfGraduatedWizard) => {
    fetch(`http://localhost:4000/wizards/${idOfGraduatedWizard}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then((graduatedWizard) => {
        let copyOfAllWizards = this.state.allWizards.filter((singleWizard) => {
          return singleWizard.id !== idOfGraduatedWizard
        }) 
        this.setState({
          allWizards: copyOfAllWizards
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Hogwarts 
        wizards={this.state.allWizards}
        enrollNewWizard={this.enrollNewWizard}
        graduateAWizard={this.graduateAWizard}/>
      </div>
    );
  }
  
}

export default App;
