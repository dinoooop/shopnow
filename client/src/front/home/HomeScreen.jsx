import Basic from "../layouts/Basic";

export default function () {
    return (
        <Basic>
            <div className="container">
                <h2>Featured Products</h2>
                <div className="products">
                    <div className="product">
                        <h3>Product 1</h3>
                        <p>Description of Product 1</p>
                        <p>Price: $19.99</p>
                        <button className="btn-small">Add to Cart</button>
                    </div>
                    <div className="product">
                        <h3>Product 2</h3>
                        <p>Description of Product 2</p>
                        <p>Price: $29.99</p>
                        <button className="btn-small">Add to Cart</button>
                    </div>
                    <div className="product">
                        <h3>Product 3</h3>
                        <p>Description of Product 3</p>
                        <p>Price: $39.99</p>
                        <button className="btn-small">Add to Cart</button>
                    </div>
                </div>
            </div>
        </Basic>
    )
}