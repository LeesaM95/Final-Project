/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom';


const PostList = ({ posts, title}) => {
    // if(!posts.length) {
    //     return <h3> No Posts Yet</h3>
    // }

    return (
        <div>
            <h3>{title}</h3>
            {posts &&
            posts.map((post) => (
                <><div key={post._id}>
                    <h4>Created by <span>{post.author}</span></h4>
                    <br />
                    <div>
                        <p>{post.text}</p>
                    </div>
                    <div>
                        Posted on {post.createdAt}
                    </div>
                </div>
                </>
            ))}
        </div> 
    )
}

export default PostList;