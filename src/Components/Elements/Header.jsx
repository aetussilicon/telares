import '../../Styles/css/Header.css';

function Header() {
    return (
        <header>
            <nav className='navbar navbar-expand-lg '>
                <div className="container">
                    <div className='containerLinks'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className='nav-item' >
                                <a className="nav-link" href="/shop">Shop</a>
                            </li>
                            <li className='nav-item'>
                                <a className="nav-link" href="/aboutus">Acerca de</a>
                            </li>
                            <li className='nav-item'>
                                <a className="nav-link" href="/blog">Blog</a>
                            </li>
                            <li className='nav-item'>
                                <a className="nav-link" href="/contact">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className='title'>
                        <h2 className='navbar-brand'>TELARES</h2>
                    </div>
                    <div className='containerIcons'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <img className="headerIcon nav-link" src="src/assets/bag.svg" alt="cart" />
                            </li>
                            <li className='nav-item' >
                                <img className="nav-link headerIcon" src="src/assets/heart.svg" alt="cart" />
                            </li>
                            <li className='nav-item'>
                                <img className="nav-link headerIcon" src="src/assets/user.svg" alt="cart" />
                            </li>
                            <li className='nav-item'>
                                <img className="nav-link headerIcon" src="src/assets/lupa.svg" alt="cart" />
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
