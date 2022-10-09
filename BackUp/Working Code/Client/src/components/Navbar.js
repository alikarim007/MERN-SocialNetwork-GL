import React,{useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
function Navbar() {
  const {state, dispatch} = useContext(UserContext);
  const navigate = useNavigate();
  const renderList = () => {
      if(state){
          return [
            <li><Link to="/profile">Profile</Link></li>,
            <li><Link to="/create">Create Post</Link></li>,
            <li><button className="btn #f44336 red" 
            onClick={()=>{
              localStorage.clear();
              dispatch({type:'CLEAR'});
              navigate('/signin');
            }}>Sign Out</button></li>
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