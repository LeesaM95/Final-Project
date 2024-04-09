import { Link } from 'react-router-dom';
import Navbar from './Header/NavBar';
import Auth from '../utils/auth.js';

const styles = {
    navbarStyles : {
        background: '#f7f6fe',
        justifyContent: 'flex-end',
        padding: '5px',
        margin: '10px',
        fontSize: '24px',
        fontFamily: 'monospace',
        color: '#8E9A7A'
    }
}


//  function Navbar ({ links}) {
//     return (
//         <nav style={styles.navbarStyles} className="navbar">
//             <div>
//                 <div>
//                     <ul>
//                         {links.map((link) => link)}
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// }

function Nav() {

    // function showNavigation() {

    //     if (Auth.loggedIn()) {
    //         return (
    //             <Navbar>
    //                 links ={[
    //                     <Link key={3} to="/" onClick={() => Auth.logout()}>
    //                         Logout
    //                     </Link>,
    //                 ]}
    //             </Navbar>
    //         )
    //     } else {
    //         return (

    //             <Navbar>
    //                 links={[
    //                     <Link key={4} to="/signup"> Signup |</Link>,

    //                     <Link key={2} to="/login">
    //                         Login |
    //                     </Link>

    //                 ]}
    //             </Navbar>
    //         )
    //     }
    // }
    return (

        <nav style={styles.navbarStyles} className="navbar">
            <ul>
                <li>
                    <Link key={1} to="/">Home |</Link>
                </li>
                <li>
                    <Link key={5} to="/facts">Facts |</Link>
                </li>
                <li>
                    <Link key={6} to="/forum">Forum |</Link>
                </li>
                <li>
                    <Link key={7} to="/account">Account</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;