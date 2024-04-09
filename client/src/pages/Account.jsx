import { useQuery } from '@apollo/client';
import { Navigate, useParams } from 'react-router-dom';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { AccountSettings } from '../components/AccountSettings/AccountSettings';
import Auth from '../utils/auth';
import styled from 'styled-components'

// Styled Components
const Form = styled.form`
        display: flex;
        justify-content: center;
        flex-flow: wrap row;
        background-color: #F7F6FE;
        height: 800px;
        width: 900px;
        padding: 20px;
        margin: 20px;
        border: solid 5px #455A30;
        `

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
            <Form>
                <div>
                    {AccountSettings}
                </div>
            </Form>

        </div>
    )
}

export default Account;