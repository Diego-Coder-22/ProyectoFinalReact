import { Link } from "react-router-dom";



const Hero = () => {
    return (
      <section className="hero">
          <div className="hero-text">
            <h2>
            TIEMPO DE RELAX
            </h2>
            <p>Te invitamos a probar nuestros productos para 
                que puedas tomarte un tiempo para ti y tu cuidado</p>
            <Link to="/productos">
              <button className="enviar">Compra ahora</button>
            </Link>
          </div>
      </section>
    );
  };
  
  export default Hero;