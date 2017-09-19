import React from 'react';

const PlayerInput = (props) => {  
  return (
    <div className="form-group row">
      <label htmlFor="player-name-input" className="col-2 col-form-label">Player {props.id + 1}</label>
      <div className="col-10">
        <input className="form-control" type="text" placeholder="Player Name" required id={props.id} />
      </div>
    </div>
  );
}

export default PlayerInput;
