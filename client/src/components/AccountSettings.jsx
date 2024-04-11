
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USERNAME, UPDATE_EMAIL, UPDATE_PASSWORD, DELETE_ACCOUNT } from '../utils/mutations';
import styled from 'styled-components';
import Auth from '../utils/auth'

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
const Input = styled.input`
        align-self: center;
        height: 30px;
        width: 350px;
        background-color: white;
        border: solid 3px #0C1117;
        font-family: monospace;
        font-size: 12px;
        color: #01050A;
        padding-left: 5px;
        margin: 10px;`

const Button = styled.button`
        height: 30px;
        width: 75px;
        border: solid 3px #455A30;
        background-color: 0C1117;
        font-family: monospace;
        font-size: 12px;
        color: white;
        align-self: center;
        margin: 10px;`

const AccountSettings = (props) => {
    console.log(props)
    // const [username, setUserName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [account, setAccount] = useState('');

    // const [setNewUsername] = useMutation(UPDATE_USERNAME);
    // const [setNewEmail] = useMutation(UPDATE_EMAIL);
    // const [setNewPassword] = useMutation(UPDATE_PASSWORD);


    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const { email } = await setNewEmail({
    //             variables: {email}
    //         })
    //         // const { username } = await setNewUsername({
    //         //     variables: { username }
    //         // })
    //         const { password } = await setNewPassword({
    //             variables: {password}
    //         })
    //         // const { user } = await deleteAccount({
    //         //     variables: {email, password}
    //         // })
    //         window.location.reload();
    //     } catch (err) {
    //         console.error(err)
    //     }
    // };

    if (Auth.loggedIn()) {
        return (
            <div>
                <h3>Account Settings</h3>
                
                    <form>
                    <div>
                        <div>Email</div>
                        <span>
                            <Input value={props.props.me.email}
                            onChange={(event) => setEmail(event.target.value)} />
                        </span>
                    </div>
                    <div>
                        <div>Password</div>
                        <span>
                            <Input value={''} 
                            onChange={(event) => setPassword(event.target.value)} />
                        </span>
                    </div>
                    <div>
                        <Button type="submit">
                            Update Profile
                        </Button>
                    </div>
                    <div>
                        {/* <Button value={account}
                        onClick={(event)}>
                            Delete Account
                        </Button> */}
                    </div>
                </form>
            </div>
        )
    } else {
        return (
            <h4>
                You need to be logged in to see your Account Settings Page. Please use the navigation links above to sign up or login!
            </h4>
        );
    }
    
}

export default AccountSettings;