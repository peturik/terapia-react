export function HeaderContacts() {
  return (
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
  );
}
