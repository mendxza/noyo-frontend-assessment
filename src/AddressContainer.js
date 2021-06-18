import { connect } from 'react-redux';
import AddressCard from './AddressCard';

function AddressContainer({ addresses }) {
  const addressCards = addresses.map((el, i) => {
    return <AddressCard key={`address${i}`} {...el} index={i} />;
  });

  return (
    <div className='addressContainer '>
      <h4>Address Information</h4>
      {addressCards.length ? (
        addressCards
      ) : (
        <p className='noValues'>None Selected</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { addresses } = state;
  return { addresses };
};
export default connect(mapStateToProps, null)(AddressContainer);
