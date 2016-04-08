import { connect } from 'react-redux';
import actions from '../actions/actions';
import UndoButton from '../components/UndoButton.jsx';

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => {
      console.log("onclick");
      dispatch(actions.undo());
    }
  };
}

connect(mapStateToProps, mapDispatchToProps)(UndoButton);

export default UndoButton;