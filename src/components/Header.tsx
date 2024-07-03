import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "O NAS", href: "/about" },
  { label: "WESPRZYJ NAS", href: "/wsparcia" },
  // { label: "WYTWORY", href: "/wytwory" },
  { label: "PRACOWNIE", href: "/pracownie" },
  { label: "REKRUTACIA", href: "/rekrutacja" },
];

export const Header = () => {
  //   const match = useMatch({ path: "/*" });
  //   console.log(match?.pathname);
  return (
    <header className="header">
      <div className="header__contacts">
        <ul className="header__contacts-list container">
          <li className="header__contact">
            <a
              href="https://maps.app.goo.gl/8zxxwyjcUCs9jeJv5"
              target="_blank"
              className="header__contact-link"
            >
              <div className="md:block hidden">
                🚩 ul. Truskawkowa 4, 31-985 Kraków (Krakow-Nowa-Huta)
              </div>
              <div className="md:hidden">🚩 (map)</div>
            </a>
          </li>
          <li className="header__contact">
            <a href="tel:+126810477" className="header__contact-link">
              ☎ (12) 681 04 77
            </a>
          </li>
          <li className="header__contact">
            <a
              href="mailto:wtztpdtruskawkowa4@gmail.com"
              className="header__contact-link"
            >
              <div className="md:block hidden">
                ✉ wtztpdtruskawkowa4@gmail.com
              </div>
              <div className="md:hidden">✉ email</div>
            </a>
          </li>
        </ul>
      </div>
      <div className="header__menu container">
        <Link to="/" className="icon header__icon" />
        <nav className="nav">
          <ul className="nav__list">
            {navItems.map((link) => {
              //   const isActive = match?.pathname === link.href;

              return (
                <li className="nav-item" key={link.label}>
                  <NavLink to={link.href} className="nav-link">
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <button className="hidden">=</button>
      </div>
    </header>
  );
};
