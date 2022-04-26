import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

export default function Hader() {
    const cookies = new Cookies();
    const udata = cookies.get('userdata')
    let navigate = useNavigate();

    const Signout = () => {
        cookies.remove('userdata');
        navigate('/')
    }
  return (
        <div className='header_wrap bglight'>
            <div className='container'>
                <div className='header_row d_flex jus_spbtw align_center'>
                    <div className='logo'>
                        <img src='/logo192.png' alt='logo' width="100" width="40" />
                    </div>
                    <div className='header_nav'>
                        {
                          udata ? <div className='d_flex'>
                                    <p>{udata?.fname} {udata?.lname} { " "}</p>
                                    <h4 className='pointer' onClick={Signout} >&nbsp; SignOut </h4>
                                </div>  
                          :
                            <>
                                <NavLink to="/" >Login</NavLink>
                                <NavLink to="/signup" >Signup</NavLink>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
  )
}
