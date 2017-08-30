import React, { Component } from 'react'
import LeftNav from './LeftNav'
import Header from './Header'
import AccountInfo from './AccountInfo'
import Chart from './analytics/Chart'
import Widget from './widget/Widget'
import Accounts from './accounts/Accounts'
import Payments from './payments/Payments'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'
import { observer } from 'mobx-react';


@observer(['account'])
class componentName extends Component {

  componentDidMount() {
    this.props.account.fetch(this.props.match.params.accountId);
  }

  render () {
    return (
      <div className="sc-container">
        <Header />
        <div className="sc-horz-divider"></div>
        <AccountInfo />
        <div className="sc-horz-divider"></div>
        <div className="sc-dashboard-content">
          <LeftNav accountId={this.props.account.id} />
          <Route path='/:accountId/dashboard/analytics' component={Chart}/>
          <Route path='/:accountId/dashboard/widget' component={Widget}/>
          <Route path='/:accountId/dashboard/accounts' component={Accounts}/>
          <Route path='/:accountId/dashboard/payments' component={Payments}/>
        </div>
      </div>
    )
  }
}

export default withRouter(componentName)