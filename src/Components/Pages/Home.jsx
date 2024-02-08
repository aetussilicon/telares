import Header from "../Elements/Header";
import '../../Styles/css/Home.css';
import PageFooter from "../Elements/PageFooter";


export default function Home() {
    return (
        <>
            <div className="container">
                <Header />
                <div className="main-banner banner-home">
                    <div className="banner-text d-flex justify-content-center">
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button>Click me</button>
                    </div>
                </div>
                <div className="categories-container d-flex">
                    <div className="categories-banner firtsBlock d-flex">
                        <img src="imgs/categoriesThird.jpg" />
                        <div className="categories-text">
                            <h3>Categoria</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button>Doloy y ver productos</button>
                        </div>
                    </div>
                    <div className="categories-banner d-flex">
                        <img src="imgs/categoriesFirst.jpg" />
                        <div className="categories-text">
                            <h3>Categoria</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button>Doloy y ver productos</button>
                        </div>
                    </div>
                    <div className="categories-banner d-flex">
                        <img src="imgs/categoriesSecond.jpg" />
                        <div className="categories-text">
                            <h3>Categoria</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button>Doloy y ver productos</button>
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