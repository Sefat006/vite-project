// import React from 'react';

const ConditionalRendering = () => {

    const status = false;
    // if the status is true, then it will show the logout button
    // if the status is false, then it will show the login btn;

    if(status==true){
        return (
            <div>
                <h1>Login Status</h1>
                <button>Logout</button>
            </div>
        );
    }
    else{
        return (
            <div>
                <h1>Login Status</h1>
                <button>Login</button>
            </div>
        );
    }
};

export default ConditionalRendering;