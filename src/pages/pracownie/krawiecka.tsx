import { useState } from "react";
import { Modal } from "../../components/modal/Modal";

export default function Krawiecka() {
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
      <div className="pracownia" id="krawiecka">
        <p>
          <b>Pracownia krawiecka</b>: Pracownia jest wyposażona w niezbędne
          narzędzia krawieckie, umożliwiając wykonywanie różnych zadań
          związanych z szyciem.
        </p>
        {/* first */}
        <div className="pracowni__container-img">
          <div className="labs-img">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/krawiecka/krawiecka_1_1(2).jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/krawiecka/krawiecka_1_2.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
          </div>

          <p className="align__center">
            Breloczek to uroczy dodatek wykonany z tkaniny, który łączy techniki
            szycia maszynowego i ręcznego. Każdy breloczek jest starannie uszyty
            na maszynie z wysokiej jakości materiałów, a następnie ręcznie
            wykończone, co nadaje unikalny i personalny charakter. Breloczek
            jest wyposażony w solidne zapięcie, które umożliwia łatwe przypięcie
            do kluczy, torby czy plecaka, dodając im kolorowego i wesołego
            akcentu.
          </p>
        </div>
        {/* two */}
        <div className="pracowni__container-img">
          <p className="align__center">
            Uczestnicy pracowni krawieckiej mają okazję tworzyć własne rękawice
            kuchenne. Pod okiem instruktora, uczą się krok po kroku, jak wyciąć
            materiał, zszyć elementy i dodać wykończenia. To idealna okazja, by
            rozwijać swoje umiejętności szycia i stworzyć praktyczny, ręcznie
            wykonany produkt.
          </p>
          <div className="labs-img">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/krawiecka/krawiecka_2_1.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/krawiecka/krawiecka_2_2.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
          </div>
        </div>
        {/* three */}
        <div className="pracowni__container-img">
          <div className="labs-img">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/krawiecka/krawiecka_3_1.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/krawiecka/krawiecka_3_2.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
          </div>

          <p className="align__center">
            Kury z tkaniny to wspaniała ozdoba na święta wielkanocne, która
            dodaje wnętrzom uroku i świątecznego klimatu. Ręcznie uszyte, te
            kolorowe i miękkie dekoracje mogą być używane jako elementy
            dekoracyjne na stołach, półkach czy parapetach, wprowadzając radosną
            atmosferę do każdego domu.
          </p>
        </div>
        {/* four */}
        <div className="pracowni__container-img">
          <p className="align__center">
            Dołącz do nas i naucz się szyć urocze renifery i bałwany! Nasze
            warsztaty to idealna okazja, aby rozwijać swoje umiejętności
            krawieckie, tworząc świąteczne ozdoby. Bez względu na to, czy jesteś
            początkującym, czy doświadczonym hobbystą, zapewniamy materiały,
            wskazówki i inspirację, byś mógł cieszyć się twórczym procesem i
            pięknymi efektami swojej pracy.
          </p>
          <div className="labs-img">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/krawiecka/krawiecka_4_1.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
            {/* <img
              className="pracownia__img pracownia__img--left"
              src="/photo/krawiecka/krawiecka_2.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            /> */}
          </div>
        </div>
        {/* five */}
        <div className="pracowni__container-img">
          <div className="labs-img">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/krawiecka/krawiecka_5_1.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
            {/* <img
              className="pracownia__img pracownia__img--left"
              src="/photo/krawiecka/krawiecka_5.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            /> */}
          </div>
          <p className="align__center">
            Szalik na krośnie to wyjątkowy element odzieży tworzony ręcznie za
            pomocą tradycyjnego warsztatu tkackiego, znanego jako krosno. Proces
            ten polega na przeplataniu nici osnowy i wątku, co pozwala na
            stworzenie różnorodnych wzorów i tekstur.
          </p>
        </div>
        {/*  */}
      </div>
    </>
  );
}
