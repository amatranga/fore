import React from 'react';
import Score from './Score';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      totalScore: 0,
      name: this.props.name.playerName,
      scores: [0,0,0,0,0,0,0,0,0]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(score, idx) {
    let scores = this.state.scores;
    const totalScore = this.state.totalScore + (score - scores[idx]);
    scores[idx] = score;
    this.setState({totalScore, scores});
  }

  render() {
    if (this.props.form === true) {
      return(
        <tr>
          <th scope="row" id={this.state.id}>{this.state.name}</th>
            {this.state.scores.map((score, idx) =>
              <Score key={idx} idx={idx} playerId={this.state.id} onChange={this.handleChange} />
            )}
            <td>{this.state.totalScore}</td>
        </tr>
      );
    } else {
      return (
        <tr>
          <th scope="row" id={this.state.id}>{this.state.id + 1}</th>
          <td>{this.state.name}</td>
          <td>Total</td>
        </tr>
      );
    }
  } 
}

export default Player;
