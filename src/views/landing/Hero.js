import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import slackLogoBlueUrl from './../../assets/slack-logo-blue.svg'
import slackMockUrl from './../../assets/slackmock.svg'

class Hero extends Component {
  render () {
    return (
      <div className="sc-landing-hero">
        <div className="sc-landing-hero--info">
          <div className="sc-landing-hero--info-text">
            Chat with users on <br />
            your site without <br />
            ever leaving <span className="sc-landing-hero--blue-word">Slack</span> <br />
          </div>
          <div className="sc-landing-hero--button-wrapper">
            <Link className="sc-landing-hero--button" to='/auth?signup'>
              <img src={slackLogoBlueUrl} alt="" />
              <div className="sc-landing-hero--button-text">
                Get Slackchat free!
              </div>
            </Link>
          </div>
        </div>
        <div className="sc-landing-hero--img">
          <img src={slackMockUrl} alt="" />
        </div>
      </div>
    )
  }
}

export default Hero