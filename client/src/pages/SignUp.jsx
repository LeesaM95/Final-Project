import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations'

import Auth from '../utils/auth';
import styled from 'styled-components'

const SignUp = () => {


    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    });

    const [addUser, { error, data }] = useMutation(ADD_USER);

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


    // eslint-disable-next-line no-unused-vars
    // Note from Leesa: I have no idea why it's reading as not being used when it CLEARLY is

    const form = styled.form`
        background-color: #F7F6FE;
        height: 800px;
        width: 900px;
        padding: 20px;
        margin: 20px;
        border: solid 5px #455A30;
        `
    const inputFirstName = styled.form`
        height: 30px;
        width: 350px;
        background-color: white;
        border: solid 3px #0C1117;
        font-family: monospace,
        font-size: 12px;
        color: #01050A;`

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
                                    style={{ cursor: 'pointer' }}
                                    type="submit">
                                    Submit
                                </button>
                            </form>
                        )}

                        {error && (
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