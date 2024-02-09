import Header from "../Elements/Header";
import '../../Styles/css/Contact.css';
import PageFooter from "../Elements/PageFooter";
import { Link } from "react-router-dom";

function Contact() {
    return (

        <>
            <div className="container">
                <Header />
            </div>
            <div className="container">
                <div className="main-banner contact-banner" />
                <div className="contact-container">
                    <div className="contact-content">
                        <div className="contact-cards">
                            <div className="card-section">
                                <h2>Horario</h2>
                                <p className="lunes">lunes e sábado</p>
                                <p>9:00 AM A 7:00 PM</p>
                            </div>
                            <div className="card-section social-networks">
                                <h2>REDES SOCIALES</h2>
                                <ul className="networks">
                                    <li><Link to="#"><img src="/icons/facebook.svg" width={32} alt="facebook" /></Link></li>
                                    <li><Link to="#"><img src="/icons/twitter.svg" width={32} alt="twitter" /></Link></li>
                                    <li><Link to="#"><img src="/icons/youtube.svg" width={32} alt="youtube" /></Link></li>
                                    <li><Link to="#"><img src="/icons/instagram.svg" width={32} alt="instagram" /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-cards">
                            <div className="card-section">
                                <h2>Telefónos</h2>
                                <p className="no-margin">(809) 563 2206</p>
                                <p className="plus-margin">(809) 563 2206M</p>
                            </div>
                            <div className="card-section">
                                <h2>Correo</h2>
                                <p>Ventas@Telaresrd.com</p>
                            </div>
                        </div>
                        <div className="contact-cards">
                            <div className="card-section">
                                <h2>Dirección</h2>
                                <p>AV. ING ROBERTO PASTORIZA 212</p>
                                <p>SANTO DOMINGO, REPÚBLICA DOMINICANA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter />
        </>
    );
}

export default Contact;