import Header from "../Elements/Header";
import '../../Styles/css/AboutUs.css';

function AboutUs() {
    return (
        <>
            <div className="container headerContainer">
                <Header />
            </div>
            <main >
                <div className="container apresentation-container">
                    <div className="apresentation">
                        <div className="introduction">
                            <div>
                                <img src="/imgs/logoAbout.png" />
                            </div>
                            <p className="no-hover">Somos un equipo de personas
                                dedicadas a agregar valor a los espacios dominicanos
                                y de cualquier otra parte del mundo a la que podamos
                                llegar- a través de nuestros tejidos y otros pocos
                                artículos más que comercializamos. Como equipo, nos
                                une y nos apasiona la búsqueda de la excelencia en
                                nuestro trabajo.</p>
                            <p className="no-hover">
                                iniciamos este trayecto en 2013, a partir de que nuestro
                                fundador y CEO, Dario Martinez Alonso, comerciante con rás
                                de 35 años de experiencia, identificase un vacio en el
                                segmento de tejidos para decoración en nuestro mercado y
                                apostase a lo que en principio fue una iniciativa muy osada:
                                una tienda especializada únicamente en telas para decoración,
                                con capacidad de exhibir más de 4,000 referencias únicas y almacenar
                                más de un millón de yardas en stock, en el corazón de Santo Domingo.
                                Ocho años de arduo trabajo en equipo después. aquí estamos, con las
                                mismas ganas que el primer día de formar parte de todos los hogares
                                que podamos a través de nuestras telas.
                            </p>
                            <p className="no-hover">
                                Aunque nos especializamos en telas, no es cierto que sólo vendemos telas;
                                nuestro propósito es facilitar convertir casas en hogares.
                            </p>
                        </div>
                    </div>
                    <div className="services">
                        <div className="services-title">
                            <h1>NUESTROS SERVICIOS</h1>
                        </div>
                        <div className="services-container-text">
                            <div className="services-content">
                                <img className="circle" src="/icons/circle.svg" alt="circle" />
                                <div className="info">
                                    <h3>LOREM IPSUM</h3>
                                    <p className="no-hover">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                        luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                </div>
                            </div>
                            <div className="services-content">
                                <img className="circle" src="/icons/circle.svg" alt="circle" />
                                <div className="info">
                                    <h3>LOREM IPSUM</h3>
                                    <p className="no-hover">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                        luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                </div>
                            </div>
                            <div className="services-content">
                                <img className="circle" src="/icons/circle.svg" alt="circle" />
                                <div className="info">
                                    <h3>LOREM IPSUM</h3>
                                    <p className="no-hover">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                        luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="we-container">
                        <div className="info info-container info-container-right">
                            <h3>LOREM IPSUM</h3>
                            <h3>LOREM IPSUM</h3>
                            <p className="no-hover">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                                mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                        <img className="we-container-img" src="/imgs/persons.png" alt="persons.png" />
                        <div className="info info-container info-container-left">
                            <h3>LOREM IPSUM</h3>
                            <h3>LOREM IPSUM</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                                mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default AboutUs;