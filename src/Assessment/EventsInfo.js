import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectItem, compareEvents } from '../actions';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

// toggles checkbox color
const BlueCheckbox = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Checkbox color='default' {...props} />);

function EventsInfo({ events, selectItem, compareEvents }) {
  const history = useHistory();

  // array of all events components for address
  const eventsArray = events.map((event, i) => {
    const { type, created_at, selected } = event;
    return (
      <div key={`event${i}`} className='event'>
        <FormControlLabel
          control={
            <BlueCheckbox
              checked={selected}
              onChange={() => selectItem({ index: i, item: 'events' })}
              name='checkedG'
            />
          }
          label={type}
        />
        <p>{created_at}</p>
      </div>
    );
  });

  return (
    <Container>
      <div className='events-container'>
        {eventsArray.length ? (
          <>
            <div>
              <h4>Events</h4>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  compareEvents(events);
                  history.push('/compare');
                }}
              >
                Compare
              </Button>
            </div>
            {eventsArray}
          </>
        ) : (
          <>
            <h4>Events</h4>
            <h5 className='no-values'>None Selected</h5>
          </>
        )}
      </div>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  selectItem: (changeIndex) => dispatch(selectItem(changeIndex)),
  compareEvents: (events) => dispatch(compareEvents(events)),
});

const mapStateToProps = (state) => {
  const { events } = state;
  return { events };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsInfo);
