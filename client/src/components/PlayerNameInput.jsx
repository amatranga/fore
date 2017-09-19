import React from 'react';
import PlayerInput from './PlayerInput';

class PlayerNameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let players = [];
    let children = event.target;
    for (let j = 0; j < children.length - 1; j++) {
      players.push({playerId: j, playerName: children[j].value});
    }
    this.props.submitNames(players);
    this.setState({players});
  }

  componentWillMount() {
    let players = [];
    for (let i = 0; i < this.props.numberOfPlayers; i++) {
      players.push({playerId: i, playerName: ''});
    }
    this.setState({players});
  }

  render() {
    return (
      <div className="row justify-content-center">
        <form id="input-form" onSubmit={this.handleSubmit}>
          {this.state.players.map((player, idx) =>
            <PlayerInput key={idx} id={idx} name={player} />
          )}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default PlayerNameInput;
