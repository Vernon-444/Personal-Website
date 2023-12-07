import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo-title">
        <nav className="navbar-image-container" />
        <h1 className="navbar-title">Personal Website</h1>
      </div>
      <div className="navbar-links">
        <button className="navbar-link">Section1</button>
        <button className="navbar-link">Section2</button>
        <button className="navbar-link">Section3</button>
      </div>
    </nav>
  );
};

export default Navbar;