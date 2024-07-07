import { Aside } from "../components/aside/Aside";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="container site-about">
      <div className="row">
        <Aside style={"rounded-bl-2xl"} />
        <div className="main__content rounded-r-2xl">
          <h1>
            Warsztat Terapii Zajęciowej, ul. Truskawkowa 4, <br /> 31-985 Kraków
            (Kraków-Nowa-Huta)
          </h1>
          <article>
            <p>
              <b>tel.</b>: 12 681 04 77 | 455 442 864
            </p>
            <p>
              <b>e-mail</b>: wtztpdtruskawkowa4@gmail.com{" "}
            </p>
            <p>
              <b>godziny otwarcia</b>: od poniedziałku do piątku 7:30 - 15:30
            </p>
            <p>
              <b>kierownik jednostki</b>: mgr Marta Czachura
            </p>

            <h4>
              Zapraszamy do śledzenia nas na Facebooku:
              <a href="https://www.facebook.com/people/WTZ-Truskawkowa-Krak%C3%B3w/100079164793979/">
                www.facebook.com
              </a>
            </h4>
          </article>
          <article>
            <h2>Dostępność architektoniczna</h2>
            <ul>
              <li>
                Do WTZ przy ul. Truskawkowa 4, można dojechać komunikacją
                miejską (liniami tramwajowymi 10 lub 21 przystanek: Pleszów +
                autobusem 131 przystanek: Kąkolowa 2)
              </li>
              <li>
                Przed wejściem do budynku przy ul. Truskawkowa 4, wyznaczone są
                miejsca do parkowania.
              </li>
              <li>
                Istnieje możliwość dowozu Uczestników z wyznaczonych lokalizacji
                blisko miejsca zamieszkania
              </li>
              <li>
                Warsztat znajduje sie na I piętrze jednopiętrowego budynku bez
                windy
              </li>
            </ul>
            <p>
              W WTZ przy ul. Truskawkowej 4, odbywają się zajęcia w 5
              pracowniach terapeutycznych, które prowadzą instruktorzy terapii
              zajęciowej. W placówce pracują psycholog i specjalista ds.
              rewalidacji.
            </p>
          </article>
          <article>
            <h2>Nasze pracownie, to:</h2>
            <ul>
              <li>
                <Link to="/pracownie/gospodarstwa" className="underline">
                  pracownia gospodarstwa domowego
                </Link>
              </li>
              <li>
                <Link to="/pracownie/rzemiosl" className="underline">
                  rzemiosł różnych
                </Link>
              </li>
              <li>
                <Link to="/pracownie/krawiecka" className="underline">
                  krawiecka
                </Link>
              </li>
              <li>
                <Link to="/pracownie/plastyczna" className="underline">
                  plastyczna
                </Link>
              </li>
              <li>
                <Link to="/pracownie/komputerowa" className="underline">
                  komputerowo - introligatorska
                </Link>
              </li>
            </ul>
            <p>
              Prace naszych uczestników wykonane podczas zajęć w pracowni
              plastycznej pokazują niezwykłe talenty i kreatywność. Oto katalog
              prac:
              <a
                href="https://online.pubhtml5.com/itmli/wrxs/"
                className="underline text-slate-600"
                target="_blank"
              >
                {" "}
                galerii prac.
              </a>
            </p>
            <p>
              W warsztacie zdobędziesz umiejętności potrzebne do pracy i
              samodzielnego życia!
            </p>

            <p>
              Warsztat może Ci pomóc w znalezieniu stażu lub praktyki zawodowej.
            </p>

            <p>
              W pracowniach przygotowujemy różne wytwory, które prezentujemy w
              czasie kiermaszy i imprez okolicznościowych.
            </p>

            <p>
              Organizujemy wiele wycieczek i uczestniczymy w wydarzeniach
              kulturalnych.
            </p>

            <p>
              <b>Każdy uczestnik warsztatu ma swój IPRIT</b>, czyli indywidualny
              program rehabilitacji i terapii, który układa{" "}
              <b>Rada Programowa razem z Tobą.</b>
            </p>

            <p>
              Rada Programowa to pracownicy warsztatu, którzy prowadzą zajęcia.
              W tym dokumencie zapisane są cele, nad którymi będziesz pracować w
              ciągu całego roku.
              <br />
              Celami mogą być umiejętności społeczne i zawodowe.
            </p>

            <p>
              <b>Kompetencje społeczne, to umiejętności:</b>
            </p>
            <ul>
              <li>adaptacji społecznej</li>

              <li>komunikacyjne</li>

              <li>pracy w zespole</li>

              <li>decydowania o sobie</li>

              <li>rozwiązywania konfliktów</li>
            </ul>

            <p>
              <b>Umiejętności zawodowe to na przykład:</b>
            </p>
            <li>obsługa komputera </li>
            <li>gotowanie i umiejętności cateringowe </li>
            <li>malowanie obrazów</li>
            <li>szycie ręczne i na maszynie</li>
            <li>cięcie i szlifowanie drewnianych elementów</li>

            <p>
              Działalność Warsztatu Terapii Zajęciowej przy ul. Truskawkowa 4 w
              Krakowie jest dofinansowana ze środków
              <b>Państwowego Funduszu Rehabilitacji Osób Niepełnosprawnych</b>
              będących w dyspozycji <b>Miejskiego Ośrodka Pomocy Społecznej</b>
              oraz współfinansowana ze środków <b>Gminy Miejskiej Kraków</b>.
            </p>

            <p>Dokumenty potrzebne do przyjęcia:</p>
            <ol>
              <li>
                Ważne orzeczenie o stopniu niepełnosprawności ze wskazaniem do
                terapii zajęciowej w ramach WTZ
              </li>
              <li>
                Podanie o przyjęcie do WTZ{" "}
                <a
                  href="/Załącznik_nr_3_do_umowy_podanie.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" underline"
                >
                  (download)
                </a>
              </li>
              <li>Dokumenty dodatkowe - opinia psychologiczna</li>
            </ol>
          </article>
        </div>
      </div>
    </main>
  );
}
