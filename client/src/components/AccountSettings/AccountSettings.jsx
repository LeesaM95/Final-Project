
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USERNAME, UPDATE_EMAIL, UPDATE_PASSWORD, DELETE_ACCOUNT } from '../../utils/mutations';


const AccountForm = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [account, setAccount] = useState('');

    const [setNewUsername] = useMutation(UPDATE_USERNAME);
    const [setNewEmail] = useMutation(UPDATE_EMAIL);
    const [setNewPassword] = useMutation(UPDATE_PASSWORD);
    const [deleteAccount] = useMutation(DELETE_ACCOUNT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { email } = await setNewEmail({
                variables: {email}
            })
            const { username } = await setNewUsername({
                variables: { username }
            })
            const { password } = await setNewPassword({
                variables: {password}
            })
            const { account } = await deleteAccount({
                variables: { account, email, password}
            })
            window.location.reload();
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <div>
            <h3>Account Settings</h3>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <div></div>
                    <span>
                        <input value={username} 
                        onChange={(event) => setUserName(event.target.value)} />
                    </span>
                </div>
                <div>
                    <div></div>
                    <span>
                        <input value={email} 
                        onChange={(event) => setEmail(event.target.value)} />
                    </span>
                </div>
                <div>
                    <div></div>
                    <span>
                        <input value={password} 
                        onChange={(event) => setPassword(event.target.value)} />
                    </span>
                </div>
                <div>
                    <button type="submit">
                        Update Profile
                    </button>
                </div>
                <div>
                    <button value={account}
                    onClick={(event) => setAccount(event.target.value)}>
                        Delete Account
                    </button>
                </div>
            </form>
        </div>
    )
    
}

export default AccountForm;