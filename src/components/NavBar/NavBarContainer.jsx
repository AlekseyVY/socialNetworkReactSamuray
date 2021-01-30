
import NavBar from "./NavBar";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
    state: state.sideBarReducer.sideBar
  }
}

const NavBarContainer = connect(mapStateToProps)(NavBar)

export default NavBarContainer;