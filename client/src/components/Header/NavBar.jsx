/* eslint-disable react/prop-types */
const styles = {
    navbarStyles : {
        background: '#f7f6fe',
        justifyContent: 'flex-end',
        padding: '5px',
        margin: '10px',
        fontSize: '24px',
        fontFamily: 'monospace',
        color: '#8E9A7A',
        height: '150px'
    }
}


 function Navbar ({ links}) {
    return (
        <nav style={styles.navbarStyles} className="navbar">
            <div>
                <div>
                    <ul>
                        {links.map((link) => link)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;