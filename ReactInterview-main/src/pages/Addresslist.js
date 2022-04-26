import React, { useState, useEffect } from 'react'
import AddressItem from 'components/AddressItem'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import Modal from 'components/Modal';

const Addresslist = () => {
    const cookies = new Cookies();
    const [addarr, setaddArr] = useState([])
    const [copyaddarr, setcopyaddarr] = useState([])
    const [modal, setmodal] = useState(false)
    const [deleteId, setdeleteId] = useState()
    const [search, setsearch] = useState('')
    const getAddData = cookies.get('addressData');
    console.log("getAddData",getAddData);
    useEffect(() => {
        if(getAddData){
            setaddArr(getAddData)
            setcopyaddarr(getAddData)
        }
    }, [])
    
    const handleSearch = (e) => {
        setsearch(e?.target?.value)
        console.log("search",search);
        let aaa = addarr.filter(item =>  item?.adress.toLowerCase().includes(e?.target?.value.toLowerCase()) )
        console.log("aaaa", aaa);
        setcopyaddarr(aaa)
        if(!e?.target?.value){
            setcopyaddarr(addarr)
        }
    }

    useEffect(() => {

    }, [])
    
    const handleDelete = (id) => {
        console.log("id", id);
        setdeleteId(id)
        setmodal(true)
        
    }
    const Cancleclick = () => {
        setmodal(false)
    }
    const DeleteYesClick = () => {
        let delArray =   copyaddarr.filter(item => item?.id != deleteId )
        setcopyaddarr(delArray)
        cookies.set('addressData',delArray, { path: '/' } )
        setmodal(false)
    }
  return (
     <>
        <div className='container'>
            <h1 className='text_center address_title'>Address Book</h1>
            <div className='text_center search_row'>
                <div className='field_row '>
                    <input type="text" className='bglight' name='search' placeholder='Search address hera...' onChange={handleSearch} />
                </div>
            </div>
            <div className='d_flex'>
                {
                    copyaddarr?.map((add, i) => {
                        return <AddressItem key={i} add={add} DeleteClick={ handleDelete }  />
                    })
                }
                
            </div>
            <div className='text_center button_wrapper'>
                <Link to="/add-address">Add New Address</Link>
            </div>
        </div>
                {
                    modal && <Modal message="Are you want to sure Delete" Cancleclick={Cancleclick} DeleteYes={DeleteYesClick} />
                }
     </> 
  )
}

export default Addresslist