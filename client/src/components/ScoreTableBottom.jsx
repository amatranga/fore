import React from 'react';
import HoleNumber from './HoleNumber';
import Player from './Player';

const ScoreTableBottom = (props) => {
  return (
    <table className="table table-striped table-responsive">
      <thead>
        <tr>
          {props.holes.map((holeNumber, idx) =>
            <HoleNumber key={idx} num={idx} holeNumber={props.holes[idx]} />
          )}
        </tr>
      </thead>
      <tbody>
        {props.playerNames.map((player, idx) =>
          <Player key={idx} id={idx} name={player} form={true} setBottomScore={props.setBottomScore} position={"bottom"} />
        )}
      </tbody>
    </table>
  );
}

export default ScoreTableBottom;
