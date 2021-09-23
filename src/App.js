import CreateCategory from './components/pages/CreateCategory/CreateCategory';
import NavComponent from './components/elements/NavComponent/NavComponent';
import { withAuthenticator } from '@aws-amplify/ui-react';

import {Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import EntryNew from './components/pages/Entry/EntryNew';

function App() {
  return (
    <>
      <NavComponent />
      <Switch>
        <Route exact={true} path='/'>
          <h1>Personal Diary</h1>
        </Route>
        <Route exact={true} path='/categories/create'>
          <CreateCategory />
        </Route>
        <Route exact path='/entries/create'>
          <EntryNew />
        </Route>
      </Switch>
    </>
  );
}

export default withAuthenticator(App);
