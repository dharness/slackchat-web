import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer, action } from 'mobx-react';
import autobind from 'autobind-decorator'
import { login, signup } from './../../services/auth'
import { withRouter } from 'react-router'
import logoUrl from './../../assets/logo.svg'


@inject('account')
@observer
class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };
    this.emailTemplate = `
      Hey pal,

      I forgot my password for slackchat. I know, I know, I should have written it down.
      But can you reset it for me?
      My email address is YOUR_EMAIL_ADDRESS

      Sincerely,
      A forgetful user
    `;
    this.isSignup = this.isSignup.bind(this)
  }

  async loginOrSignup() {
    const loginOrSignup = this.isSignup() ? signup : login;
    const { token, id, email, error } = await loginOrSignup(this.state);
    if(error) {
      this.setState({ errorMessage: error.text })
    } else {
      this.props.account.authToken = token;
      this.props.account.id = id;
      this.props.history.push(`${id}/dashboard/analytics`)
    }
  }

  @autobind
  handleEmailChange(event) {
    this.setState({ email: event.target.value, errorMessage: '' });
  }

  @autobind
  handlePasswordChange(event) {
    this.setState({ password: event.target.value, errorMessage: '' });
  }
  
  @autobind
  isSignup() {
    return (new URLSearchParams(this.props.location.search)).get('signup') !== null;
  }

  render () {
    const canSubmit = this.state.email.length > 0 &&
        this.state.password.length > 0 &&
        this.state.errorMessage.length === 0;
    return (
      <div className="sc-auth">
        <img src={logoUrl} className="sc-auth--logo" />
        <div className="sc-auth--logo-text">slackchat</div>
        {this.state.errorMessage.length > 0 && 
          <div className="sc-auth--error-message">
            {this.state.errorMessage}
          </div>
        }

        <input className="sc-auth--input" type="email" onChange={this.handleEmailChange}/>
        <input className="sc-auth--input" type="password" onChange={this.handlePasswordChange}/>
        {!this.isSignup()  && 
          <a
          href={`mailto:hello@kingofthestack.com?subject=Forgot Password&body=${encodeURI(this.emailTemplate)}`}
          className="sc-auth--password-link">
              Forgot your password?
          </a>
        }
        <button
          className={"sc-auth--button" + (canSubmit ? "" : " disabled")}
          onClick={this.loginOrSignup.bind(this)}
          disabled={!canSubmit}
        >
          { this.isSignup() ? "Signup" : "Login"}
        </button>
        <Link
          to={`auth${this.isSignup() ? '' : '?signup'}`}
          className="sc-auth--account-link">
        { this.isSignup() ? "Already have an account?" : "Create a Slackchat account!"}
        </Link>
      </div>
    )
  }
}

export default withRouter(Login)
