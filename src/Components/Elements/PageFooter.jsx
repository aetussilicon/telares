import { Link } from "react-router-dom";
import '../../Styles/css/PageFooter.css';

export default function PageFooter() {
    return (
        <>
            <div className="spliter" />
            <div className="container footer-container">
                <div className="block-section">
                    <div className="block-info-footer mb-64">
                        <h2>Telares</h2>
                        <ul>
                            <li><Link>Sobre Nosostros</Link></li>
                            <li><Link>Telares Outlet</Link></li>
                            <li><Link>Servicios</Link></li>
                            <li><Link>Telerespro</Link></li>
                        </ul>
                    </div>
                    <div className="block-info-footer">
                        <h2>Productos</h2>
                        <ul>
                            <li><Link>Telas</Link></li>
                            <li><Link>Barras</Link></li>
                            <li><Link>Cortinas</Link></li>
                            <li><Link>Esenciais</Link></li>
                            <li><Link>Caribe Proof</Link></li>
                            <li><Link>Stonewood</Link></li>
                        </ul>
                    </div>
                    <div className="div-logo">
                        <img src="/imgs/logoTelares.png" alt="Telares Logo" />
                    </div>
                    <div>
                        <div className="block-info-footer">
                            <h2>Bodas</h2>
                            <ul>
                                <li><Link>Lista de Bodas</Link></li>
                            </ul>
                        </div>
                        <div className="block-info-footer">
                            <h2>Collecciones</h2>
                            <ul>
                                <li><Link>Primevera - Verano 2024</Link></li>
                            </ul>
                        </div>
                        <div className="block-info-footer">
                            <h2>Contacto</h2>
                            <ul>
                                <li><Link>FAQs</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="block-info-footer">
                            <h2>Usuario</h2>
                            <ul>
                                <li><Link>Mi cuenta</Link></li>
                                <li><Link>Mis Ordenes</Link></li>
                                <li><Link>Ayuda</Link></li>
                            </ul>
                        </div>
                        <div className="block-info-footer">
                            <h2>Social Media</h2>
                            <ul className="social-networks-footer">
                                <li><Link to="#"><img src="icons/facebook.svg" width={32} /></Link></li>
                                <li><Link to="#"><img src="icons/twitter.svg" width={32} /></Link></li>
                                <li><Link to="#"><img src="icons/youtube.svg" width={32} /></Link></li>
                                <li><Link to="#"><img src="icons/instagram.svg" width={32} /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-footer">
                <p>TELARES ALL RIGTHS RESERVED. TERMS OF USE AND PRIVACY POLICY</p>
            </div>
        </>
    );
}