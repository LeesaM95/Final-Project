/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../utils/mutations';


// import Auth from '../../utils/auth';

const CommentForm = ({ postId }) => {
  const [text, setText] = useState();
  const [addComment, { error }] = useMutation(ADD_COMMENT);
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          postId, text
        }
      })

      setText('')
    } catch (err) {
      console.error(err)
    }

    return (
      <div>
        <h3>Pandas on your mind?</h3>
          <>
            <form
              
              onSubmit={handleFormSubmit}
            >
              <div >
                <textarea
                  name="text"
                  placeholder="Here's a new comment..."
                  value={text}
                  
                ></textarea>
              </div>
  
              <div className="col-12 col-lg-3">
                <button className="btn btn-primary btn-block py-3" type="submit">
                  Add Comment
                </button>
              </div>
              {error && (
                <div className="col-12 my-3 bg-danger text-white p-3">
                  {error.message}
                </div>
              )}
            </form>
          </>
        
          <p>
            You need to be logged in to comment. Please{' '}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
      </div>
    );
  };
};
 

export default CommentForm;

