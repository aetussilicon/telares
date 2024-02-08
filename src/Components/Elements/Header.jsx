import { useState } from 'react';
import '../../Styles/css/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className='nav-container'>
                {/* <div className='titleDiv'> */}
                    <h2 className="title tMobile">Telares</h2>
                {/* </div> */}
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/aboutus">Acerca De</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
            <h2 className="title tWeb">Telares</h2>
            <ul className={menuOpen ? "open icons" : ""}> 
                <li><Link><img className="headerIcon" src="src/assets/bag.svg" alt="cart" /></Link></li>
                <li><Link><img className="headerIcon" src="src/assets/heart.svg" alt="cart" /></Link></li>
                <li><Link><img className="headerIcon" src="src/assets/user.svg" alt="cart" /></Link></li>
                <li><Link><img className="headerIcon" src="src/assets/lupa.svg" alt="cart" /></Link></li>
            </ul>

        </nav>
    );
}

export default Header;