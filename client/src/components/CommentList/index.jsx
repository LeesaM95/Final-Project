/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Auth from '../../utils/auth'
import Link from 'react-router-dom';

const CommentList = ({ comments = []}) => {
  if(!comments.length) {
    return <h3>No Comments Yet</h3>
  }

  if(Auth.loggedIn()) {
    return (
      <><h3>Comments</h3><div>
        {comments && comments.map((comment) => (
          <div key={comment._id}>
            <div>
              <h4>{comment.author} <span> {comment.createdAt}</span></h4>
              <p>
                {comment.text}</p>
            </div>
          </div>
        ))}
      </div></>
    )
  } else {
    <Link to='/login'>Please Login to comment on this post!</Link>
  }
}
export default CommentList;