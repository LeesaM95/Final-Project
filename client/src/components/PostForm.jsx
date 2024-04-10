/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useMutation } from '@apollo/client';

import {ADD_POST} from '../utils/mutations';
import {QUERY_POSTS, QUERY_ME } from '../utils/queries';
import styled from 'styled-components';

import Auth from '../utils/auth';
import {Link} from 'react-router-dom';

// const Form = styled.form`
//         display: flex;
//         justify-content: center;
//         flex-flow: wrap row;
//         background-color: #F7F6FE;
//         height: 800px;
//         width: 900px;
//         padding: 20px;
//         margin: 20px;
//         border: solid 5px #455A30;
//         `
const TextArea = styled.textarea`
        align-self: center;
        height: 500px;
        width: 700px;
        background-color: white;
        border: solid 3px #0C1117;
        font-family: monospace;
        font-size: 12px;
        color: #01050A;
        padding-left: 5px;
        margin: 10px;`

const Button = styled.button`
        height: auto;
        width: auto;
        border: solid 3px #455A30;
        background-color: 0C1117;
        font-family: monospace;
        font-size: 12px;
        color: white;
        align-self: center;
        margin: 10px;`

const PostForm = () => {
  const [formState, setFormState] = useState({
    title: '',
    text: '',
    author: '',
  });

  const [addPost, { error}] = useMutation (ADD_POST, {
    refetchQueries: [
      QUERY_POSTS,
      'getPosts',
      QUERY_ME,
      'me'
    ]
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addPost({
        variables: {
          title,
          text,
          author
        }
      })
      setFormState({
        title: '',
        text: '',
        author: '',
      })

      addPost(data);
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === formState.text && formState.author && formState.title) {
      setFormState({...formState, [name]: value})
    } else if (name !== formState.text && formState.title && formState.author) {
      console.error({message: `Fields cannot be blank!`})
    }
  }

 if (Auth.loggedIn()) {
  // const { loading, error, data } = useQuery(QUERY_ME);
  return (
    <div>
      <h3>Shoot out a Panda Thought</h3>
      {/* <img src={panda3} /> */}
      <form
        onSubmit={handleFormSubmit}>
        <div>
          <input
            name="title"
            placeholder="Post Title"
            value={formState.title}
            onChange={handleChange}>
          </input>
        </div>
        <div>
          <TextArea
            name="text"
            placeholder="Here's a thought..."
            value={formState.text}
            onChange={handleChange}>
          </TextArea>
        </div>
        <div>
          <input
            name="author"
            placeholder="Username"
            value={formState.author}
            onChange={handleChange}>
          </input>
        </div>
        {/* <div>
          Username: {username}
        </div> */}
        <div>
          <Button type="submit">
            Add Post
          </Button>
        </div>
        {error && (
          <div>
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  )
} else {
  return (
    <div>
    <h3 style={{marginTop: "100px"}}>Shoot out a Panda Thought</h3>
    <p>
      You need to be logged in to post. Please{' '}
      <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
    </p>
    <h2 style={{fontSize: "55px"}}>Posts</h2>
    <ul>
      {data.posts.map(post => (
        <li key={post._id}>
          <h3 style={{fontSize: "35px"}}>{post.title}</h3>
          <p>{post.text}</p>
          <h4>Post by: {post.author}</h4>
        </li>
      ))}
    </ul>
  </div>
  );
}
}
export default PostForm;








