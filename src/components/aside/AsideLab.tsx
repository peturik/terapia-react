"use client";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Aside.module.css";
import clsx from "clsx";

const navItem = [
  { label: "Pracownia Plastyczna", href: "/pracownie/plastyczna" },
  {
    label: "Pracownia komputerowo introligatorska",
    href: "/pracownie/komputerowa",
  },
  { label: "Pracownia Krawiecka", href: "/pracownie/krawiecka" },
  { label: "Pracownia Rzemiosł różnych", href: "/pracownie/rzemiosl" },
  { label: "Pracownia Gospodarstwa domowego", href: "/pracownie/gospodarstwa" },
  { label: "Psycholog", href: "/pracownie/psycholog" },
  { label: "Rewalidacja", href: "/pracownie/rewalidacja" },
];

export function AsideLab() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="main__left-side col col__aside-pracownie md:rounded-l-2xl">
      <div className={styles.accordionMenu}>
        <button onClick={toggleMenu} className={styles.menuButton}>
          Pracownie Menu
        </button>
        <nav className={clsx(isOpen || styles.navMobile, "nav md:pt-8")}>
          <ul className="flex-col">
            {navItem.map((item) => (
              <li className="nav-item" key={item.label}>
                <NavLink
                  to={item.href}
                  className="nav-link"
                  onClick={toggleMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
