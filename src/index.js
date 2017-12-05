import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './views/landing/Landing'
import Login from './views/login/Login'
import Dashboard from './views/dashboard/Dashboard'
import stores from './stores'
import './styles'
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

useStrict(false);
const App = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/:accountId/dashboard' component={Dashboard} />
    <Route path='/auth' component={Login} />
  </Switch>
)

ReactDOM.render((
  <Provider account={stores.account} analytics={stores.analytics}>
    <BrowserRouter>
      <Route path="/" component={App}></Route>
    </BrowserRouter>
  </Provider>
), document.querySelector('#app'))
