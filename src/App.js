import { connect } from 'react-redux';

import './App.css';
import LeftConatiner from './LeftContainer';
import RightContainer from './RightContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DiffViewer from './DiffViewer';

function App() {
  return (
    <Router>
      <div>
        <div className='title'>Noyo Front End Coding Challenge</div>
        <Switch>
          <Route exact path='/'>
            <div className='homepage'>
              <LeftConatiner />
              <hr></hr>
              <RightContainer />
            </div>
          </Route>
          <Route path='/rightcontainer'>
            <DiffViewer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  const { name } = state;
  return { name };
};

export default connect(mapStateToProps)(App);
