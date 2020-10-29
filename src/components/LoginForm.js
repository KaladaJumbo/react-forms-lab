import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  submitHandler = () => {
    let data = {username: this.state.username, password: this.state.password}
    this.props.handleLogin(data)
  }

  // handleUsername = (e) => {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }

  // handlePassword = (e) => {
  //   this.setState({
  //     password: e.target.value
  //   })
  // }

  handleForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit= {(e) => {
        e.preventDefault();
        this.state.password.length > 0 && this.state.username.length > 0 ?
        this.submitHandler()
        :
        null
      }
        }>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text"
            value= {this.state.username}
            onChange= {(e) => {this.handleForm(e)}}
             />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password"
            value= {this.state.password}
            onChange= {(e) => {this.handleForm(e)}}
             />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
