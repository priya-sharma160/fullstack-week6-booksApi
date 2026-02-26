import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleClick = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Book Library</h1>
      </Link>
      <div className="links">
        {isAuthenticated && (
          <div>
            <Link to="/books/add-book">Add Book</Link>
            <span>{JSON.parse(localStorage.getItem("user")).email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}
        {!isAuthenticated && (
          <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <button onClick={handleClick}>Log out</button>
        </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;