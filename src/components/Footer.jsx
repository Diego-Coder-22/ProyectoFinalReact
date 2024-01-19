import React from "react";
import fb from "../assets/img/Facebook.svg";
import ig from "../assets/img/instagram.png";
import wp from "../assets/img/WhatsApp.png";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container-footer">
                <div className="row">
                    <div className="footer-col">
                        <h4>Empresa</h4>
                        <ul>
                            <li><a href="#">Nosotros</a></li>
                            <li><a href="#">Nuestros Servicios</a></li>
                            <li><a href="#">Politica Privacidad</a></li>
                            <li><a href="#">Programa de Afiliación</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Ayuda</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Envios</a></li>
                            <li><a href="#">Devoluciones</a></li>
                            <li><a href="#">Estado del Pedido</a></li>
                            <li><a href="#">Opciones de Pago</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Tienda Online</h4>
                        <ul>
                            <li><a href="/productos">Productos</a></li>
                            <li><a href="/productos/Aceites">Aceites Esenciales</a></li>
                            <li><a href="/productos/Lociones">Lociones Corporales</a></li>
                            <li><a href="/productos/Aguas">Aguas Florales</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Siguenos</h4>
                        <div class="social-links">
                            <a href="https://www.facebook.com/"><img src={fb} alt="facebook"></img></a>
                            <a href="https://www.instagram.com/"><img src={ig} alt="instagram"></img></a>
                            <a href="https://web.whatsapp.com/"><img src={wp} alt="whatsapp"></img></a>
                        </div>
                    </div>
                </div>
                <p> &copy; 2024 Diego Fernandez.</p>
            </div>
        </div>
    );
};



export default Footer