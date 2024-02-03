import Header from "../Elements/Header";
import '../../Styles/css/Contact.css';

function Contact() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="banner d-flex  justify-content-center">
                    <img className="bannerImg" src="/backgrounds/backgroundContact.jpg" alt="img" />
                </div>
                <div className="containerInfo d-flex">
                    <div className="containerInfoInside d-flex">
                        <div className="block">
                            <div className="horario blockItem">
                                <h2 className="infoTitle">Horario</h2>
                                <div className="info">
                                    <p className="inforSubtitle">lunes e sábado</p>
                                    <p className="blockInfo">9:00 AM A 7:00 PM</p>
                                </div>
                            </div>
                            <div className="socialNetworks">
                                    <h2 className="infoTitle">REDES SOCIALES</h2>
                                    <a href="#"><img className="socialIcon" src="/icons/facebook.png" alt="facebook.png" /></a>
                                    <a href="#"><img className="socialIcon" src="/icons/twitter.png" alt="twitter.png" /></a>
                                    <a href="#"><img className="socialIcon" src="/icons/youtube.png" alt="youtube.png" /></a>
                                    <a href="#"><img className="socialIcon" src="/icons/instagram.png" alt="instagram.png" /></a>
                                </div>
                        </div>
                        <div className="block">
                            <div className="contact blockItem">
                                <h2 className="infoTitle">Télefonos</h2>
                                <p className="blockInfo">(809) 563 2206</p>
                                <p className="blockInfo">(809) 563 2206</p>
                            </div>
                            <div className="email blockItem">
                                <h2 className="infoTitle">Correo</h2>
                                <p className="blockInfo">VENTAS@TELARESRD.COM</p>
                            </div>
                        </div>
                        <div className="block">
                            <div className="address blockItem">
                                <h2 className="infoTitle">Dirección</h2>
                                <p className="blockInfo">AV. ING ROBERTO PASTORIZA 212</p>
                                <p className="blockInfo">SANTO DOMINGO, REPÚBLICA DOMINICANA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Contact;