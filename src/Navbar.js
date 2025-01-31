import React from "react";
import logo from "./images/Bizino-data-science-logo.jpg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              <a href='#services'>Services</a>
            </button>
          </li>

          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              <a href='#industries'>Industries</a>
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              <a href='#about'>About</a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
