import React from 'react';
import ScoreTableTop from './ScoreTableTop';
import ScoreTableBottom from './ScoreTableBottom';

class ScoresTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreTableTop: [],
      scoreTableBottom: []
    }

    this.setTopScore = this.setTopScore.bind(this);
    this.setBottomScore = this.setBottomScore.bind(this);
  }

  setTopScore(totalScore, playerId) {
    let scoreTableTop = this.state.scoreTableTop;
    let score = {totalScore, playerId};
    scoreTableTop.push(score);
    this.setState({scoreTableTop});
  }

  setBottomScore(totalScore, playerId) {
    let scoreTableBottom = this.state.scoreTableBottom;
    let score = {totalScore, playerId};
    scoreTableBottom.push(score);
    this.setState({scoreTableBottom});
  }

  render() {
    return (
      <div>
        <ScoreTableTop holes={this.props.holes.slice(0, 11)} playerNames={this.props.playerNames} setTopScore={this.setTopScore} />
        <ScoreTableBottom holes={this.props.holes.slice(11, 22)} playerNames={this.props.playerNames} setBottomScore={this.setBottomScore} />
      </div>
    );
  }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState, 'nextState =============== \n', this.state, 'current state');
  //   let curScoresTop = JSON.stringify(this.state.scoreTableTop);
  //   let curScoresBottom = JSON.stringify(this.state.scoreTableBottom)
  //   let nextScoresTop = JSON.stringify(nextState.scoreTableTop);
  //   let nextScoresBottom = JSON.stringify(nextState.scoreTableBottom);
  //   return (curScoresTop !== nextScoresTop || curScoresBottom !== nextScoresBottom);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps, 'nextProps');
  //   console.log(this.props, 'curProps');
  //   console.log(nextState, 'nextState');
  //   console.log(this.state, 'curState');
  //   return false;
  // }

  componentDidUpdate() {
    const numberOfPlayers = this.props.playerNames.length;
    let scores = [];
    let top = [...this.state.scoreTableTop].slice(-numberOfPlayers);
    let bottom = [...this.state.scoreTableBottom].slice(-numberOfPlayers);
    scores.push({top, bottom});
    this.props.updatePlayerRankings(scores);
  }
}

export default ScoresTable;
