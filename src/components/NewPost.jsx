import React from 'react';
import "../css/NewPost.css";

export const NewPost = () => {
  return (
    <div className='new-post' >
        <div className='post-left' >

        </div>
        <div className='post-right' >
            <input type='textbox' placeholder='Enter Caption' />
            <button className='post-btn' >Post</button>
        </div>
    </div>
  )
}
