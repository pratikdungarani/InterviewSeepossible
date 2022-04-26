import React from 'react'
import {Link} from 'react-router-dom'

const  AddressItem =  ({add, DeleteClick}) => {
    const {id,fname,lname,adress,city, state ,telephone, country } = add;
    console.log(">>>>>", id);
    return (
        <div className='bglight address_box'>
            <div className='d_flex jus_spbtw '>
                <p>AddressId  # {id}</p>
                <Link to={`/add-address/${id}`}>Edit</Link>
            </div>
            <p> {fname}  {lname}</p>
            <p> address :   {adress}</p>
            <p> City    : {city}</p>
            <p> State   : {state}</p>
            <p> Country : {country}</p>
            <div className='d_flex jus_spbtw '>
                <p>{telephone}</p>
                <button onClick={ () => DeleteClick(id) }> X </button>
            </div>
        </div>
    )
}

export default AddressItem