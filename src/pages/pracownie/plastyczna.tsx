import { useState } from "react";
import { Modal } from "../../components/modal/Modal";

export default function Plastyczna() {
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
      <div className="pracownia">
        <p>
          <b>Pracownia plastyczna</b>:Uczestnicy rozwijają umiejętności
          artystyczne poprzez naukę różnych technik. Pracownia ta wspiera
          rehabilitację poprzez sztukę, rozwijając kreatywność i wyobraźnię.
        </p>
        {/* first */}
        <div className="pracowni__container-img">
          <div className="labs-img">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/plastyczna/photo1719684284.jpeg"
              alt="plastyczna284"
              onClick={handleClick}
            />
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/plastyczna/plastyczna.jpg"
              alt="plastyczna"
              onClick={handleClick}
            />
          </div>

          <p className="align__center">
            Akryl na płótnie to technika malarska, w której artysta wykorzystuje
            farby akrylowe na bazie wody do tworzenia obrazów na płóciennym
            podłożu.
          </p>
        </div>
        {/* two */}
        <div className="pracowni__container-img">
          <p className="align__center">
            Nauczysz się robić stroik bożonarodzeniowy z szyszek
          </p>
          <div className="labs-img">
            <img
              className="pracownia__img pracownia__img--right"
              src="/photo/plastyczna/photo1719684669.jpeg"
              alt="plastyczna669"
              onClick={handleClick}
            />
            <img
              className="pracownia__img pracownia__img--right"
              src="/photo/plastyczna/photo1719740615.jpeg"
              alt="plastyczna615"
              onClick={handleClick}
            />
          </div>
        </div>
        {/* three */}
        <div className="pracowni__container-img">
          <div className="labs-img">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/plastyczna/plastyczna_3.jpeg"
              alt="plastyczna_3"
              onClick={handleClick}
            />
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/plastyczna/plastyczna_3_2.jpeg"
              alt="plastyczna_3"
              onClick={handleClick}
            />
          </div>

          <p className="align__center">
            Monotypia to technika graficzna, w której artysta tworzy jedyny w
            swoim rodzaju wydruk poprzez malowanie lub rysowanie na gładkiej
            powierzchni, a następnie przenoszenie obrazu na papier. Dzięki temu
            powstaje unikalna odbitka, umożliwiająca eksperymentowanie z
            teksturami i kolorami.
          </p>
        </div>
        {/* four */}
        <div className="pracowni__container-img">
          <p className="align__center">
            Gipsoryt to technika druku wypukłego, polegająca na wykonaniu
            matrycy z gipsu, w której wyrzeźbione są wzory lub obrazy. Proces
            tworzenia gipsorytu zaczyna się od przygotowania mieszanki gipsowej,
            która następnie jest wylewana na formę i pozostawiana do
            stwardnienia. Po stwardnieniu gipsu, artysta rzeźbi w nim pożądany
            wzór za pomocą różnych narzędzi. Gdy matryca jest gotowa, pokrywa
            się ją farbą, a następnie odbija na papierze lub innym materiale,
            tworząc druk wypukły.
          </p>
          <div className="labs-img flex-wrap">
            <img
              className="pracownia__img pracownia__img--right"
              src="/photo/plastyczna/plastyczna_4.jpeg"
              alt="plastyczna.1"
              width={600}
              onClick={handleClick}
            />
            <img
              className="pracownia__img pracownia__img--right"
              src="/photo/plastyczna/plastyczna_4_2.jpeg"
              alt="plastyczna.1"
              onClick={handleClick}
            />
            <img
              className="pracownia__img pracownia__img--right"
              src="/photo/plastyczna/plastyczna_4_3.jpeg"
              alt="plastyczna.1"
              onClick={handleClick}
            />
          </div>
        </div>
        {/* five */}
        <div className="pracowni__container-img">
          <div className="labs-img flex-wrap">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/plastyczna/plastyczna_5_1.jpeg"
              alt="plastyczna.1"
              onClick={handleClick}
            />
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/plastyczna/plastyczna_5_2.jpeg"
              alt="plastyczna.1"
              onClick={handleClick}
            />
          </div>

          <p className="align__center">
            Z nami będziesz uczestniczyć w plenerze malarskim, gdzie będziesz
            mieć możliwość malować obrazy na różne tematy. Zapewniamy
            inspirujące otoczenie i profesjonalne wskazówki, abyś mógł rozwijać
            swoje umiejętności artystyczne i tworzyć wyjątkowe dzieła.
          </p>
        </div>
        {/* six */}
        {/* <div className="pracowni__container-img">
          <p className="align__center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            dolorum, sed tempore neque eius consequuntur asperiores minima!
            Consequatur deserunt quos minima nisi id minus dolores tempore. Ex
            iure ipsam ratione.
          </p>
          <div>
            <img
              className="pracownia__img pracownia__img--right"
              src="/photo/plastyczna/plastyczna.jpg"
              alt="plastyczna.1"
              onClick={handleClick}
            />
          </div>
        </div> */}
        {/* seven */}
        {/* <div className="pracowni__container-img">
          <img
            className="pracownia__img pracownia__img--left"
            src="/photo/plastyczna/plastyczna.jpg"
            alt="plastyczna.1"
            onClick={handleClick}
          />
          <p className="align__center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            dolorum, sed tempore neque eius consequuntur asperiores minima!
            Consequatur deserunt quos minima nisi id minus dolores tempore. Ex
            iure ipsam ratione.
          </p>
        </div> */}
      </div>
    </>
  );
}
