import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {
  
  const logout = () => {
    localStorage.removeItem("token")
    setUser({})
  };

  return (
    <ul className="user-auth">
      {user ? 
        <>
          <li style={{ color: "black" }}>Welcome {user}!</li>
          <li className="posts-nav">
            <Link to="/characters">Characters</Link>
          </li>
          <li onClick={logout}>
            <Link to="/login">Logout</Link>
          </li>
        </>
       : 
        <>
          <li className="posts-nav">
            <Link to="/characters">Characters</Link>
          </li>
          <div>
            <img className="logo" src="marvel logo.png" alt="logo"/>
        
            </div>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      }
    </ul>
  );
}

export default Navbar;
