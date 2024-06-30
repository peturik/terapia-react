import { NavLink } from "react-router-dom";

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
  return (
    <aside className="main__left-side col col__aside-pracownie">
      <nav className="nav pt-8">
        <ul className="flex-col">
          {navItem.map((item) => (
            <li className="nav-item" key={item.label}>
              <NavLink to={item.href} className="nav-link">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
