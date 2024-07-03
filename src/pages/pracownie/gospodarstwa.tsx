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
              src="/photo/domowego/domowego_1_1.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/domowego/domowego_1_2.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
          </div>

          <p className="align__center">
            Pod okiem terapeutów wspólnie przygotowali kolorowe i zdrowe
            koreczki z kabanosów, papryki, żółtego sera i kiszonego ogórka.
            Świetny sposób na rozwijanie umiejętności manualnych i kulinarnych
            oraz wzmacnianie pracy zespołowej i komunikacji.
          </p>
        </div>
        {/* two */}
        <div className="pracowni__container-img">
          <p className="align__center">
            Uczestnicy pracowni gospodarstwa domowego rozwijają umiejętności
            cateringowe, ucząc się przygotowywania różnorodnych potraw oraz
            organizacji przyjęć i imprez. Dzięki praktycznym zajęciom uczestnicy
            zdobywają niezbędne kompetencje do pracy w branży gastronomicznej i
            cateringu.
          </p>{" "}
          <div className="md:flex block ">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/domowego/domowego_2_1.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/domowego/domowego_2_2.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
          </div>
        </div>
        {/* three */}
        <div className="pracowni__container-img">
          {" "}
          <div className="md:flex block ">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/domowego/domowego_3_1.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
          </div>
          <p className="align__center">
            <ol>
              Zdobywanie podstawowych umiejętności obsługi pralki :
              <li>Sortowanie prania według koloru i rodzaju materiału.</li>
              <li>
                Wkładanie prania do pralki, nie przekraczając pojemności bębna.
              </li>
              <li>
                Ustawienie programu prania odpowiedniego do rodzaju prania.
              </li>
              <li>Dodanie detergentui płynu do płukania. </li>
              <li> Uruchomienie pralki przez naciśnięcie "Start".</li>
            </ol>
          </p>
        </div>
        {/* four */}
        <div className="pracowni__container-img">
          <p className="align__center">
            <ol>
              Zdobywanie podstawowych umiejętności obsługi zmywarki obejmuje:
              <li>Sortowanie naczyń i usunięcie resztek jedzenia.</li>
              <li>Wkładanie naczyń do zmywarki w odpowiednich miejscach.</li>
              <li> Dodanie detergentu i nabłyszczacza.</li>
              <li>Ustawienie programu mycia odpowiedniego do naczyń.</li>
              <li>Uruchomienie zmywarki przez naciśnięcie "Start".</li>
            </ol>
          </p>{" "}
          <div className="md:flex block ">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/domowego/domowego_4_1.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
          </div>
        </div>
        {/* five */}{" "}
        <div className="pracowni__container-img">
          {" "}
          <div className="md:flex block ">
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/domowego/domowego_5_1.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />{" "}
            <img
              className="pracownia__img pracownia__img--left"
              src="/photo/domowego/domowego_5_2.jpeg"
              alt="krawiecka"
              onClick={handleClick}
            />
          </div>
          <p className="align__center">
            Uczestnicy pracowni gospodarstwa domowego uczą się różnych technik i
            przepisów na wypiekanie pysznych ciast. Praktyczne zajęcia obejmują
            naukę mieszania składników, formowania ciasta oraz pieczenia, co
            pozwala rozwijać umiejętności kulinarne i kreatywność w kuchni.
          </p>
        </div>
        {/* four */}
      </div>
    </>
  );
}
