import { Aside } from "../components/aside/Aside";

export default function Rekrutacja() {
  return (
    <main className="container site-about">
      <div className="row">
        <Aside style="rounded-bl-2xl" />
        <div className="main__content rounded-r-2xl ">
          <h1 className="pt-24 pb-12">Dokumenty potrzebne do przyjęcia:</h1>
          <article>
            <ul>
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
                  (kliknij aby pobrać dokument w formacie PDF)
                </a>
                .{" "}
              </li>
              <li>Dokumenty dodatkowe - opinia psychologiczna</li>
            </ul>
            <p className="pt-24 text-2xl">
              Warsztat Terapii Zajęciowej, ul. Truskawkowa 4, 31-985 Kraków
              (Kraków-Nowa-Huta)
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
