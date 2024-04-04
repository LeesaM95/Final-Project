import { useQuery } from '@apollo/client';
import { Navigate, useParams } from 'react-router-dom';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';


const Account = () => {
    const { findUsername } = useParams();
    const { loading, data } = useQuery(
       findUsername ? QUERY_USER : QUERY_ME,
        {
            variables: { username: username}
        }
    );
    const username = data?.me || data?.username || {};

    if (Auth.loggedIn() && Auth.getUser().data._id === findUsername) {
        return <Navigate to="/me" />
    }
    if(loading) {
        return <div>Loading...</div>
    }
    if(!username?.name) {
        return (
            <h4>
                You need to be logged in to see your Account Settings Page. Please use the navigation links above to sign up or login!
            </h4>
        );
    }

    return (
        <div>
            <h2>Account Settings</h2>
            <form>
                <div>Username <span><input>Change Username</input></span></div>
                <div>Email <span><input>Update Email</input></span></div>
                <div>Password <span><input>Change Password</input></span></div>
                <div>Re-Enter Password <input></input></div>
                <div>Delete Account</div>
            </form>

        </div>
    )
}

export default Account;