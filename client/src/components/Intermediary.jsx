import React from 'react';
import ScoresTable from './ScoresTable';
import RankingsTable from './RankingsTable';

class Intermediary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScoresBottom: [],
      totalScoresTop: []
    };
  }

  render() {
    return (
      <div>
        <ScoresTable playerNames={this.props.playerNames} holes={this.props.holes} updatePlayerRankings={this.props.updatePlayerRankings} />
        <hr />
        <RankingsTable playerNames={this.props.playerNames} totalScoresTop={this.state.totalScoresTop} totalScoresBottom={this.state.totalScoresBottom} />
      </div>
    );
  }

  shouldComponentUpdate(nextProps) {
    let curProps = JSON.stringify(this.props);
    nextProps = JSON.stringify(nextProps);
    return curProps !== nextProps;
  }

  componentDidUpdate() {
    let totalScores = this.props.totalScores;
    console.log(totalScores[0], 'totalScores');
    let totalScoresTop = [];
    let totalScoresBottom = [];
    for (let i = 0; i < totalScores[0].top.length; i++) {
      totalScoresTop.push(totalScores[0].top[i]);
    }
    if (totalScores[0].bottom.length) {
      for (let j = 0; j < totalScores[0].bottom.length; j++) {
        totalScoresBottom.push(totalScores[0].bottom[j]);
      }
    }
    this.setState({totalScoresTop, totalScoresBottom});
  }
}

export default Intermediary;
