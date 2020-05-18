import React, { Component } from 'react';

class SortingHat extends Component {

  state = {
    name: "",
    wand: "",
    house: "",
    image1: "",
    image2: ""
  }

  handleAllInputs = (evt) => {
    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.enrollNewWizard(this.state)
  }
  
  render() {

    return (
      <section>
        <h2>You Could Be Great, You Know...</h2>
        <form className="new_container" onSubmit={this.handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={this.handleAllInputs}/>

          <label htmlFor="wand">Wand:</label>
          <input type="text" name="wand" onChange={this.handleAllInputs}/>

          <label htmlFor="house">House:</label>
          <select name="house" onChange={this.handleAllInputs}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>

          <label htmlFor="image1">Image 1:</label>
          <input type="url" name="image1" onChange={this.handleAllInputs}/>

          <label htmlFor="image2">Image 2:</label>
          <input type="url" name="image2" onChange={this.handleAllInputs}/>

          <input type="submit" value="Log A New Wizard"/>

        </form>
      </section>
    );
  }

}

export default SortingHat;
