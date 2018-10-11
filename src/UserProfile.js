import React, { Component } from 'react';
import { store } from './store';
import { actionCreators }  from './actions';

const { updateUserDescription } = actionCreators;

export default class User extends Component {
    handleDescriptionChange(e) {
        store.dispatch(updateUserDescription(parseInt(e.target.dataset.id, 10), e.target.value));
    }

    render() {
        return(
            <div>
                <div>{this.props.user.lastName}, {this.props.user.firstName}</div>
                <div>{this.props.user.description}</div>
                <form>
                    <textarea data-id={this.props.user.id} value={this.props.user.description} onChange={this.handleDescriptionChange}/>
                </form>
            </div>
        );
    }
}