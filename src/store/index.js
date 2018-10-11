import { createStore } from 'redux'; 
import reducer from '../reducers';


const initialState = {
    users: [
      {
        id: 1, 
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob.smith@test.com',
        description: 'I am awesome',
        avataUrl: ''
      },
      {
        id: 2, 
        firstName: 'Joe',
        lastName: 'Doe',
        email: 'joe.doe@test.com',
        description: 'Cool Doe',
        avataUrl: ''
      }
    ]
  };

export const store = createStore(reducer, initialState);