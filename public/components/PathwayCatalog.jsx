import React from 'react';
import Pathway from './Pathway';
import * as actions from '../actions/index.js';
import Flexbox from 'flexbox-react';

class PathwayCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.changePathway.bind(this);
    this.renderPathways.bind(this);
  }

  changePathway() {
    return;
  }


  renderPathways() {
    const pathways = this.props.store.getState().pathways;
    const markup = pathways.map((pathway, index) => {
      return (<Pathway key={index} index={index} id={pathway.id} name={pathway.name} color={pathway.color} 
        highlight={pathway.higlight}/>)
    });
    return markup
  }

  render() {
    return (<Flexbox flexDirection="column">
    {this.renderPathways()}
    </Flexbox>);
  }
}

export default PathwayCatalog;