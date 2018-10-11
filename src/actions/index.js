const ACTIONS = {
    UPDATE_USER_DESCRIPTION: 'update::user::description'
};

const updateUserDescription = (id, description) => ({
    type: ACTIONS.UPDATE_USER_DESCRIPTION,
    payload: { id, description }
});

const actionCreators = {
    updateUserDescription
}

export {
    ACTIONS,
    actionCreators
};