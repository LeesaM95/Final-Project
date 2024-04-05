import { Link } from 'react-router-dom';
import Navbar from './NavBar';

export default function Nav() {
    return (
        <Navbar 
        links={[
            <Link key={1} to="/">Home</Link>,
            <Link key={2} to="/login"></Link>,
            <Link key={3} to="/signup"></Link>,
            <Link key={4} to="/facts"></Link>,
            <Link key={5} to="/forum"></Link>,
            <Link key={6} to="/account"></Link>,
            <Link key={7} to="/deleteaccount"></Link>
        ]}></Navbar>
    )
}