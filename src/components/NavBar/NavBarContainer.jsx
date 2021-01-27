import React from 'react';
import StoreContext from "../../StoreContext";
import NavBar from "./NavBar";

const NavBarContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          return (
            <NavBar state={store.getState().sideBarReducer.sideBar}/>
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default NavBarContainer;