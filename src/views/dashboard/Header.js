import React, { Component } from 'react'
import { withRouter } from 'react-router';
import logoUrl from './../../assets/logo.svg'
import userUrl from './../../assets/user.svg'
import autobind from 'autobind-decorator';


class Header extends Component {

  @autobind
  goToRoute(to) {
    return () => {
      window.focus();
      if (document.activeElement) {
        document.activeElement.blur();
      }
      this.props.history.push(to);
    }
  }

  render () {
    const { accountId } = this.props.match.params;
    return (
      <div className="sc-dashboard-header">
      <div className="sc-dashboard-header--brand">
        <img src={logoUrl} alt=""/>
        <div className="sc-brand-text">slackchat</div>
      </div>

      <button className="sc-dashboard-header--dropdown">
        <div className="sc-dashboard-header--upgrade-float">Upgrade!</div>
        <img className="sc-dashboard-header--avatar-img" src={userUrl} alt="" />

        <div className="sc-dashboard-dropdown-menu" >
          <div className="sc-dashboard-dropdown-item">
            <div className="sc-dashboard-dropdown-item--user">
              <div className="sc-dashboard-dropdown-username">
                <div className="sc-dashboard-dropdown-circle"></div>
                <div className="sc-dashboard-dropdown-username-text">
                  dharness
                </div>
              </div>
              <div className="sc-dashboard-dropdown-email">dharness@kingofthestack.com</div>
            </div>
          </div>
          <div className="sc-horz-divider"></div>
          <a
            className="sc-dashboard-dropdown-item link"
            onClick={this.goToRoute(`/${accountId}/dashboard/settings`)}>
              Settings
          </a>
          <a
            className="sc-dashboard-dropdown-item link"
            onClick={this.goToRoute(`/${accountId}/dashboard/payments`)}>
              Upgrade Account
          </a>
          <a
            className="sc-dashboard-dropdown-item link"
            onClick={this.goToRoute('/')}>
              Logout
          </a>
        </div>
      </button>
      </div>
    )
  }
}

export default withRouter(Header)