import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations'

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
                            <Form onSubmit={handleFormSubmit}>
                                <Input
                                    className="form-input"
                                    placeholder="first name"
                                    name="firstName"
                                    type="text"
                                    value={formState.firstName}
                                    onChange={handleChange}></Input>
                                <Input
                                    className="form-input"
                                    placeholder="last name"
                                    name="lastName"
                                    type="text"
                                    value={formState.lastName}
                                    onChange={handleChange}></Input>
                                <Input
                                    className="form-input"
                                    placeholder="Username"
                                    name="username"
                                    type="text"
                                    value={formState.username}
                                    onChange={handleChange}></Input>
                                <Input
                                    className="form-input"
                                    placeholder="email"
                                    name="email"
                                    type="text"
                                    value={formState.email}
                                    onChange={handleChange}></Input>
                                <Input
                                    className="form-input"
                                    placeholder="********"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}></Input>
                                <Button
                                    style={{ cursor: 'pointer' }}
                                    type="submit">
                                    Submit
                                </Button>
                            </Form>
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