import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserAddressContainer from './UserAddressContainer';
import EventsInfo from './EventsInfo';
import DiffViewer from './CompareViewer';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div className='title'>Noyo Front End Coding Challenge</div>
        <Switch>
          <Route exact path='/'>
            <div className='homepage'>
              <UserAddressContainer />
              <hr></hr>
              <EventsInfo />
            </div>
          </Route>
          <Route path='/compare'>
            <DiffViewer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
