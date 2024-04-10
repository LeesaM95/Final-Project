/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import styled from 'styled-components';
import Auth from '../utils/auth';
import Home from '../pages/Home';

const FormBackground = styled.div`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      height: 700;
      width: 900;
      background-color: #F7F6FE;
      border: solid 3px #8e9a7a;
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
        margin: 10px;`




function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });

      const token = (mutationResponse.data.login.token);
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }

  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };



  return (
    <>
      <FormBackground>
        <div style={{ alignContent: "center", fontFamily: "monospace", fontSize: "20px", margin: "15px" }}>
          <Link to="/signup">Sign Up Here</Link>
        </div>
        <h3>Login</h3>
    {data ? (
      <p>Success! You may now head{' '}
      <Link to="/">back to the Homepage!</Link></p>
    ) : (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email Address:</label>
            <Input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="pwd">Password: </label>
            <Input
              placeholder="*******"
              name="password"
              id="pwd"
              onChange={handleChange} />
          </div>
          {error ? (
            <div>
              <p> Email or Password Incorrect!</p>
            </div>
          ) : null}
          <div>
            <button type="submit" onSubmit={Home}>Submit</button>
          </div>
        </form>
        )}
      </FormBackground>
    </>
  )
}
export default Login;