import React from 'react';
import UserItem from './UserItem';
import './UserList.css';

class UserList extends React.Component {
  
    constructor(props) {
        
        super(props);
        this.state = {}
    }
    
   
      
    render () {
       return(
        <div className="container">
        <h2>Lista utilizatorilor:</h2>
        { this.props.users?.map((user, index) => {
            return(<div key={index}><UserItem
                id={user.id}
                name={user.name}
                email={user.email}
                isGoldClient={user.isGoldClient}
                key={index}
                username={user.username}
                phone={user.phone}
                 />
                <button onClick={() => this.props.deleteUser(user.id)}>Sterge user</button>
                </div>
                
            )
              
        })
        }
  </div>
       ) 
      
    }
        
        }



export default UserList;