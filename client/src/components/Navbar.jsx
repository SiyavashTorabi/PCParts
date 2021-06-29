
import { NavLink } from 'react-router-dom'



const alwaysOptions = (
    <>
        <NavLink className="link" to="/products">Products</NavLink>
    </>
)
const Nav = ({ user }) => {
        return (
            <nav>
                <div className="nav">
                    <NavLink className="logo" to="/">ProductsApp</NavLink>
                    <div className="links">
                        {user && <div className="link welcome">Welcome, {user.username}</div>}
                        {alwaysOptions}

                    </div>
                </div>
            </nav>
        )
}
export default Nav
