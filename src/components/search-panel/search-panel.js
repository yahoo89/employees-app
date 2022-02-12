import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termLocal: ''
    }
  }

  onUpdateSearchLocal = (e) => {
    const termLocal = e.target.value;
    this.setState({ termLocal });
    this.props.onUpdateSearch(termLocal);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder='найти сотрудника'
        value={this.state.termLocal}
        onChange={this.onUpdateSearchLocal} />
    )
  }
}

export default SearchPanel;
