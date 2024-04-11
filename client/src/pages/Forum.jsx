/* eslint-disable no-unused-vars */

import { useQuery } from '@apollo/client';

import PostList from '../components/PostList'
import PostForm from '../components/PostForm';

// import CommentForm from '../components/CommentForm';
// import CommentList from '../components/CommentList';

import { QUERY_COMMENTS, QUERY_POSTS } from '../utils/queries';

// import styled from 'styled-components';

// const H3 = styled.h3`
// font-family: monospace;
// font-size: 16px;
// color: #01050a;`

// const H4 = styled.h4`
// font-family: monospace;
// font-size: 12px;
// color: #0c1117;`

// const Span = styled.span`
// font-family: monospace;
// font-size: 14px;
// color: #455a30;
// font-style: bold;`

const Forum = () => {
  // const { postId } = useParams();
  // const { commentId } = useParams();
  const  { loading, data } = useQuery(QUERY_POSTS, {
    pollInterval: 5000
  });

  const post = data?.posts || [];
console.log("postData", post)
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    
    <div>
      
      <br />
        <div>
          <PostForm />
        </div>
        <div>
        <PostList posts={post} />
        </div>
      </div>
  )
};

export default Forum;