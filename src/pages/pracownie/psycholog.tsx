import { useState } from "react";
import { Modal } from "../../components/modal/Modal";

export default function Psycholog() {
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
      <div className="pracownia" id="psycholog">
        <p>
          <b>Psycholog</b> pomaga uczestnikom w radzeniu sobie z trudnościami
          emocjonalnymi, rozwijaniu umiejętności społecznych i osiąganiu swojego
          pełnego potencjału. Oto kilka zadań i funkcji, które może pełnić
          psycholog
        </p>
        {/* first */}
        <div className="pracowni__container-img">
          <div className="md:flex block">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/psycholog/psycholog_1_1.jpeg"
              alt="psycholog"
              onClick={(event) => handleClick(event)}
            />
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/psycholog/psycholog_1_2.jpg"
              alt="plastyczna"
              onClick={handleClick}
            />
          </div>

          <p className="align__center">psycholog </p>
        </div>
        {/* two */}
      </div>
    </>
  );
}
