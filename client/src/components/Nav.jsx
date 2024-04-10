import { Link } from 'react-router-dom';
import '../App.css'

const styles = {
    navBarStyles: {
        background: '#f7f6fe',
        float:'right',
        padding: '5px',
        margin: '-20px -10px 10px 10px',
        fontSize: '24px',
        fontFamily: 'monospace',
        color: '#8E9A7A',
        height: '150px',
        width: '100%'
    }
}

function Nav() {

    return (

        <nav style={styles.navBarStyles} className="navbar">
            <header style={{height: "150px", marginBottom: "20px", float: "left", }}>
                    <h2 style={{fontSize: "50px", fontWeight: "bold", color:"#455a30", marginLeft:"50px"}}>Peace For Pandas</h2>
                </header>
                <div style={{float: "right", marginRight:"40px", marginTop: "90px", color: "#8e9a7a"}}>
                <Link key={1} to="/"> Home | </Link>
                <Link key={5} to="/facts">Facts | </Link>
                <Link key={6} to="/forum">Forum | </Link>
                <Link key={7} to="/account">Account</Link>
                </div>
            
        </nav>
    )
}

export default Nav;