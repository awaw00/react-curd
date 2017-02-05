import React from 'react';
import HomeLayout from '../layouts/HomeLayout';

class UserList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userList: []
    };
  }

  componentWillMount () {
    fetch('http://localhost:3000/user')
      .then(res => res.json())
      .then(res => {
        this.setState({
          userList: res
        });
      });
  }

  render () {
    const {userList} = this.state;

    return (
      <HomeLayout title="用户列表">
        <table>
          <thead>
          <tr>
            <th>用户ID</th>
            <th>用户名</th>
            <th>性别</th>
            <th>年龄</th>
          </tr>
          </thead>

          <tbody>
          {
            userList.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                </tr>
              );
            })
          }
          </tbody>
        </table>
      </HomeLayout>
    );
  }
}

export default UserList;
