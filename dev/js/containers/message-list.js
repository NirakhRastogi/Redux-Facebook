import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {sendMessage} from '../actions/message-send';
import * as firebase from 'firebase';

class MessageList extends Component{

     render(){
        return (
                <div className="panel panel-primary">
                    <div className="panel-heading">Send Message</div>
                     <div className="panel-body">
                        <div className="form-group">
                            <textarea ref="newText" className="form-control" rows="3" id="comment"></textarea>
                        </div>
                    </div>
                    <div className="panel-footer">
                        <button type="button" className="btn btn-primary"
                        onClick={()=>this.props.sendMessage(firebase.auth().currentUser.email,this.refs.newText.value)}
                        >
                        Send
                        </button>
                    </div>
                </div>
            );
     }
}

function mapStateToProps(state) {
    return {
        video: state.videoActive,
        posts: state.posts
    };
}

function matchDispatchToProps(dispatch,message) {
    return bindActionCreators({sendMessage:sendMessage},dispatch,message);
}

export default connect(mapStateToProps,matchDispatchToProps)(MessageList);
