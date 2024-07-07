"use client";
import { useState, useRef } from "react";
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
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="main__left-side col col__aside-pracownie md:rounded-l-2xl">
      <div>
        <button onClick={toggleMenu} className={styles.menuButton}>
          Pracownie Menu
        </button>
        <nav
          ref={contentRef}
          className={clsx(isOpen || styles.menuContent, "nav md:pt-8")}
          style={{ height: isOpen ? contentRef.current?.scrollHeight : "0px" }}
        >
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
