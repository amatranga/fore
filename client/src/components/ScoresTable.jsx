import React from 'react';
import HoleNumber from './HoleNumber';
import Player from './Player';

const ScoresTable = (props) => {
  return (
    <div>
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            {props.holes.map((holeNumber, idx) =>
              idx < 11 ? <HoleNumber key={idx} num={idx} holeNumber={props.holes[idx]} /> : null
            )}
          </tr>
        </thead>
        <tbody>
          {props.playerNames.map((player, idx) =>
            <Player key={idx} id={idx} name={player} form={true} />
          )}
        </tbody>
      </table>
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            {props.holes.map((holeNumber, idx) =>
              idx > 10 ? <HoleNumber key={idx} num={idx} holeNumber={props.holes[idx]} /> : null
            )}
          </tr>
        </thead>
        <tbody>
          {props.playerNames.map((player, idx) =>
            <Player key={idx} id={idx} name={player} form={true} />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ScoresTable;
