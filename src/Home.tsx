import { Aside } from "./components/Aside";

export default function Home() {
  return (
    <main className="container">
      <div className="row">
        <Aside />
        <div className="main__content">
          <h2 className="text-box-3d co-po-szkole">
            CO PO SZKOLE ?
            <img className="co-po-szkole-img" alt="" />
          </h2>
          <article>
            <h3>Zapraszamy do</h3>
            <h1>
              WARSZTATU TERAPII ZAJĘCIOWEJ
              <br />
              TOWARZYSTWA PRZEJACIÓL
              <br />
              DZIECI
            </h1>
            <div className="container-trwa-nabor">
              <h4 className="trwa-nabor text-box-3d">TRWA NABÓR</h4>
            </div>
            <p className="text-[var(--main-color-1)]">
              UL. TRUSKAWKOWA 4, 31-985 KRAKÓW
            </p>
            <p>TEL. (12) 681 04 77</p>
          </article>
          <h2>OFERTA SKIEROWANA DO CIEBIE!</h2>
          <article>
            <h4>DOŁANCZ DO NAS JEŚLI CHCESZ:</h4>
            <ul>
              <li>
                rozwijać nowe umiejętności: manualme, społeczne, zawodowe,
                kreatywne
              </li>
              <li>nawiązać przyjażnie ma całe życie</li>
              <li>wyrazić swoją pasję</li>
              <li>spędzać czas na łonie natury</li>
              <li>
                uczestniczyć w warsztatach dodatkowych: relaksacji, arteterapii,
                aerobiku, gimnastyce, spacerach, muzykoterapii, nordic walking i
                inne
              </li>
            </ul>
          </article>
          <article>
            <h4>Zapewniamy atrakcje</h4>
            <ul>
              <li>wycieczki, wydarzenia kulturalne</li>
              <li>imprezy okolicznościowe</li>
              <li>turnieje piłkarskie</li>
              <li>plenery artystyczne</li>
            </ul>
          </article>
          <h5>MAMY SAMOCHÓD I POMAGAMY W DOTARCIU DO PLACÓWKI</h5>
          <h5>ZAMAWIAMY OBIADY W ATRAKCYJNEJ CENIE</h5>
        </div>
      </div>
    </main>
  );
}
