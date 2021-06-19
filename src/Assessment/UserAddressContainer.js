import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUsers } from '../actions';
import Container from '@material-ui/core/Container';
import AddressInfo from './AddressInfo';
import UserDropdown from './UserDropdown';

function UserAddressContainer({ setUsers }) {
  useEffect(() => {
    fetch('/user_ids')
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <Container>
      <UserDropdown />
      <AddressInfo />
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUsers: (users) => dispatch(setUsers(users)),
});

export default connect(null, mapDispatchToProps)(UserAddressContainer);
