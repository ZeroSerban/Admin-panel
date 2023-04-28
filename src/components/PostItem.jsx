import React from 'react';
import './PostItem.css';

function PostItem(props) {

    const {userId, id, title, body} = props;
    

    return(
        <div className='post-container'>
            <h2>{ title }</h2>
            <p>{ body }</p>
            <p>{ userId }</p>
            <p>{ id} </p>
        </div>
    );
}


export default PostItem;