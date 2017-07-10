import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authLogin, authLogout} from '../actions/auth-action';
class AuthUser extends React.Component{
    render(){
        return (
            <div>
                <input type="text" ref="txtId" className="form-control"/>
                <input type="text" ref="txtPass" className="form-control"/>
                <button type="button" className="btn btn-default"
                    onClick = {()=> this.props.authLogin(this.refs.txtId.value, this.refs.txtPass.value)}
                >Login</button>
                <button type="button" className="btn btn-default"
                    onClick = {()=> this.props.authLogout()}
                >Logout</button>
            </div>
        )
    }
}


function mapStateToPorps(state){
    return {
        //authSuccess: state.authSuccess
    };
}

function matchDispatchToProps(dispatch, message) {
    return bindActionCreators({ authLogin: authLogin, authLogout:authLogout }, dispatch, message);
}

export default connect(mapStateToPorps, matchDispatchToProps)(AuthUser);