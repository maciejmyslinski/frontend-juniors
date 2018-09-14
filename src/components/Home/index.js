import React, { Component } from 'react';
import { func } from 'prop-types';

export class Home extends Component {
  static propTypes = {
    searchPeople: func,
  };

  static defaultProps = {
    searchPeople: () => null,
  };

  state = {
    isLoading: false,
  };

  handleSearchInputChange = async e => {
    this.setState({ isLoading: true });
    const result = await this.props.searchPeople(e.target.value);
    this.setState({ isLoading: false, data: result.data.results });
  };

  render() {
    return (
      <div>
        <label htmlFor="search-input">
          Search:{' '}
          <input onChange={this.handleSearchInputChange} id="search-input" />
        </label>
        {this.state.isLoading && 'loading...'}
        <ul>
          {this.state.data &&
            this.state.data.map(person => (
              <li key={person.name}>{person.name}</li>
            ))}
        </ul>
      </div>
    );
  }
}
