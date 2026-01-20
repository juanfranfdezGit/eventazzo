import djs from "../../../services/djs.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DjInfo() {
  const navigate = useNavigate();

  const ContactNav = () => {
    navigate("/contact");
  };

  const [djActive, setDjActive] = useState();
  const { dj } = useParams();

  useEffect(() => {
    const name = dj.replace(/-/g, " ");

    setDjActive(
      djs.find((d) => d.name.toLocaleLowerCase() === name.toLowerCase()),
    );
  }, [dj]);

  if (!djActive) {
    return (
      <div>
        <h1 className="dj404__title flex">DJ no encontrado!</h1>
      </div>
    );
  }

  return (
    <>
      <section className="djInfo">
        <h1 className="djInfo__title">{djActive.name}</h1>
        <p className="djInfo__description">{djActive.descriptionLarge}</p>
        <p className="djInfo__price">
          Desde: <span>{djActive.price}€</span>
        </p>
        <button className="djInfo__button" onClick={ContactNav}>
          Más Información
        </button>
      </section>
    </>
  );
}
