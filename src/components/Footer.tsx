export const Footer = () => {
  return (
    <footer className="footer container">
      <div className="organization">
        <a
          href="https://mops.krakow.pl/"
          className="organization__link organization__link--mops"
        >
          <img className="organization__img" src="/photo/mops.jpg" alt="mops" />
        </a>
      </div>
      <div className="organization">
        <a
          href="https://www.pfron.org.pl/"
          className="organization__link organization__link--pfron"
        >
          <img className="organization__img" src="/photo/reb.png" alt="pfron" />
        </a>
      </div>
      <div className="organization">
        <a
          href="https://www.krakow.pl/"
          className="organization__link organization__link--krakow"
        >
          <img
            className="organization__img"
            src="/photo/krakow.png"
            alt="krakow"
          />
        </a>
      </div>
      <div className="organization">
        <a
          href="https://ngo.krakow.pl/"
          className="organization__link organization__link--ngo"
        >
          <img className="organization__img" src="/photo/ngo.jpg" alt="ngo" />
        </a>
      </div>
    </footer>
  );
};
