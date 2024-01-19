const LoginStatus = (status)=>{
    if(status){
        return <button>Login</button>
    }
    else{
        return <button>Logout</button>
    }
}

const FunctionConditionalRendering = () => {
    return (
        <div>
            <h1>Login Status</h1>
            {LoginStatus(false)}
            {/* if status = true = login
            if status = false = logout */}
        </div>
    );
};

export default FunctionConditionalRendering;