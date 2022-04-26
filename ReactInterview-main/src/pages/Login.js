import React, { useState, useRef } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import TextField from 'components/TextField'

export default function Login() {
    const cookies = new Cookies();
    let navigate = useNavigate();
    const [userdata, setUserdata] = useState ({email:'',password:'', fname:'Pratik', lname:'dungarani'})
    const simpleValidator = useRef(new SimpleReactValidator())
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);


    const LoginSubmit = (e) => {
        e.preventDefault()
        if (simpleValidator.current.allValid()){
            cookies.set('userdata', userdata, { path: '/' });
            navigate('address-book')
        }else{
            simpleValidator.current.showMessages();
            forceUpdate()
        }
    }
    const handleChange = (e) => {
        const {name, value} = e?.target
        setUserdata({...userdata,[name]:value})
    }
  return (
      <>
            <h1 className='text_center login_header'>Custom Login Page</h1>
            <div className='login_box bglight'>
                {console.log("userdata",userdata)}
                <div>
                    <form onSubmit={(e) => LoginSubmit(e)}>
                        <TextField name="email" label="Email" handleChange={handleChange} userdata={userdata} error = {simpleValidator.current.message('email', userdata?.email, 'required|email')} />

                        {/* <div className='field_row'> 
                            <label>Email</label>
                            <div>
                                <input type="text" name="email" value={userdata?.email} placeholder="Email" onChange={handleChange}/>
                            </div>
                            {simpleValidator.current.message('email', userdata?.email, 'required|email')} 
                        </div> */}
                        <div className='field_row'>
                            <label>Password</label>
                            <div>
                                <input type="text" name="password" value={userdata?.password} placeholder="*****" onChange={handleChange} />
                            </div>
                            {simpleValidator.current.message('password', userdata?.password, 'required')} 
                        </div>
                        <button>Sign in</button>
                    </form>
                </div>
            </div>
      </>
  )
}
