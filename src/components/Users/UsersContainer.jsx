import User from "./User/User";
import * as React from "react";
import styles from './UsersContainer.module.css'
import PageNumber from "./PageNumber/PageNumber";
import Preloader from "../common/Preloader/Preloader";
import {connect} from "react-redux";
import {
  getFollow,
  getUsersThunkCreator,
  pageChange,
} from "../../Redux/userReducer";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {currentPage, followingProcess, getPageSize, getUserSuperSelector} from "../../Redux/usersSelectors";


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
  }

  pages = [1, 2, 3, 4, 5];

  onPageChanged = (pageNumber) => {
    this.props.pageChange(pageNumber, this.props.currentPage, this.props.pageSize)
    if (pageNumber >= this.pages[this.pages.length - 1]) {
      this.pages.push(pageNumber + 1)
      this.pages.shift()
    } else if (pageNumber <= this.pages[0] && pageNumber > 1) {
      this.pages.unshift(pageNumber - 1)
      this.pages.pop()
    }
  }



  render() {
    let pages = this.pages
    return (
      <div className={styles.container}>
        {
          this.props.isFetching
            ? <Preloader/>
            : <>
              <div className={styles.numbers}>
                {
                  pages.map((page, id) => {
                    return (
                      <PageNumber
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        key={id}
                        page={page}/>
                    )
                  })
                }
              </div>
              {
                this.props.users.map((user) => {
                  return (
                    <User
                      followingProcess={this.props.followingProcess}
                      followU={this.props.getFollow}
                      key={user.id}
                      user={user}
                    />
                  )
                })
              }
            </>
        }
      </div>
    )
  }
}



let mapStateToProps = (state) => {
  return {
    users: getUserSuperSelector(state),
    pageSize: getPageSize(state),
    currentPage: currentPage(state),
    followingProcess: followingProcess(state)
  }
}



export default compose(connect(mapStateToProps, {
    getUsersThunkCreator,
    getFollow,
    pageChange
  }),
  withAuthRedirect
)(UsersContainer)