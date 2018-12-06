import React, { Component } from 'react';
import { SketchPicker } from 'react-color'; 
import Flexbox from 'flexbox-react';

class Pathway extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      description: props.description,
      color: props.color,
      highlight: props.highlight
    }

    this.handleColorChange.bind(this);
    this.handleHighlightChange.bind(this);
    this.changePathway.bind(this);
  }

  changePathway() {
    // validation 
    const id = generateID(this.state.name);
    const newPathway = {
      id: id,
      name: this.state.name,
      description: this.state.description,
      color: this.state.color,
      highlight: this.state.highlight
    }

    this.state.store.dispatch(actions.changePathway(index, newPathway));
  }

  handleColorChange(color) {
    this.setState(() => ({
      color: color
    }));
  }

  handleHighlightChange(highlight) {
    this.setState(() => ({
      highlight: highlight
    }));
  }
  

  render() {
    return (
      <Flexbox flexDirection="column" minHeight="50vh" width="80vh">
      <Flexbox element="header" height="60px"  >
        {this.props.name}
      </Flexbox>
      <Flexbox height="200px" width="100%" >
      </Flexbox>
      <Flexbox flexDirection="row" heigth="400px" width="100%">
        <Flexbox width="50%">
          <SketchPicker color={this.state.color} onChangeComplete={this.handleColorChange}></SketchPicker>
        </Flexbox>
        <Flexbox width="50">
          <SketchPicker color={this.state.color} onChangeComplete={this.handleHighlightChange}></SketchPicker>
        </Flexbox>
      </Flexbox>
      </Flexbox>
    )
  }
}

export default Pathway;