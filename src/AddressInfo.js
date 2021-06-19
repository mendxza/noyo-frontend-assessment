import { connect } from 'react-redux';
import AddressCard from './AddressCard';

function AddressInfo({ addresses }) {
  
  const addressCards = addresses.map((el, i) => {
    return <AddressCard key={`address${i}`} {...el} index={i} />;
  });

  return (
    <div className='addressContainer '>
      <h4>Address Information</h4>
      {addressCards.length ? (
        addressCards
      ) : (
        <h5 className='noValues'>None Selected</h5>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { addresses } = state;
  return { addresses };
};
export default connect(mapStateToProps, null)(AddressInfo);
