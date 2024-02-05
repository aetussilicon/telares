import Header from "../Elements/Header";
import '../../Styles/css/Home.css';

function Home() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="banner bannerHome">
                    <div className="text d-flex justify-content-center">
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button>Click me</button>
                        </div>
                </div>
                <div className="categoriesBlock d-flex">
                    <div className="selectBlock firtsBlock d-flex">
                        <img src="imgs/categoriesThird.jpg" />
                        <div className="text">
                            <h3>Categoria</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button>Doloy y ver productos</button>
                        </div>
                    </div>
                    <div className="selectBlock middleBlock d-flex">
                        <img src="imgs/categoriesFirst.jpg" />
                        <div className="text">
                            <h3>Categoria</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button>Doloy y ver productos</button>
                        </div>
                    </div>
                    <div className="selectBlock lastBlock d-flex">
                        <img src="imgs/categoriesSecond.jpg" />
                        <div className="text">
                            <h3>Categoria</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button>Doloy y ver productos</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;