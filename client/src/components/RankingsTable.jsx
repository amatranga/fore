import React from 'react';
import Player from './Player';

const RankingsTable = (props) => {
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
          {props.playerNames.map((player, idx) =>
            <Player key={idx} id={idx} name={player} form={false} />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RankingsTable;
