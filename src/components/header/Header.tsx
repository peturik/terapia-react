import { Link, NavLink } from "react-router-dom";
import { HeaderContacts } from "../header/HeaderContacts";
import styles from "./Header.module.css";
import { useState } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "O NAS", href: "/about" },
  { label: "WESPRZYJ NAS", href: "/wsparcia" },
  // { label: "WYTWORY", href: "/wytwory" },
  { label: "PRACOWNIE", href: "/pracownie" },
  { label: "REKRUTACIA", href: "/rekrutacja" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <HeaderContacts />
      <div className="header__menu container">
        <Link to="/" className="icon header__icon" />
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul className="nav__list">
            {navItems.map((link) => {
              return (
                <li className="nav-item" key={link.label}>
                  <NavLink
                    to={link.href}
                    className="nav-link"
                    onClick={() => isMenuOpen && toggleMenu()}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
        {isMenuOpen && (
          <div className={styles.backdrop} onClick={toggleMenu}></div>
        )}
      </div>
    </header>
  );
};
