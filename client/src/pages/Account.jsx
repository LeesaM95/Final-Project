/* eslint-disable no-unused-vars */
import { useQuery } from '@apollo/client';
import { Navigate, useParams } from 'react-router-dom';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import AccountSettings from '../components/AccountSettings.jsx';
import Auth from '../utils/auth';
// import styled from 'styled-components'

// // Styled Components
// const Form = styled.form`
//         display: flex;
//         justify-content: center;
//         flex-flow: wrap row;
//         background-color: #F7F6FE;
//         height: 800px;
//         width: 900px;
//         padding: 20px;
//         margin: 20px;
//         border: solid 5px #455A30;
//         `

    

const Account = () => {
    // const { findEmail } = useParams();
    var { loading, data } = useQuery(QUERY_ME);
    console.log(data)

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [account, setAccount] = useState('');
    
    
    if(loading) {
        return <div>Loading...</div>
    }
    if(!data?.me.email) {
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
                <div>
                    <AccountSettings />
                </div>
            </form>

        </div>
    )
}

export default Account;