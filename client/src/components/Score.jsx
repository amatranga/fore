import React from 'react';

class Score extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onChange(+event.target.value, this.props.idx)
  }

  render() {
    return (
      <td>
        <input className="input-group input-group-sm" type="number" onChange={this.onChange} />
      </td>
    );
  }
}

export default Score;
