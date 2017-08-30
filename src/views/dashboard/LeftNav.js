import React, { Component } from 'react'
import analyticsUrl from './../../assets/analytics.svg'
import widgetUrl from './../../assets/widget.svg'
import settingsUrl from './../../assets/settings.svg'
import paymentsUrl from './../../assets/payments.svg'
import slackLogoBlueUrl from './../../assets/slack-logo-blue.svg'
import { Link } from 'react-router-dom'


class LeftNav extends Component {
  render () {
    return (
      <div className="sc-left-nav">
        <div className="sc-left-nav-items">
          <Link to={`/${this.props.accountId}/dashboard/analytics`} className="sc-left-nav-item">
            <img className="sc-left-nav-item--img" src={analyticsUrl} alt=""/>
              <div className="sc-left-nav-item--text">
                Analytics
              </div>
          </Link>
          <Link to={`/${this.props.accountId}/dashboard/widget`} className="sc-left-nav-item">
            <img className="sc-left-nav-item--img" src={widgetUrl} alt=""/>
            <div className="sc-left-nav-item--text">
              Chindow
            </div>
          </Link>
          <Link to={`/${this.props.accountId}/dashboard/accounts`} className="sc-left-nav-item">
            <img className="sc-left-nav-item--img" src={settingsUrl} alt=""/>
            <div className="sc-left-nav-item--text">
              Accounts
            </div>
          </Link>
          <Link to={`/${this.props.accountId}/dashboard/payments`} className="sc-left-nav-item">
            <img className="sc-left-nav-item--img" src={paymentsUrl} alt=""/>
            <div className="sc-left-nav-item--text">
              Payments
            </div>
          </Link>
          <div className="sc-horz-divider"></div>
          <a className="sc-left-nav-item" href="slack://open?team=<%= team_id %>">
            <img className="sc-left-nav-item--img" src={slackLogoBlueUrl} alt=""/>
            <div className="sc-left-nav-item--text">Go to Slack</div>
          </a>
        </div>
      </div>
    )
  }
}

export default LeftNav
