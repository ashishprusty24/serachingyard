import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <div class="nav_logo">
      <img
        src="https://www.searchingyard.com/_next/static/media/icon.e85db0e4.svg"
        alt="logo"
      />
    </div>
    <div className={styles.nav_list}>
      <Link to="/product">
        <h2>Product</h2>
      </Link>
    </div>
  </div>
  )
}

export default Navbar