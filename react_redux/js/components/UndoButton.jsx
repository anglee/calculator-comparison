import _ from 'lodash';
import React from 'react';
import operators from '../constants/operators';

const UndoButton = ({
  onClick
}) => {
  return (
    <button onClick={onClick}>Undo</button>
  );
};

export default UndoButton;
