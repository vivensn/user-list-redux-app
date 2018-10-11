import React, { Component } from 'react';
import UseProfile from './UserProfile';

class UserList extends Component {
  render() {
    return (
      <div>{this.props.users.map(user => <UseProfile user={user} key={`user-${user.id}`} />)}</div>
    );
  }
}

export default UserList;
