import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectItem, compareEvents } from './actions';

import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Checkbox color='default' {...props} />);

function RightContainer({ events, selectItem, compareEvents }) {
  const classes = useStyles();
  const history = useHistory();

  const eventsArray = events.map((event, i) => {
    const { type, created_at, selected } = event;
    return (
      <div key={`event${i}`} className='event'>
        <FormControlLabel
          control={
            <GreenCheckbox
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
      <div className='eventsContainer'>
        {eventsArray.length ? (
          <>
            <div>
              <h4>Events</h4>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  compareEvents(events);
                  history.push('/rightcontainer');
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
            <p className='noValues'>None Selected</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(RightContainer);
