import Header from "../Elements/Header";
import ShopCard from "../Elements/ShopCard";
import '../../Styles/css/Shop.css'

function Shop() {

    let result = 12;


    return (
        <>
            <Header />
            <body>
                <div className="container">
                    <div className="banner bannerShop">
                    </div>
                    <div className="resultGrid d-flex justify-content-between">
                        <div className="filtersColumn">
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
                        <div className="searchResult" >
                            <div className="topRow d;-flex">
                                <p>Showing all {result} results</p>
                                <div className="dropdown">
                                    <button className="dropdownButton d-flex">
                                        <p>Default sorting</p>
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
                            </div>
                            <div className="cards">
                                <div className="cards2">
                                    <ShopCard />
                                </div>
                                <div className="cards2">
                                    <ShopCard />
                                </div>
                                <div className="cards2">
                                    <ShopCard />
                                </div>
                                <div className="cards2">
                                    <ShopCard />
                                </div>
                                <div className="cards2">
                                    <ShopCard />
                                </div>
                                <div className="cards2">
                                    <ShopCard />
                                </div>
                                <div className="cards2">
                                    <ShopCard />
                                </div>
                                <div className="cards2">
                                    <ShopCard />
                                </div>
                                <div className="cards2">
                                    <ShopCard />
                                </div>
                                <div className="cards2">
                                    <ShopCard />
                                </div>
                                <div className="cards2">
                                    <ShopCard />
                                </div>
                                <div className="cards2">
                                    <ShopCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export default Shop;