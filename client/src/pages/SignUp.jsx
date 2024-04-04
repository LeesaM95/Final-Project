import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations'

import Auth from '../utils/auth';

const SignUp = () => {
    
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    });

    const [addUser, {error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        })
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <main>
            <div>
                <div>
                    <h4>Sign Up</h4>
                    <div>
                        {data ? (
                            <p>Success! You may now head{' '}
                            <Link to="/">back to the homepage.</Link></p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <input
                                className="form-input"
                                placeholder="first name"
                                name="first name"
                                type="text"
                                value={formState.firstName}
                                onChange={handleChange}></input>
                                <input
                                className="form-input"
                                placeholder="last name"
                                name="last name"
                                type="text"
                                value={formState.lastName}
                                onChange={handleChange}></input>
                                <input
                                className="form-input"
                                placeholder="Username"
                                name="username"
                                type="text"
                                value={formState.username}
                                onChange={handleChange}></input>
                                <input
                                className="form-input"
                                placeholder="email"
                                name="email"
                                type="text"
                                value={formState.email}
                                onChange={handleChange}></input>
                                <input
                                className="form-input"
                                placeholder="********"
                                name="password"
                                type="password"
                                value={formState.password}
                                onChange={handleChange}></input>
                                <button
                                style={{ cursor: 'pointer'}}
                                type="submit">
                                    Submit
                                </button>
                            </form>
                        )}

                        { error && (
                            <div>
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignUp;