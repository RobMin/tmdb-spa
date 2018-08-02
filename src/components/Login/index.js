import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./styles";

import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { logIn, getIsAuth } from "../../localStoreFuncs";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      showUserError: false,
      showPassError: false
    };
  }

  handleUsernameChange = e => this.setState({ username: e.target.value });

  handlePasswordChange = e => this.setState({ password: e.target.value });

  checkValidUser = () => {
    const reg = /^[a-z0-9_-]{6,14}$/;
    const userValid = reg.test(this.state.username);
    this.setState({ showUserError: !userValid });
    return userValid;
  };

  checkValidPass = () => {
    const reg = /^[A-Za-z0-9_-]{6,14}$/;
    const passValid = reg.test(this.state.password);
    this.setState({ showPassError: !passValid });
    return passValid;
  };

  showUserError = () => this.setState({ showUserError: true });
  showPassError = () => this.setState({ showPassError: true });

  handleSubmit = () => {
    if (this.checkValidUser() && this.checkValidPass()) {
      logIn()
    }
  };

  render() {
    const { classes } = this.props;
    const { showUserError, showPassError } = this.state;
    const isAuth = getIsAuth();
    if (isAuth) return (<div><Redirect to="/movies/popular" /></div>);
    return (
      <div className={classes.container}>
        <div>
          <Input
            autoFocus
            required
            className={classes.input}
            placeholder="Username"
            onChange={this.handleUsernameChange}
            value={this.state.username}
            onBlur={this.checkValidUser}
            error={showUserError}
          />
          {showUserError && (
            <p className={classes.error}>
              Username must contain 6-14 <br /> symbols (a-z, 0-9, -, _)
            </p>
          )}
        </div>
        <div>
          <Input
            required
            type="password"
            placeholder="Password"
            className={classes.input}
            onChange={this.handlePasswordChange}
            value={this.state.Password}
            onBlur={this.checkValidPass}
            error={showPassError}
          />
          {showPassError && (
            <p className={classes.error}>
              Password must contain 6-14 <br /> symbols (A-Z, a-z, 0-9, -, _)
            </p>
          )}
        </div>
        <Button
          className={classes.button}
          size="small"
          variant="contained"
          color="secondary"
          onClick={this.handleSubmit}
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default injectSheet(styles)(Login);
