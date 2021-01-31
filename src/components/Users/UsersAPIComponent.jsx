import User from "./User/User";
import * as React from "react";
import styles from './usersAPIContainer.module.css'
import PageNumber from "./PageNumber/PageNumber";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
  }

  //pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
  pages = [1, 2, 3, 4, 5];

  onPageChanged = (pageNumber) => {
    this.props.setIsFetching()
    this.props.setPage(pageNumber)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.setIsFetching()
      this.props.setUsers(data.items)
    })
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


export default UsersAPIComponent;