import React, { useState } from 'react';
import "../css/NewPostIcon.css";

import Crossicon from "../assets/cross.png";
import PlusIcon from "../assets/plus.png";

export const NewPostIcon = () => {
    const [openStatus, setOpenStatus] = useState(false);
  return (
    <div className='new-post-icon' >
        {
            openStatus 
                ? <img src={Crossicon}  onClick={() => (setOpenStatus(prev => !prev))} /> 
                : <img src={PlusIcon}  onClick={() => (setOpenStatus(prev => !prev))} />
        }
    </div>
  )
}
