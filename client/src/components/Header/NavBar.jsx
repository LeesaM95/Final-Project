/* eslint-disable react/prop-types */

 function Navbar ({ links}) {
        return (
                <nav className="navbar">
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