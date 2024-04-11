import Basic from "../layouts/Basic";

export default function () {
    return (
        <Basic>
            <div className="container main checkout-page">
                <div className="billing-info">
                    <h1>Billing Details</h1>

                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label for="address">Country</label>
                        <select name="country">
                            <option value=""> - Select - </option>
                            <option value="IN">India</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="state">State</label>
                        <input type="text" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label for="zip">Zip Code</label>
                        <input type="text" id="zip" name="zip" />
                    </div>
                    <button type="submit" className="btn">Place Order</button>

                </div>

                <div className="cart-summary">
                    <h2>Cart Summary</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Product 1</td>
                                <td>$26</td>
                            </tr>
                            <tr>
                                <td>Product 2</td>
                                <td>$34</td>
                            </tr>
                            <tr>
                                <td><strong>Sub Total</strong></td>
                                <td>$34</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div >
        </Basic >
    )
}