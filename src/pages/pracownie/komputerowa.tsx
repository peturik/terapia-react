import { useState } from "react";
import { Modal } from "../../components/modal/Modal";

export default function Komputerowa() {
  const [isVisible, setIsVisible] = useState(false);
  const [srcImage, setSrcImage] = useState("");

  function handleClick({ target }: React.MouseEvent<HTMLImageElement>) {
    const t = target as HTMLImageElement;
    setSrcImage(t.src);
    setIsVisible(true);
  }
  return (
    <>
      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <div>
          <img className="" src={srcImage} alt="plastyczna.1" />
        </div>
      </Modal>
      <div className="pracownia" id="komputerowa">
        <p>
          <b>Pracownia komputerowo introligatorska</b>: Jest to miejsce, gdzie
          osoby z niepełnosprawnością rozwijają umiejętności komputerowe i
          introligatorskie, otrzymując wsparcie i narzędzia do nauki.
        </p>
        {/* first */}
        <div className="pracowni__container-img">
          <div className="">
            <img
              className="pracownia__img pracownia__img--right"
              src="/photo/komp/komputerowa_1_1.jpeg"
              alt="komputerowa"
              onClick={handleClick}
            />
            <img
              className="pracownia__img"
              src="/photo/komp/komputerowa_1_2.jpeg"
              alt="komputerowa"
              onClick={handleClick}
            />
          </div>

          <p className="align__center">
            Uczestnicy mają możliwość rozwijania swoich umiejętności w zakresie
            przetwarzania tekstu, w tym pisania, formatowania i edytowania
            dokumentów. Dodatkowo, ćwiczenia grafomotoryczne pozwalają na
            doskonalenie zdolności manualnych i precyzji w pisaniu na
            klawiaturze. Praca w takim środowisku wspiera zarówno rozwój
            technicznych, jak i praktycznych umiejętności uczestników.
          </p>
        </div>
        {/* two */}
        <div className="pracowni__container-img">
          <div className="">
            Produkcja wizytówek obejmuje kilka kluczowych etapów:
            <ul>
              <li>1. Projektowanie</li>
              <li>2. Druk</li>
              <li>3. Wycinanie na gilotynie</li>
              <li>4. Laminowanie</li>
            </ul>
            Każdy z tych etapów jest istotny, aby końcowy produkt był
            estetyczny, trwały i spełniał oczekiwania .
          </div>
          <div className="flex">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/komp/komputerowa_2_1.jpeg"
              alt="komputerowa"
              onClick={handleClick}
            />
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/komp/komputerowa_2_2.jpeg"
              alt="komputerowa"
              onClick={handleClick}
            />
          </div>
        </div>
        {/* three */}
        <div className="pracowni__container-img">
          <div className="">
            <img
              className="pracownia__img pracownia__img--right"
              src="/photo/komp/komputerowa_3_1.jpeg"
              alt="komputerowa"
              onClick={handleClick}
            />
            <img
              className="pracownia__img"
              src="/photo/komp/komputerowa_3_2.jpeg"
              alt="komputerowa"
              onClick={handleClick}
            />
          </div>

          <p className="align__center">
            Praca na wycinarce polega na obsłudze maszyny do wycinania różnych
            elementów z materiału, takich jak papier, karton czy folia. Do
            obowiązków należy precyzyjne ustawianie wycinarki, monitorowanie
            procesu wycinania oraz kontrola jakości wyciętych elementów.
            Dodatkowo, praca obejmuje tworzenie gotowych kartek z wyciętych
            elementów, co wymaga staranności i dokładności.
          </p>
        </div>
        {/* four */}
        <div className="pracowni__container-img">
          <p className="align__center">
            "Kronika: Robienie kroniki metodą scrapbookingu" Scrapbooking to
            kreatywny sposób dokumentowania ważnych momentów życia. Łączy
            fotografie, ręczne pismo i dekoracje, tworząc unikalne albumy.
            Dzięki tej metodzie każda strona kroniki staje się spersonalizowanym
            dziełem sztuki, zachowującym wspomnienia i emocje.
          </p>
          <div className="md:flex block">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/komp/komputerowa_4_1.jpeg"
              alt="komputerowa"
              onClick={handleClick}
            />
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/komp/komputerowa_4_2.jpeg"
              alt="komputerowa"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}
