import { Aside } from "../components/aside/Aside";

export default function Wsparcia() {
  return (
    <main className="container">
      <div className="row">
        <Aside style={"rounded-bl-2xl"} />
        <div className="main__content col__article rounded-r-2xl">
          <div className="text-5xl text-[var(--main-color-3)] font-semibold mt-8 text-center">
            Każdy gest, <br />
            Nawet najdrobniejszy
            <br />
            Zmienia świat,
            <br />
            Czyjś Świat
            <br />
          </div>
          <br />
          <div className="text-3xl text-[var(--main-color-1)] font-semibold ">
            <div className="border border-[var(--main-color-1)] shadow-[10px_8px_10px_1px_var(--main-color-1)] p-8">
              Przekaż nam <span className="text-5xl">1,5%</span>
              <br />
              Procent podatku
              <br />
              KRS 0000188923
              <br />
              Dopisek: WTZ Truskawkowa 4, Kraków
            </div>
            <br />
            <div className="border border-[var(--main-color-1)] shadow-[10px_8px_10px_1px_var(--main-color-1)] p-8">
              Pomóc nam można także poprzez wpłatę na konto WTZ:
              <br />
              <a href="./index.html">19 1090 1665 0000 0001 5004 9851</a>
              <br />
              W tytule: WTZ Truskawkowa
              <br />
              DAROWIZNĘ
            </div>
            <br />
            <div className="text-4xl mt-10 font-semibold text-[var(--main-color-3)] text-center">
              Dziękujemy!
            </div>
          </div>
          {/* <img
          className="wsparczia-img" 
          src="./photo/wsparczia.jpg"
          alt="wsparczia"
        /> */}
        </div>
      </div>
    </main>
  );
}
