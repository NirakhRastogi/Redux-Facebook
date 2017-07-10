import React from 'react';
import MessageList from '../containers/message-list';
import DisplayMessage from '../containers/message-display';
import AuthUser from '../containers/auth-user';
const App = () => (
    <div className="row">
        <div className="col-sm-8">
            <AuthUser />
        </div>
        <div className="col-sm-8">
            <MessageList />
            <DisplayMessage />
        </div>
    </div>
)

export default App;
