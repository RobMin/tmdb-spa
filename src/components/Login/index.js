import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./styles";

import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { logIn, getIsAuth, addApiKey } from "../../localStoreFuncs";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      apiKey: "",
      showKeyError: false
    };
  }

  handleKeyChange = e => this.setState({ apiKey: e.target.value });

  checkValidKey = () => {
    const reg = /[a-z0-9]{32}/;
    const valid = reg.test(this.state.apiKey);
    this.setState({ showUserError: !valid });
    return valid;
  };

  showKeyError = () => this.setState({ showKeyError: true });

  handleSubmit = () => {
    if (this.checkValidKey()) {
      addApiKey(this.state.apiKey);
      logIn();
    }
  };

  render() {
    const { classes } = this.props;
    const { showKeyError } = this.state;
    const isAuth = getIsAuth();
    if (isAuth)
      return (
        <div>
          <Redirect to="/movies/popular" />
        </div>
      );
    return (
      <div className={classes.container}>
        <div>
          <h2 className={classes.h2}>TMDB API KEY</h2>
          <Input
            autoFocus
            required
            className={classes.input}
            onChange={this.handleKeyChange}
            value={this.state.apiKey}
            onBlur={this.checkValidKey}
            error={showKeyError}
          />
          {showKeyError && <p className={classes.error}>INVALID KEY</p>}
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
