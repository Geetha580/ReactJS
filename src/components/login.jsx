import React, { Component } from 'react';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div><h1>Login page</h1>
            <div className="container mt-3">
  <h2>Inline Forms</h2>
  <p>If you want your form elements to appear side by side, use .row and .col:</p>
  <form>
    <div className="row">
      <div className="row">
        <input type="text" className="form-control" placeholder="Enter email" name="email" />
      </div>
      <div className="row">
        <input type="password" className="form-control" placeholder="Enter password" name="pswd" />

      </div>
    </div>
  </form>
</div>
            </div>
         );
    }
}
 
export default Login;