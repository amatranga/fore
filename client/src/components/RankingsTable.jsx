import React from 'react';
import Player from './Player';

class RankingsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props, 'props in RankingsTable');
    return (
      <div>
        <table className="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th>Position</th>
              <th>Player</th>
              <th>Score</th>                        
            </tr>
          </thead>
          <tbody>
            {this.props.playerNames.map((player, idx) =>
              <Player key={idx} id={idx} name={player} form={false} totalScoresTop={this.props.totalScoresTop} totalScoresBottom={this.props.totalScoresBottom} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RankingsTable;
