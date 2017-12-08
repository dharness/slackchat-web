import React, { Component } from 'react';
import slackLogoUrl from './../../../assets/slacklogo.svg';
import queryString from 'query-string';
import { withRouter } from 'react-router';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';


const NoAccounts = (props) => (
  <div className="sc-accounts-contents">
    <div className="sc-add-account-message">
        You need to link to a slack team in order to receive messages.
    </div>
    <div className="sc-accounts--button-wrapper">
      <a
        className="sc-accounts--button"
        href={`https://slack.com/oauth/authorize?${props.slackHref}`}>
        <img src={slackLogoUrl} alt="" />
        <div className="sc-accounts--button--text">
          Link Slack Team
        </div>
      </a>
    </div>
  </div>
)

const AccountPreview = (props) => (
  <div className="sc-accounts-contents">
    <div className="sc-accounts-preview">
      <img
        src={props.slackInfo.imgUrl}
        role="presentation"
        className="sc-accounts-preview--img"
      />
      <div className="sc-accounts-preview--info">
        <div className="sc-accounts-preview--label">Team</div>
        <div className="sc-accounts-preview--text">{props.slackInfo.team.name}</div>
      </div>
      <div className="sc-accounts-preview--info">
        <div className="sc-accounts-preview--label">Channel</div>
        <div className="sc-accounts-preview--text">{props.slackInfo.channel.name}</div>
      </div>
      <button onClick={props.onRemoveClicked} className="sc-accounts-preview--remove-button">Remove</button>
    </div>
  </div>
)


@inject('account')
@observer
class Accounts extends Component {

  constructor(props) {
    super(props);
    const slackHref = queryString.stringify({
      redirect_uri: 'http://127.0.0.1:9090/api/slack/authorize/',
      scope: 'incoming-webhook,commands,bot',
      client_id: '94105311894.149174096865',
      state: JSON.stringify({
        slackchatUserId: this.props.match.params.accountId
      })
    }, { encode: false });
    this.state = { slackHref };
  }

  @autobind
  onRemoveClicked() {
    this.props.account.removeSlackAccount(); 
  }

  render () {
    return (
      <div className="sc-accounts-wrapper">
        <div className="sc-accounts-header"> Accounts </div>
        {
          this.props.account.slack ?
          <AccountPreview onRemoveClicked={this.onRemoveClicked} slackInfo={this.props.account.slack}/> :
          <NoAccounts slackHref={this.state.slackHref}/>
        }
      </div>
    )
  }
}

export default withRouter(Accounts)
