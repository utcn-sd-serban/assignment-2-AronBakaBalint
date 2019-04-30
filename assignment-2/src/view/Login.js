import React from "react";

 const  Login = ({ onLogin }) => (
    <div className="container">
        <h2>Welcome to Stack Overflow</h2>
        <br/>
        <form>
            <div className="form-group">
                <label>Username: </label>
                <input/>
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input/>
            </div>
            <button className="btn btn-primary" onClick={onLogin}>Login</button>
        </form>
    </div>
);

export default Login;