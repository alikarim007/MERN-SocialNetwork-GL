import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../App';

function Navbar() {
    const {state, dispatch} = useContext(UserContext);
    const renderList = () => {
      if(state){
            return [
              <li><Link to="/profile">Profile</Link></li>,
              <li><Link to="/create">Create Post</Link></li>
            ]
      }else{
          return [
            <li><Link to="/signin">Sign In</Link></li>,
            <li><Link to="/signup">Sign Up</Link></li>
         ]
      }
    }

    return(
        <nav>
        <div className="nav-wrapper blue">
          <Link to="/" className="brand-logo left">InstaBook</Link>
          <ul id="nav-mobile" className="right ">
                {renderList()}            
            </ul>
         </div>
        </nav>
    );

}
export default Navbar;