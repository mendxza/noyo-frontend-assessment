import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function DiffViewer({ compareEvents }) {
  const history = useHistory();

  const compareItems = (eventArray) =>
    eventArray.map((event, i) => (
      <Container className='singleCompareDetail'>
        <h4>{i + 1} )</h4>
        <JSONPretty
          id='json-pretty'
          data={event}
          className='Adventure Time'
        ></JSONPretty>
      </Container>
    ));

  console.log('compare elements', compareEvents);

  return (
    <div className='compare'>
      <div style={{ margin: '0 1em 0 2em' }}>
        <Button
          color='primary'
          variant='contained'
          className='button'
          onClick={() => history.push('/')}
        >
          Go Back
        </Button>
        <Container className='changeDetails'>
          <h4>Event Changes</h4>
          {compareEvents ? (
            compareItems(compareEvents.eventChanges)
          ) : (
            <h1 className='noValues'>None Selected</h1>
          )}
        </Container>
      </div>
      <hr></hr>
      <div className='changeDetails'>
        <Container>
          <h4>Event Change Detail</h4>
          {compareEvents ? (
            compareItems(compareEvents.events.slice(1))
          ) : (
            <h1 className='noValues'>None Selected</h1>
          )}
        </Container>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { compareEvents } = state;
  return { compareEvents };
};
export default connect(mapStateToProps)(DiffViewer);
