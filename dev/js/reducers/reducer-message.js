import * as firebase from 'firebase';
import database from '../database';


export default function (state = [{}], action) {
    var obj, returnedObject;
    if (action.type === "MESSAGE_SELECTED") {
        var postnumber = 0;

        var date = new Date();
        let time = "" + date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();
        time += date.getMilliseconds();
        console.log(time);
        let root = database.ref('/' + time);
        obj = { user: action.payload.user, message: action.payload.message, comments: [] };
        returnedObject = Object.assign({}, state, obj);
        root.set(returnedObject);
        return state;
    }
    if (action.type === "COMMENT_SELECTED") {
        console.log("Comment submitted");
        console.log(action.payload.post);
        console.log(action.payload.post.message);
        var timeOld = action.payload.post.uniqueId;
        let root = database.ref('/' + timeOld);
        var commentNew = action.payload.post.comments;
        if (commentNew === undefined)
            commentNew = [];
        var messageOld = action.payload.post.message;
        var userOld = action.payload.post.user;
        commentNew.push(action.payload.comment);
        obj = { user: userOld, message: messageOld, comments: commentNew };
        returnedObject = Object.assign({}, state, obj);
        root.set(returnedObject);
        return state;
    }
    if (action.type === "AUTH_LOGIN") {
        let userid = action.payload.userid;
        let password = action.payload.password;
        console.log(userid + "/" + password);
        let auth = firebase.auth();
        auth.signInWithEmailAndPassword(userid, password)
            .then((data) => {
                console.log('success signin');
            })
            .catch((err) => {
                console.log(err.message);
                alert("User not exist we are creating the user");
                auth.createUserWithEmailAndPassword(userid, password)
                .then((data) => {
                    console.log("User successfully created");
                    alert("User successfully created");
                })
                .catch((err) => {
                    console.log(err.message);
                    alert("Error user creation : " + err.message)
                });
            });
        return state;
    }
    if (action.type === "AUTH_LOGOUT") {
        let auth = firebase.auth();
        auth.signOut();
        console.log("success signout");
        return state;
    }
    return state;
}


