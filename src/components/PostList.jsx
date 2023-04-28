import React from 'react';
import PostItem from "./PostItem";
import './PostList.css';

class PostList extends React.Component {
  
    constructor(props) {
        
        super(props);
        this.state = {}
    }

   
   
    render() {
        
        return(
            <div className='list-container'>
               {
                this.props.posts?.map((post, index) => {
                    return <PostItem 
                        userId={post.userId}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        key={index}
                    />
                })
               }
            </div>
        );
    }
}


export default PostList;