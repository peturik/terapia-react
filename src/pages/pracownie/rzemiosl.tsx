import { useState } from "react";
import { Modal } from "../../components/modal/Modal";

export default function Rzemiosł() {
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
      <div className="pracownia" id="rzemiosł">
        <p>
          <b>Pracownia rzemiosł różnych</b> w warsztacie terapii zajęciowej
          umożliwia uczestnikom rozwijanie umiejętności rzemieślniczych i
          kreatywności.
        </p>
        {/* one */}
        <div className="pracowni__container-img">
          <img
            className="pracownia__img"
            src="/photo/rzemiosł/rzemiosł_1_1.jpeg"
            alt="rzemiosł"
            onClick={handleClick}
          />
          <p className="align__center">
            W ramach zajęć uczestnicy uczą się różnych technik pracy z drewnem i
            innymi materiałami, a także poznają zasady kompozycji i estetyki w
            ramiarstwie. Każdy uczestnik będzie miał okazję zaprojektować,
            wyciąć, złożyć i ozdobić swoją ramkę, aby idealnie pasowała do
            wybranego obrazu.
          </p>
        </div>
        {/* two */}
        <div className="pracowni__container-img">
          <p className="align__center">
            Podczas naszych zajęć zdobywamy podstawowe umiejętności stolarskie,
            które obejmują obsługę narzędzi ręcznych oraz podstawy pracy z
            drewnem. Uczymy się cięcia, szlifowania i łączenia elementów. To
            idealne wprowadzenie dla osób chcących rozpocząć przygodę z tym
            rzemiosłem.
          </p>
          <img
            className="pracownia__img"
            src="/photo/rzemiosł/rzemiosł_2_1.jpeg"
            alt="rzemiosł"
            onClick={handleClick}
          />
        </div>
        {/* three */}
        <div className="pracowni__container-img">
          <div className="">
            <img
              className="pracownia__img"
              src="/photo/rzemiosł/rzemiosł_3_1.jpeg"
              alt="rzemiosł"
              onClick={handleClick}
            />
            <img
              className="pracownia__img"
              src="/photo/rzemiosł/rzemiosł_3_2.jpeg"
              alt="rzemiosł"
              onClick={handleClick}
            />
          </div>
          <p className="align__center">
            Specjalizujemy się w tworzeniu unikalnych szkatułek i skrzynki.
            Każdy nasz wyrób jest ręcznie wykonany z dbałością o najdrobniejsze
            szczegóły. Idealne na prezent lub do ozdoby Twojego domu!
          </p>
        </div>
        {/* four */}
        <div className="pracowni__container-img">
          <p className="align__center">
            Tworzymy unikalne drzewka z drewnianych elementów, ozdobione
            szyszkami oraz różnorodnymi drewnianymi dekoracjami. Każde drzewko
            jest ręcznie wykonane, co sprawia, że każde z nich ma niepowtarzalny
            charakter. Nasze produkty łączą naturalne materiały z artystycznym
            wykończeniem, tworząc ciepłą i przytulną atmosferę w każdym wnętrzu.
          </p>
          <div className="flex">
            <img
              className="pracownia__img pracownia__img--right"
              src="/photo/rzemiosł/rzemiosł_4_1.jpeg"
              alt="rzemiosł"
              onClick={handleClick}
            />
            <img
              className="pracownia__img pracownia__img--right"
              src="/photo/rzemiosł/rzemiosł_4_2.jpeg"
              alt="rzemiosł"
              onClick={handleClick}
            />
          </div>
        </div>
        {/* five   */}{" "}
        <div className="pracowni__container-img">
          <div className="">
            <img
              className="pracownia__img"
              src="/photo/rzemiosł/rzemiosł_5_1.jpeg"
              alt="rzemiosł"
              onClick={handleClick}
            />
            {/* <img
              className="pracownia__img"
              src="/photo/rzemiosł/rzemiosł_5_2.jpeg"
              alt="rzemiosł"
              onClick={handleClick}
            /> */}
          </div>
          <p className="align__center">
            Specjalizujemy się w tworzeniu unikalnych szkatułek i skrzynki.
            Każdy nasz wyrób jest ręcznie wykonany z dbałością o najdrobniejsze
            szczegóły. Idealne na prezent lub do ozdoby Twojego domu!
          </p>
        </div>
        {/* six */}
      </div>
    </>
  );
}
