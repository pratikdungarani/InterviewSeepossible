import React from 'react'

const  TextField = ({label, name, value, handleChange, error, userdata, placeholder}) => {
  return (
    <div className='field_row'>
        <label>{label}</label>
        <div>
            <input type="text" name={name} value={value} placeholder={placeholder} onChange={handleChange} />
        </div>
        {error && error }
    </div>
  )
}

export default TextField