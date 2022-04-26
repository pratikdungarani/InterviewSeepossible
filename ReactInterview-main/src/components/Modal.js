import React from 'react'

function Modal({message, Cancleclick, DeleteYes}) {
  return (
    <div className='popup_overlay d_flex jus_center align_center'>
        <div className='popup'>
            <h4>{message}</h4>
            <div className='btn_wrp'>
                <button onClick={Cancleclick}>Cancle</button>
                <button  onClick={DeleteYes}>Yes</button>
            </div>
        </div>
    </div>
  )
}

export default Modal