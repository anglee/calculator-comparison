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
      dispatch(actions.undo());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UndoButton);
