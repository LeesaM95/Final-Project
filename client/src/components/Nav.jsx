import { Link } from 'react-router-dom';


const styles = {
    navBarStyles: {
        background: '#f7f6fe',
        justifyContent: 'flex-end',
        padding: '5px',
        margin: '10px',
        fontSize: '24px',
        fontFamily: 'monospace',
        color: '#8E9A7A'
    }
}

function Nav() {

    return (

        <nav style={styles.navBarStyles} className="navbar">
            links={[
                <Link key={1} to="/"> Home |</Link>,
                <Link key={5} to="/facts">Facts |</Link>,
                <Link key={6} to="/forum">Forum |</Link>,
                <Link key={7} to="/account">Account</Link>,
            ]}
            
        </nav>
    )
}

export default Nav;