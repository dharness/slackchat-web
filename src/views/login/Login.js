import React, { Component } from 'react'
import { observer, action } from 'mobx-react';
import autobind from 'autobind-decorator'
import { login } from './../../services/auth'
import { withRouter } from 'react-router'


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
      <div>
        <br />
        <input type="email" onChange={this.handleEmailChange}/>
        <br />
        <input type="password" onChange={this.handlePasswordChange}/>
        <br />
        <button onClick={this.login.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default withRouter(Login)