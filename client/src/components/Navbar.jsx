
import { NavLink } from 'react-router-dom'




const Nav = ({ user }) => {
  return (
    <nav>
      <img className="w-full h-80" src="https://media.gq-magazine.co.uk/photos/60ad10bf8f49c47fbca5e53d/16:9/w_2560%2Cc_limit/24052021_ROB_01.jpg" alt="gaming rig" />
      <div className="box-content h-6 w-100 p-4 flex justify-start bg-green-700 text-white mb-32" >

        <NavLink className="inline-block ml-10" to="/">Home</NavLink>
        <NavLink className="inline-block ml-10" to="/products">PC Parts</NavLink>
        <NavLink className="inline-block ml-10" to="/add-product">Add PC Part </NavLink>
        <div className="links">




        </div>
      </div>
    </nav>
  )
}
export default Nav
