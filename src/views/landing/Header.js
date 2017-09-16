import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logoUrl from './../../assets/logo.svg'
import slackLogoUrl from './../../assets/slacklogo.svg'

class Header extends Component {
    render () {
        return (
            <div className="sc-landing--header">
                <div className="sc-landing--logo">
                    <img src={logoUrl} alt="" />
                    <div className="sc-landing--logo-text">slackchat</div>
                </div>
                <div className="sc-landing--nav">
                    <a className="sc-landing--nav-item" href="#sc-landing--info">About</a>
                    <a className="sc-landing--nav-item" href="mailto:hello@kingofthestack.com">Contact</a>
                    <Link className="sc-landing--nav-item login" to='auth'>
                        <img src={slackLogoUrl} alt="" />
                        Login
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header