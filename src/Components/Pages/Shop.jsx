import Header from "../Elements/Header";
import ShopCard from "../Elements/ShopCard";
import '../../Styles/css/Shop.css'
import PageFooter from "../Elements/PageFooter";
import { Link } from "react-router-dom";

function Shop() {

    let result = 12;

    return (
        <>
            <div className="container">
                <Header />
                <div className="main-banner banner-shop">
                    <div className="banner-shop-text">
                        <h1>Lorem Ipsum</h1>
                        <p className="no-hover">outdoor fabrics lonas para exterior</p>
                    </div>
                </div>
                <div className="result-grid">
                    <div className="filters-column">
                        <div className="filters">
                            <h3>Caribe Proof</h3>
                            <p>Rustik</p>
                            <p>Deco</p>
                            <p>Advance</p>
                            <p>Tierra</p>
                        </div>
                        <div className="filters">
                            <h3>Filtrar Por</h3>
                            <h2>Precio</h2>
                            <h2>Color</h2>
                            <h2>Tipo de tela</h2>
                        </div>
                    </div>
                    <div className="search-result" >
                        <div className="top-row">
                            <p className="count-of-results no-hover">Showing all {result} results</p>
                            <div className="dropdown-menus">
                                <div className="dropdown">
                                    <button className="dropdown-button">
                                        <p className="no-hover">Default sorting</p>
                                        <p>▼</p>
                                    </button>
                                    <div className="dropdown-content">
                                        <a href="#">Sort by popularity</a>
                                        <a href="#">Sort by average ranting</a>
                                        <a href="#">Sort by latest</a>
                                        <a href="#">Sort by price: low to high</a>
                                        <a href="#">Sort by price: high to low</a>
                                    </div>
                                </div>
                                <div className="dropdown filters-dropdown">
                                    <button className="dropdown-button">
                                        <p className="no-hover">Filtrar Por</p>
                                        <p>▼</p>
                                    </button>
                                    <div className="dropdown-content">
                                        <Link href="#">Rustik</Link>
                                        <Link href="#">Deco</Link>
                                        <Link href="#">Advance</Link>
                                        <Link href="#">Tierra</Link>
                                        <Link href="#">Precio</Link>
                                        <Link href="#">Color</Link>
                                        <Link href="#">Tipo de Tela</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <ShopCard />
                            <ShopCard />
                            <ShopCard />
                            <ShopCard />
                            <ShopCard />
                            <ShopCard />
                            <ShopCard />
                            <ShopCard />
                            <ShopCard />
                            <ShopCard />
                            <ShopCard />
                            <ShopCard />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <PageFooter />
            </div>
        </>
    );
}

export default Shop;