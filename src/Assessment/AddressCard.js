import { connect } from 'react-redux';
import { getEvents, selectItem, clearEvents } from '../actions';

const AddressCard = ({
  id,
  user_id,
  street_one,
  street_two,
  city,
  state_id,
  zip_code,
  country_id,
  created_at,
  updated_at,
  deleted_at,
  getEvents,
  clearEvents,
  selected,
  selectItem,
  index,
}) => {
  return (
    <div
      className='addressCard'
      // toggles style of card when selected
      style={
        selected
          ? { backgroundColor: 'rgb(180, 180, 180)', borderStyle: 'inset' }
          : null
      }
      onClick={() => {
        selected ? clearEvents() : getEvents();
        selectItem({ index, item: 'addresses' });
      }}
    >
      <p>"id": {id ? id : 'N/A'}</p>
      <p>"user_id": {user_id ? user_id : 'N/A'}</p>
      <p>"street_one": {street_one ? street_one : 'N/A'}</p>
      <p>"street_two": {street_two ? street_two : 'N/A'}</p>
      <p>"city:" {city ? city : 'N/A'}</p>
      <p>"state": {state_id ? state_id : 'N/A'}</p>
      <p>"zip_code": {zip_code ? zip_code : 'N/A'}</p>
      <p>"country": {country_id ? country_id : 'N/A'}</p>
      <p>"created_at": {created_at ? created_at : 'N/A'}</p>
      <p>"updated_at": {updated_at ? updated_at : 'N/A'}</p>
      <p>"deleted_at:" {deleted_at ? deleted_at : 'N/A'}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    getEvents: () => dispatch(getEvents(id)),
    clearEvents: () => dispatch(clearEvents()),
    selectItem: (changeIndex) => dispatch(selectItem(changeIndex)),
  };
};

export default connect(null, mapDispatchToProps)(AddressCard);
