import { useEffect } from 'react';
import { NativeSelect } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import AddressContainer from './AddressContainer';
import NativeSelects from './NativeSelects';
import { setUsers } from './actions';

function LeftConatiner({ setUsers }) {
  useEffect(() => {
    fetch('/user_ids')
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <Container>
      <NativeSelects />
      <AddressContainer />
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUsers: (users) => dispatch(setUsers(users)),
});

export default connect(null, mapDispatchToProps)(LeftConatiner);
