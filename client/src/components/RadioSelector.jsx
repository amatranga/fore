import React from 'react';

const RadioSelector = (props) => {
  return (
    <div className="form-check">
      <label className="form-check-label">
        <input type="radio" className="form-check-input" name="optionsRadios" id={props.id} value={props.value} onClick={props.handleSelection} />
        {props.value}
      </label>
    </div>
  );
}

export default RadioSelector;
