import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_COMMENTS } from '../utils/queries';

const Comments = () => {
    const { loading, data } = useQuery(QUERY_COMMENTS);
    const comments = data?.comments || [];
  
    return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <CommentForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CommentList
              comments={comments}
              title="Some comments..."
            />
          )}
        </div>
      </div>
    </main>
    );
};

export default Comments;