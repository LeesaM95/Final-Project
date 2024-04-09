/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
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


const PostList = ({ posts, title}) => {
    // if(!posts.length) {
    //     return <h3> No Posts Yet</h3>
    // }

    return (
        <div>
            <H3>{title}</H3>
            {posts &&
            posts.map((post) => (
                <><div key={post._id}>
                    <H4>Created by <Span>{post.author}</Span></H4>
                    <br />
                    <div>
                        <p>{post.text}</p>
                    </div>
                    <div>
                        Posted on {post.createdAt}
                    </div>
                </div>
                <Link to={`/posts/${post._id}`}>
                        Join the discussion on this post!
                </Link></>
            ))}
        </div> 
    )
}

export default PostList;