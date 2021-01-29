import User from "./User/User";
import axios from "axios";
import * as React from "react";
import styles from './users.module.css'
import PageNumber from "./PageNumber/PageNumber";


class Users extends React.Component {

  componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((resp) => {
        this.props.setUsers(resp.data.items);
        this.props.setUsersCount(resp.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((resp) => {
      this.props.setUsers(resp.data.items)
    })
  }

  render() {

    let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div className={styles.numbers}>
          {
            pages.map((page, id) => {
              return (
                <PageNumber onPageChanged={this.onPageChanged} currentPage={this.props.currentPage} key={id} page={page}/>
              )
            })
          }
        </div>
        {
          this.props.users.map((user) => {
            return (
              <User key={user.id} user={user} follow={this.props.follow}/>
            )
          })
        }
      </div>
    )
  }
}


export default Users;