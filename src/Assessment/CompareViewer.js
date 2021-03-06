import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import Button from '@material-ui/core/Button';

function CompareViewer({ compareEvents }) {
  const history = useHistory();

  // creates components for event changes or change details
  const compareItems = (eventArray, type) =>
    eventArray.map((event, i) => (
      <Container className='single-compare-detail' key={`JSONpretty${i}`}>
        {type === 'event' ? (
          <h4>{i + 1}</h4>
        ) : (
          <h4>
            Change {i + 1} to {i + 2}
          </h4>
        )}
        <JSONPretty id='json-pretty' data={event}></JSONPretty>
      </Container>
    ));

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
        <Container className='change-details'>
          <h4>Event Changes</h4>
          {compareEvents ? (
            compareItems(compareEvents.eventChanges, 'event')
          ) : (
            <h1 className='no-values'>None Selected</h1>
          )}
        </Container>
      </div>
      <hr></hr>
      <div className='change-details'>
        <Container>
          <h4>Event Change Detail</h4>
          {compareEvents ? (
            compareItems(compareEvents.changeDetail.slice(1), 'detail')
          ) : (
            <h1 className='no-values'>None Selected</h1>
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
export default connect(mapStateToProps)(CompareViewer);
