import React from 'react';
import { connect } from 'react-redux';      
import { setfilter, resetfilter } from '../Action';

const Filter = ({ filter_name, setfilter, resetfilter }) => {  // ✅ Destructure props from Redux
    const prod = ["All", "Veg", "Non-Veg", "Cold-drinks", "PIZZA", "Hot-drinks"];

    return (
        <div>
            <center className='m-2'>
                <span className='h4 m-2'>Filter:</span>
                
                <select 
                    name='filter' 
                    className="p-1" 
                    onChange={(e) => setfilter(e.target.value)} // ✅ Dispatch Redux action
                    value={filter_name} // ✅ Use Redux state instead of local useState
                >
                    {prod.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>

                
            </center>
        </div>
    );
};

// ✅ Connect Redux state to props
const mapStateToProps = (state) => ({
    filter_name: state.filterreducer.filter_name  // ✅ Get filter value from Redux store
});

// ✅ Connect Redux actions
export default connect(mapStateToProps, { setfilter, resetfilter })(Filter);
