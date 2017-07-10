import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendComment } from '../actions/message-send';

class DisplayMessage extends Component {


    changeCommentText(text) {
        this.Comment = text;
    }

    renderList() {
        //console.log("Messgaes");
        //console.log(this.props.messages);
        return this.props.messages.map((post) => {
            return (
                <div className="panel panel-primary">
                    <div className="panel-heading">{post.message.substr(0, 5)}... ({post.user})</div>
                    <div className="panel-body">
                        <li className="cl_myli" key={post.postid}>
                            <h1>{post.message}</h1>
                            <textarea ref="txtComment" placeholder="Place your comment here"
                                className="form-control" rows="3"
                                onKeyUp={(e) => { this.changeCommentText(e.target.value) }}
                                onChange={(e) => { this.changeCommentText(e.target.value) }}
                                onBlur={(e) => { this.changeCommentText(e.target.value) }}
                            ></textarea>
                            <button type="button" name="btnSubmit" className="btn btn-primary"
                                onClick={() => this.props.sendComment(post, this.Comment + "\n")}
                            >
                                Comment
                        </button>
                            <div className="panel-footer">
                                <p className="cl_mycommentsp">
                                    {post.comments}
                                </p>
                            </div>
                        </li>
                    </div>
                </div>
            );
        })
    }
    render() {
        return (
            <ul className="cl_myul">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        video: state.videoActive,
        messages: state.messages
    };
}

function matchDispatchToProps(dispatch, message) {
    return bindActionCreators({ sendComment: sendComment }, dispatch, message);
}

export default connect(mapStateToProps, matchDispatchToProps)(DisplayMessage);
