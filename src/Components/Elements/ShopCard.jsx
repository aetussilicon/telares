import "../../Styles/css/ShopCard.css"

function ShopCard() {
    return (
        <div className="container">
            <div className="shopCard">
                <img className="itemIcon" src="backgrounds/backgroundShop.png" alt="icon" />
                <div className="cardInfo">
                    <h2 className="cardTitle">Exemple Product</h2>
                    <p className="stars">🟊🟊🟊🟊🟊</p>
                    <p className="price">€39.00</p>
                    <button type="button" className="btn btn-secondary cardButton">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default ShopCard;