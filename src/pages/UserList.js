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

  handleEdit (user) {

  }

  handleDel (user) {
    const confirmed = confirm(`确定要删除用户 ${user.name} 吗？`);

    if (confirmed) {
      fetch('http://localhost:3000/user/' + user.id, {
        method: 'delete'
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            userList: this.state.userList.filter(item => item.id !== user.id)
          });
          alert('删除用户成功');
        })
        .catch(err => {
          console.error(err);
          alert('删除用户失败');
        });
    }
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
            <th>操作</th>
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
                  <td>
                    <a href="javascript:void(0)" onClick={() => this.handleEdit(user)}>编辑</a>
                    &nbsp;
                    <a href="javascript:void(0)" onClick={() => this.handleDel(user)}>删除</a>
                  </td>
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
