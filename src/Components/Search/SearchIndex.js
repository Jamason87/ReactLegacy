import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends Component {

  constructor() {
    super()

    this.state = {
      search: '',
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    }

    this.searchFunction = this.searchFunction.bind(this);
  }

  searchFunction(e) {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Input placeholder='Search Here' onChange={this.searchFunction} value={this.state.search} />
        <h3>Results:</h3>
        {this.state.things.filter(thing => thing.includes(this.state.search)).map(thing => <div>{thing}</div>)}
      </div>
    );
  }
}


export default SearchIndex;
