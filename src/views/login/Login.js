import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer, action } from 'mobx-react';
import autobind from 'autobind-decorator'
import { login } from './../../services/auth'
import { withRouter } from 'react-router'
import logoUrl from './../../assets/logo.svg'


@observer(['account'])
class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  async login() {
    const { token, id, email } = await login(this.state);
    this.props.account.authToken = token;
    this.props.account.id = id;
    this.props.history.push(`${id}/dashboard/analytics`)
  }

  @autobind
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  @autobind
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render () {
    return (
      <div className="sc-auth">
        <img src={logoUrl} className="sc-auth--logo" />
        <div className="sc-auth--logo-text">slackchat</div>
        <input className="sc-auth--input" type="email" onChange={this.handleEmailChange}/>
        <input className="sc-auth--input" type="password" onChange={this.handlePasswordChange}/>
        <Link to="auth" className="sc-auth--password-link">Forgot your password?</Link>
        <button className="sc-auth--button" onClick={this.login.bind(this)}>
          Login
        </button>
        <Link to="auth" className="sc-auth--account-link">
          Create a Slackchat account!
        </Link>
      </div>
    )
  }
}

export default withRouter(Login)