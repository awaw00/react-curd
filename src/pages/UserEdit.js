import React from 'react';
import UserEditor from '../components/UserEditor';
import { get } from '../utils/request';

class UserEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentWillMount () {
    const userId = this.context.router.params.id;
    get('http://localhost:3000/user/' + userId)
      .then(res => {
        this.setState({
          user: res
        });
      });
  }

  render () {
    const {user} = this.state;
    return user ? <UserEditor editTarget={user}/> : <span>加载中...</span>;
  }
}

UserEdit.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default UserEdit;
