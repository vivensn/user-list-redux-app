import { ACTIONS } from '../actions'
export default (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_USER_DESCRIPTION:
        console.log(`action: ${JSON.stringify(action)}`)
            const updatedState = Object.assign({}, state);
            
            const updatedUsers = updatedState.users.map((user) => {
                return (action.payload.id === user.id) ? Object.assign({}, user, { description: action.payload.description }) : user;
            });

            updatedState.users = updatedUsers;

            console.log(`updatedState: ${JSON.stringify(updatedState)}`)
            return updatedState;
            
        default:
            return state;
    }
};