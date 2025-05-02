// import React from 'react' // ts 에서는 알아서 해주기 때문에 없어도 됨
import { Link } from "react-router-dom";
import '../assets/sass/navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">Typescript Project</div>
        <ul className="nav-links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar