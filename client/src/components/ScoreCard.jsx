import React from 'react';
import RadioSelector from './RadioSelector';
import PlayerNameInput from './PlayerNameInput';
import ScoresTable from './ScoresTable';
import RankingsTable from './RankingsTable';

class ScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holes: [],
      numberOfPlayers: 0,
      playerNames: [],
      radio: [1,2,3,4,5,6]
    };

    this.handleSelection = this.handleSelection.bind(this);
    this.submitNames = this.submitNames.bind(this);
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

  handleSelection(event) {
    event.preventDefault();
    this.setState({numberOfPlayers: event.target.value});
  }

  submitNames(playersArr) {
    this.setState({playerNames: playersArr});
  }

  render() {
    if (this.state.numberOfPlayers === 0) {
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
    } else if (this.state.playerNames.length === 0) {
      return (
        <div className="col">
          <PlayerNameInput submitNames={this.submitNames} numberOfPlayers={this.state.numberOfPlayers} />
        </div>
      );
    } else {
      return (
        <div>
          <ScoresTable playerNames={this.state.playerNames} holes={this.state.holes}/>
          <hr />
          <RankingsTable playerNames={this.state.playerNames}/>
        </div>
      );
    }
  }
}

export default ScoreCard;
