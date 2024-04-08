import { Link } from 'react-router-dom';
import Navbar from './Header/NavBar';

export default function Nav() {
    return (
        <Navbar 
        links={[
            <Link key={1} to="/">Home</Link>,
            <Link key={2} to="/login">Login</Link>,
            <Link key={3} to="/signup">Sign Up</Link>,
            <Link key={4} to="/facts">Facts</Link>,
            <Link key={5} to="/forum">Forum</Link>,
            <Link key={6} to="/account">Account</Link>,
            <Link key={7} to="/deleteaccount">Delete Account</Link>
        ]}></Navbar>
    )
}