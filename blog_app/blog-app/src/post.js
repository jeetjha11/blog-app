import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {
  const { id } = useParams();
  const [post, setPost] = React.useState({});

  React.useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const response = await axios.get(`http://localhost:8000/api/posts/${id}`);
    setPost(response.data);
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default Post;