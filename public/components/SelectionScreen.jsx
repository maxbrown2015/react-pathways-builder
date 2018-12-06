import React from 'react';
import CourseCatalog from './CourseCatalog';
import PathwayCatalog from './PathwayCatalog';

class SelectionScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div><CourseCatalog store={this.props.store}/></div>);
  }
}


export default SelectionScreen;