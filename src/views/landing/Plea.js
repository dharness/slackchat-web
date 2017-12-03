import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import slackLogoUrl from './../../assets/slacklogo.svg'

class Plea extends Component {
  render () {
    return (
      <div className="sc-landing-plea">
        <div className="sc-landing-plea--text">
          Start using Slackchat today for <i>free!</i>
        </div>
        <div className="sc-landing-plea--button-wrapper">
          <Link className="sc-landing-plea--button" to={'/auth?signup'}>
            <img src={slackLogoUrl} alt="" />
            <div className="sc-landing-plea--button--text">
              Add to Slack
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Plea