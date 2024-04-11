/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useMutation } from '@apollo/client';

import {ADD_POST} from '../utils/mutations';
import {QUERY_POSTS, QUERY_ME } from '../utils/queries';


import Auth from '../utils/auth';
import {Link} from 'react-router-dom';



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
          author,
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
    console.log(event.target.name);
    const { name, value } = event.target;

    if (name === "title") {
      setFormState({...formState, ["title"]: value})
    }

    if (name === "text") {
      setFormState({...formState, ["text"]: value})
    }

    if (name === "author") {
      setFormState({ ...formState, ["author"]: value})
    }
    console.log(formState)
    // if (name === formState.text && formState.author && formState.title) {
    //   setFormState({...formState, [name]: value})
    // } else if (name !== formState.text && formState.title && formState.author) {
    //   console.error({message: `Fields cannot be blank!`})
    // }
  }

 if (Auth.loggedIn()) {
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
          <textarea
            name="text"
            placeholder="Here's a thought..."
            value={formState.text}
            onChange={handleChange}>
          </textarea>
        </div>
        <div>
          <input
            name="author"
            placeholder="Username"
            value={formState.author}
            onChange={handleChange}>
          </input>
        </div>
        <div>
          <button type="submit">
            Add Post
          </button>
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
  </div>
  );
}
}
export default PostForm;








