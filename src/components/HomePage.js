import React, { useEffect, useState } from 'react';
import Post from './Post';
import '../styles/homepage.css';
import axios from 'axios';

const HomePage = ({ onCreatePost, onEditPost, onDeletePost }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5003/post/get-posts").then(res=>{
      console.log('res: ', res);
      setPosts(res.data);
    })
    
  }, [])
  
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1 className="homepage-title">Post Feed</h1>
        <button className="create-post-button" onClick={()=>{window.location.href="/create"}}>
          <i className="fas fa-plus"></i> Create Post
        </button>
      </header>
      <div className="post-list">
        {posts?.map((post) => (
          <Post
            key={post._id}
            username={post.user_id.username??''}
            date={post.date}
            content={post.content}
            id={post._id}
            onEdit={() => onEditPost(post.id)}
            onDelete={() => onDeletePost(post.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;