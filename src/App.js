import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      <h1>Personal Diary</h1>
    </div>
  );
}

export default withAuthenticator(App);
