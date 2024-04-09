import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import PostList from '../components/PostList'

import CommentForm from '../components/CommentForm';

import { QUERY_COMMENTS, QUERY_POSTS } from '../utils/queries';

import styled from 'styled-components';

const H3 = styled.h3`
font-family: monospace;
font-size: 16px;
color: #01050a;`

const H4 = styled.h4`
font-family: monospace;
font-size: 12px;
color: #0c1117;`

const Span = styled.span`
font-family: monospace;
font-size: 14px;
color: #455a30;
font-style: bold;`

const Forum = () => {
  const { postId } = useParams();
  const { commentId } = useParams();
  const { loading, data } = useQuery(QUERY_POSTS, QUERY_COMMENTS, {
    variables: {
      postId: postId,
      commentId: commentId,
    }
  });
  const post = data?.posts || [];

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    
    <div>
      <H3>{post.title}</H3>
      <H4>Created by <Span>{post.author}</Span></H4>
      <br />
        <div>
          {post.post?.length > 0 && <PostList posts={post.postId} />}
        </div>
        <div>
          Posted on {post.createdAt}
        </div>
        <div>
          <CommentList comments={post.comments} />
        </div>
        <div>
          <CommentForm postId={post._id} />
        </div>
      </div>
  )
};

export default Forum;