
import { NavLink } from 'react-router-dom'



const alwaysOptions = (
    <>
        <NavLink className="link" to="/products">PC Parts</NavLink>
    </>
)
const Nav = ({ user }) => {
        return (
            <nav>
            <div className="nav">
            <NavLink className="link" to="/add-product">Add PC Part </NavLink>
                    <NavLink className="logo" to="/">Home</NavLink>
                    <div className="links">
                       
                        {alwaysOptions}

                    </div>
                </div>
            </nav>
        )
}
export default Nav
