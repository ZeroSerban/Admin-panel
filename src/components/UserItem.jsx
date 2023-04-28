import React from 'react';
import './UserItem.css'
function UserItem(props) {
    const {name, email, isGoldClient,username, phone } = props;
   
   
      
    return (
        <div className="user-item">
            <h3>{ name }</h3>
            <p>{ email }</p>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <p>{ username }</p>
            <p>{ phone }</p>
            
        </div>
    );
}

export default UserItem;