import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { setSelectedUser, resetUser } from './actions';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function UserDropdown({ users, setSelectedUser, selectedUser, resetUser }) {
  const classes = useStyles();

  // adds users to the dropdown
  const usersArr = users.map((user, i) => {
    return (
      <option key={`user${i}`} value={user}>
        {user}
      </option>
    );
  });

  const toggleUserSelect = (value) => {
    value ? setSelectedUser(value) : resetUser();
  };

  return (
    <div>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel htmlFor='outlined-age-native-simple'>User Id</InputLabel>
        <Select
          native
          value={selectedUser}
          onChange={(e) => toggleUserSelect(e.target.value)}
          label='User Id'
          style={{ backgroundColor: 'var(--secondary)' }}
        >
          <option aria-label='None' value='' />
          {usersArr}
        </Select>
      </FormControl>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setSelectedUser: (userId) => dispatch(setSelectedUser(userId)),
  resetUser: () => dispatch(resetUser()),
});

const mapStateToProps = (state) => {
  const { users, selectedUser } = state;
  return { users, selectedUser };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
