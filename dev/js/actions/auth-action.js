export const authLogin=(userid, password) => {
    //console.log(userid+"/"+password);
    return {
        type:"AUTH_LOGIN",
        payload: {userid, password}
    };
};

export const authLogout=() => {
    //console.log(userid+"/"+password);
    return {
        type:"AUTH_LOGOUT",
        payload: {}
    };
};