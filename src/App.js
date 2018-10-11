import React, { Component } from 'react';
import { store } from './store';
import UserList from  './UserList';

class App extends Component {
  render() {
    return (
      <div>
        <UserList users={store.getState().users}/>
      </div>
    );
  }
}

export default App;
