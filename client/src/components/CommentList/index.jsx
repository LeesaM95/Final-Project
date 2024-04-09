/* eslint-disable react/prop-types */
const CommentList = ({ comments = [] }) => {
    console.log(comments);
    if(!comments.length) {
        return <h3> No Comments Yet</h3>
    }

    return (
        <>
       <h3>Comments</h3>
       <div>
        {comments && comments.map((comment) => (
            <div key={comment._id}>
                <div>
                    <h5>${comment.author} commented{' '}
                    <span>
                        on {comment.createdAt}
                        </span></h5>
                        <p>{comment.text}</p>
                </div>
            </div>
        ))}
       </div>
    </>
    );
}

export default CommentList;