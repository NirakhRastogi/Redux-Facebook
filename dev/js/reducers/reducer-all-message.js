/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

import database from '../database';
import * as firebase from 'firebase';
var auth = firebase.auth();
var toExport = [];
let root = database.ref('/');
root.on('value', gotData, errData);

function gotData(data) {
    var scores = data.val();
    var keys = Object.keys(scores);
    var obj = {};
    var id = 1;
    toExport = [];

    keys.forEach(function (element) {
        //console.log(scores[element]);
        obj = {
            uniqueId: element,
            message: scores[element].message,
            user: scores[element].user,
            postid: id++,
            comments: scores[element].comments
        };
        toExport.push(obj);
    });
    console.log(toExport);
}

function errData(err) {
    errorShow(err);
}

export default function (state = [{}]) {
    return toExport;

}
