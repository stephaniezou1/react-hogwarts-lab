import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Hogwarts from './components/Hogwarts'

class App extends Component {

  state = {
    allWizards: [],
    houseFilterTerm: "All"
  }

  handleHouseFilterTerm = (selectedFilter) => {
    this.setState({
      houseFilterTerm: selectedFilter
    })
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

  decideWhichHouseToRender = () => {
    let {houseFilterTerm, allWizards} = this.state
    let arrayToReturn = allWizards

    if (houseFilterTerm === "All") {
      arrayToReturn = allWizards
    }

    if (houseFilterTerm === "Gryffindor") {
      arrayToReturn = allWizards.filter((wizard) => {
        return wizard.house === "Gryffindor"
    })
    }

    if (houseFilterTerm === "Hufflepuff") {
      arrayToReturn = allWizards.filter((wizard) => {
        return wizard.house === "Gryffindor"
    })
    }

    if (houseFilterTerm === "Ravenclaw") {
      arrayToReturn = allWizards.filter((wizard) => {
        return wizard.house === "Gryffindor"
    })
    }

    if (houseFilterTerm === "Slytherin") {
      arrayToReturn = allWizards.filter((wizard) => {
        return wizard.house === "Gryffindor"
    })
    }
    return arrayToReturn
  }
  

  render() {

    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <Hogwarts 
        wizards={this.state.allWizards}
        houseFilterTerm={this.state.houseFilterTerm}
        handleHouseFilterTerm={this.handleHouseFilterTerm}
        enrollNewWizard={this.enrollNewWizard}
        graduateAWizard={this.graduateAWizard}/>
      </div>
    );
  }
  
}

export default App;
