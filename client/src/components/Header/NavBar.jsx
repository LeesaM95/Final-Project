/* eslint-disable react/prop-types */
export default function Nav({ links}) {
    return (
        <nav>
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