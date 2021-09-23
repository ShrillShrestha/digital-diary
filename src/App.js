import { withAuthenticator } from '@aws-amplify/ui-react';
import {Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/elements/NavComponent/NavComponent';
import CreateCategory from './components/pages/CreateCategory/CreateCategory';
import EntryNew from './components/pages/CreateEntry/EntryNew';
import EntryList from './components/pages/EntryList/EntryList';
import CategoryList from './components/pages/CategoryList/CategoryList'


function App() {
  return (
    <>
      <NavComponent />
      <Switch>
        <Route exact={true} path='/'>
          <CategoryList />
        </Route>
        <Route exact={true} path='/categories/create'>
          <CreateCategory />
        </Route>
        <Route exact path='/entries'>
          <EntryList />
        </Route>
        <Route exact path='/entries/create'>
          <EntryNew />
        </Route>
      </Switch>
    </>
  );
}

export default withAuthenticator(App);
