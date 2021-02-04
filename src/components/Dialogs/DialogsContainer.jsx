import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {addDialogThunk} from "../../Redux/messageReducer";


let mapStateToProps = (state) => {
  return {
    props: state.messageReducer
  }
}



export default compose(
  connect(mapStateToProps, {
    addDialogThunk
  }),
  withAuthRedirect
)(Dialogs);