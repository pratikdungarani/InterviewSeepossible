import React, {useState, useRef, useEffect} from 'react'
import SimpleReactValidator from 'simple-react-validator';
import Cookies from 'universal-cookie';
import { useNavigate, useParams } from "react-router-dom";
import TextField from 'components/TextField'
import Dropdwn from 'components/Dropdwn';

function AddAddress() {
    const cookies = new Cookies();
    let navigate = useNavigate();
    let { id } = useParams();
    const simpleValidator = useRef(new SimpleReactValidator())
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const [cities] = useState(["Surat","Bhavnagar","Ahmdabad"])
    const [states] = useState(["Gujarat","Banglor","Haidrabad"])
    const [countries] = useState(["India","Canada","Australiya"])
    const [addArray, setaddArray] = useState([])
    const [address, setAddress] = useState(
            {
                id:Math.floor(Math.random()*90000) + 1000000,
                fname:'',
                lname:'',
                adress:'',
                city:'',
                state:'',
                country:'',
                telephone:''
            }
    )

    useEffect(() => {
        let getdata = cookies.get('addressData');
        if(getdata) setaddArray(getdata);
        console.log("getdata", getdata);
        if(id){
            let EditData = getdata.find(o => o.id === Number(id));
            console.log("EditData", EditData);
            setAddress(EditData)
        } 
    }, [])
    
    const SubmitAddress = (e) => {
        e.preventDefault()
        if (simpleValidator.current.allValid()){
            if(id){
                // Update Form
              let updatedOSArray =   addArray.map((item) => item?.id === Number(id) ? {...item,
                    fname:address?.fname,
                    lname:address?.lname,
                    adress:address?.adress,
                    city:address?.city,
                    state:address?.state,
                    country:address?.country,
                    telephone:address?.telephone
                    } : item
                )
                setaddArray(updatedOSArray)
                cookies.set('addressData',updatedOSArray, { path: '/' } )
                navigate('/address-book')
            }else{
                // Create Form
                let array = [...addArray]
                array.push(address)
                setaddArray(array)
                cookies.set('addressData',array, { path: '/' } )
                navigate('/address-book')
            }
        }else{
            simpleValidator.current.showMessages();
            forceUpdate()
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setAddress({...address,[name]:value})
    }

  return (
    <div className='add_wrap'>
        <div className='container'>
            <div className='bglight address_boxform'>
                <p className='address_boxform_id'>Account ID: # {address?.id}</p>
                <form onSubmit={(e) => SubmitAddress(e)}>
                    <div className='field_two d_flex jus_spbtw'>
                        <TextField name="fname" label="First Name" value={ address?.fname} handleChange={handleChange} userdata={address} error = {simpleValidator.current.message('fname', address?.fname, 'required')} />
                        <TextField name="lname" label="Last Name" handleChange={handleChange} userdata={address} />
                    </div>
                    <div className='field_row'>
                        <label>Address</label>
                        <textarea  name="adress" value={address?.adress} onChange={handleChange} /> 
                    </div>
                    <div className=' field_two d_flex jus_spbtw'>
                        <Dropdwn label={"City"} value={address?.city} optionsData={cities} name="city" handleChange={handleChange} />
                        <Dropdwn label={"State"} value={address?.state} optionsData={states} name="state" handleChange={handleChange} />
                    </div>
                    <Dropdwn label={"Country"} optionsData={countries} value={address?.country} name="country" handleChange={handleChange} />
                    <TextField name="telephone" label="Telephone" value={ address?.telephone} handleChange={handleChange} userdata={address} error = {simpleValidator.current.message('telephone', address?.telephone, 'required|phone')}/>

                    <div className='field_row'>
                        {
                            
                        <button className='btn_primary'>{id ? "Update Data" : "Save Address"}</button>
                        }
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default AddAddress