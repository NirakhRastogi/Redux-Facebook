export const sendMessage = (user,message) =>{
    //alert("Yoour message \'"+message+"\' has been send \'"+video.name+"\'");
    return{
        type:"MESSAGE_SELECTED",
        payload:{user,message}
    };
};

export const sendComment = (post,comment) =>{
    console.log(post,comment);
    return{
        type:"COMMENT_SELECTED",
        payload:{post,comment}
    };
};
