import User from "./User/User";
import axios from "axios";
import * as React from "react";
import styles from './usersAPIContainer.module.css'
import PageNumber from "./PageNumber/PageNumber";
import Preloader from "../Preloader/Preloader";


class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.setIsFetching()
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((resp) => {
      this.props.setIsFetching()
      this.props.setUsers(resp.data.items);
      this.props.setUsersCount(resp.data.totalCount)
    })
  }

  pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
  pages = [1, 2, 3, 4, 5];

  onPageChanged = (pageNumber) => {
    this.props.setIsFetching()
    this.props.setPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((resp) => {
      this.props.setIsFetching()
      this.props.setUsers(resp.data.items)
    })
    console.log(this.pageCount)
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
                      key={user.id}
                      user={user}
                      follow={this.props.follow}/>
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