import _ from 'lodash';
import React from 'react';
import operators from '../constants/operators';

const UndoButoon = ({
  onClick
}) => {
  return (
    <button onlick={() => {
      console.log("test");
    }}>Undo</button>
  );
};

export default UndoButoon;
