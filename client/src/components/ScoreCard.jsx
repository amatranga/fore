import React from 'react';
import RadioSelector from './RadioSelector';
import PlayerNameInput from './PlayerNameInput';
import ScoresTable from './ScoresTable';
import RankingsTable from './RankingsTable';
import Intermediary from './Intermediary';

class ScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holes: [],
      numberOfPlayers: 2,
      playerNames: [
        {playerId: -2, playerName: 'yardages'},
        {playerId: -1, playerName: 'par'}
      ],
      radio: [1,2,3,4,5,6],
      totalScores: [],
      allScores: []
    };

    this.handleSelection = this.handleSelection.bind(this);
    this.submitNames = this.submitNames.bind(this);
    this.updatePlayerRankings = this.updatePlayerRankings.bind(this);
  }

  componentWillMount() {
    let holes = ['#'];
    for (let i = 1; i < 10; i++) {
      holes.push(i);
    }
    holes.push('Out', '#');
    for (let i = 10; i < 19; i++) {
      holes.push(i);
    }
    holes.push('In');
    this.setState({holes});
  }

  // For RadioSelector component
  handleSelection(event) {
    event.preventDefault();
    this.setState({numberOfPlayers: event.target.value});
  }

  submitNames(playersArr) {
    let playerNames = this.state.playerNames.concat(playersArr);
    this.setState({playerNames});
  }

  updatePlayerRankings(scoresArr) {
    let totalScores = scoresArr;
    this.setState({totalScores});
  }

  render() {
    if (this.state.numberOfPlayers === 2) {
      return (
        <div className="col">
          <form className="row justify-content-center">
            <fieldset className="form-group">
              <legend>Select Number of Players</legend>
              {this.state.radio.map((num, idx) =>
                <RadioSelector key={idx} id={idx} value={+num} handleSelection={this.handleSelection} />
              )}
            </fieldset>
          </form>
        </div>
      );
    } else if (this.state.playerNames.length === 2) {
      return (
        <div className="col">
          <PlayerNameInput submitNames={this.submitNames} numberOfPlayers={this.state.numberOfPlayers} />
        </div>
      );
    } else {
      return (
        <Intermediary playerNames={this.state.playerNames} holes={this.state.holes} totalScores={this.state.totalScores} updatePlayerRankings={this.updatePlayerRankings} />
      );
    }
  }
}

export default ScoreCard;
