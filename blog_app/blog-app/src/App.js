import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:8000/api/posts');
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.post_id}>
            <h2>{post.post_title}</h2>
            <p>{post.post_content.substring(0, 100)}...</p>
            <p>{post.posted_on}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;