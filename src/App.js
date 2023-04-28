import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from './components/PostList';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color: 'black',
      users: [],
      posts: [],
      var1: 0,
      var2: 0
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
        });
        this.setState({users: data});
      })


      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const filteredJson2 = json.filter(post => post.id < 4);
        filteredJson2.forEach((post)=> {
          this.setState({posts: filteredJson2})
        })
      })

  }

  changeBackgroundColor(event) {
    this.setState({background: event.target.value});
  }

  changeColor(event) {
    this.setState({color: event.target.value});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }
  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  submitAddForm(event, name, email, isGoldClient) {
    event.preventDefault();

      // const x= this.isValidEmail(event.target.value) 
      //   x === false
      !this.isValidEmail(email)
        ? alert('Please enter a valid email')
         :this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient
          }
        ]
      }
      
    });
    

  
  }

   
  showUser(event) {
   
   
   this.setState({var1: event.target.value, var2: 0});
  }
  showPost(event){
    this.setState({var2: event.target.value, var1: 0});
  }

  
  deleteUser(id) {
    const userL = this.state.users  
    const updatedUsers = userL.filter(user => user.id !== id);
    this.setState({users: updatedUsers})  ;
  
 } 
  

  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.color}}>
        <h1>Admin panel - Proiectul 1</h1>
        <UserAddForm submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)}/>
        
        { this.state.var1 === ''
            ? <UserList users={this.state.users} deleteUser={(id) => this.deleteUser(id)} className="userList"/>
            : null
            
        }
        
        { this.state.var2 === ''
            ? <PostList posts={this.state.posts} className="postList" /> 
            : null
            }

        <input type="color" onChange={(event) => this.changeBackgroundColor(event)}  className="colorInput"/>
        <input type="color" onChange={(event) => this.changeColor(event)} className="colorInput"/>

        <button onClick={(event) => this.showUser(event)} className="show-btn">Afiseaza Useri</button>
        <button onClick={(event) => this.showPost(event)} className="show-btn">Afiseaza Postari</button>
      </div>
    );
  }
}

export default App;
