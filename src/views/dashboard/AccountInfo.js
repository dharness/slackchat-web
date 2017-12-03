import React, { Component } from 'react'
import userUrl from './../../assets/user.svg'

class AccountInfo extends Component {

  getFormattedSince() {
    if (this.props.since) {
      const since = new Date(this.props.since)
      return `${since.toLocaleString('en-us', { month: "long" })} ${since.getFullYear()}`
    }
    return ''
  }

  render () {
    return (
      <div className="sc-info-nav">
        <div className="sc-info-nav--info">
          <div className="sc-info-company">
            <img src={userUrl} alt="" />
            <div className="sc-info-company--text">
              {this.props.slack ? this.props.slack.team.name : ''}
            </div>
          </div>
          <span className="sc-info-since">Since: <span className="sc-info-since--value">
            {this.getFormattedSince()}
          </span></span>
          <span className="sc-info-domain">Domain: <span className="sc-info-domain--value">kingofthestack.com</span></span>
        </div>

        <div>
          <label className="switch">
            <input type="checkbox" />
            <div className="slider round"></div>
          </label>
        </div>
      </div>
    )
  }
}

export default AccountInfo