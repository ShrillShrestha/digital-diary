import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      <h1>Personal Diary</h1>
    </div>
  );
}

export default withAuthenticator(App);
