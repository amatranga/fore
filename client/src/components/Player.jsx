import React from 'react';
import Score from './Score';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      totalScore: 0,
      name: this.props.name.playerName,
      scores: [0,0,0,0,0,0,0,0,0],
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(score, idx, playerId) {
    let scores = this.state.scores;
    const totalScore = this.state.totalScore + (score - scores[idx]);
    scores[idx] = score;
    this.setState({totalScore, scores});

    if (this.props.position === "top") {
      this.props.setTopScore(totalScore, playerId);
    } else if (this.props.position === "bottom") {
      this.props.setBottomScore(totalScore, playerId);
    }
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
      let total = 0;
      if (this.props.totalScoresTop.totalScore) {
        let totalScoresTop = this.props.totalScoresTop[this.state.id];
      }
      if (this.props.totalScoresBottom.totalScore) {
        let totalScoresBottom = this.props.totalScoresBottom[this.state.id];
      }

      console.log(totalScoresTop, totalScoresBottom);
      return (
        <tr>
          <th scope="row" id={this.state.id}>{this.state.id + 1}</th>
          <td>{this.state.name}</td>
          <td>{totalScoresTop.totalScore + totalScoresBottom.totalScore || 0}</td>
        </tr>
      );
    }
  }
}

export default Player;
