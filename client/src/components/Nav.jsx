import { Link } from 'react-router-dom';
import Navbar from './Header/NavBar';
import Auth from '../utils'

function Nav() {

    function showNavigation() {

        if (Auth.loggedIn()) {
            return (
                <Navbar>
                    links ={[
                        <Link key={3} to="/" onClick={() => Auth.logout()}>
                            Logout
                        </Link>,
                    ]}
                </Navbar>
            )
        } else {
            return (

                <Navbar>
                    links={[
                        <Link key={4} to="/signup"> Signup |</Link>,

                        <Link key={2} to="/login">
                            Login |
                        </Link>

                    ]}
                </Navbar>
            )
        }
    }
    return (
        <Navbar>
            links={[
                <Link key={1} to="/">Home |</Link>,
                <Link key={5} to="/facts">Facts |</Link>,
                <Link key={6} to="/forum">Forum |</Link>,
                <Link key={7} to="/account">Account</Link>,
            ]}
            {showNavigation()};
        </Navbar>
    )
}

export default Nav;