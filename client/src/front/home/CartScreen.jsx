import Basic from "../layouts/Basic";

export default function () {
    return (
        <Basic>

            <div className="container">
                <h2>Shopping Cart</h2>
                <div className="cart">
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h5>Product 1</h5>
                                    <div>$19.99</div>
                                </td>

                                <td>
                                    <i className="fa-solid fa-square-plus"></i>
                                    <span className="count">10</span>
                                    <i className="fa-solid fa-square-minus"></i>
                                </td>
                                <td>$19.99</td>
                                <td>
                                    <i className="fa-solid fa-trash"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>Product 2</h5>
                                    <div>$50.00</div>
                                </td>
                                <td>
                                    <i className="fa-solid fa-square-plus"></i>
                                    <span className="count">5</span>
                                    <i className="fa-solid fa-square-minus"></i>
                                </td>
                                <td>$59.98</td>
                                <td>
                                    <i className="fa-solid fa-trash"></i>
                                </td>
                            </tr>
                            <tr className="total">
                                <td></td>
                                <td><h2>Sub Total</h2></td>
                                <td>$79.97</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div className="checkout">
                    <a href="/checkout"><div className="btn">Checkout</div></a>
                </div>
            </div>

        </Basic>
    )
}