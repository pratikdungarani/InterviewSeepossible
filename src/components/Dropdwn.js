import React from 'react'

const  Dropdwn = ({label, name, value, handleChange, error, userdata, placeholder, optionsData}) =>  {

    const options = optionsData.map((item,i) => {
        return <option key={i} value={item}>{item}</option>
    })

  return (
    <div className='field_row'>
        <label>{label}</label>
        <div>
           <select name={name} onChange={handleChange} value={value}>
               {options}
           </select>
        </div>
        {error && error }
    </div>
  )
}

export default Dropdwn