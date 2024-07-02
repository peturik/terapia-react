import { useState } from "react";
import { Modal } from "../../components/modal/Modal";

export default function Gospodarstwa() {
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
      <div className="pracownia" id="gospodarstwa">
        <p>
          <b>Pracownia gospodarstwa domowego</b>: W pracowni gospodarstwa
          domowego uczestnicy uczą się umiejętności związanych z prowadzeniem
          domu.
        </p>
        {/* first */}
        <div className="pracowni__container-img">
          <div className="md:flex block ">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/krawiecka/krawiecka_1_1.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
            {/* <img
              className="pracownia__img pracownia__img--left"
              src="/photo/krawiecka/krawiecka_1_2.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            /> */}
          </div>

          <p className="align__center">
            Mosus de Jésus Marie Joseph de crucifix de cossin de verrat d'enfant
            d'chienne de cibolac d'astie de crime.
          </p>
        </div>
        {/* two */}
      </div>
    </>
  );
}
