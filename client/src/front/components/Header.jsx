export default function () {
    return (
        <header>
            <div className="container above-header">
                <div className="phone">
                    <p><i className="fa-solid fa-phone"></i> +569 36268 &nbsp; <i className="fa-solid fa-envelope"></i> inf@samplemail.com</p>
                </div>
                <div className="cart">
                    <a href="/cart"><i className="fa-solid fa-cart-shopping"></i> Cart</a>
                </div>
            </div>
            <div className="header">
                <div className="container header-content">
                    <div className="logo">
                        <h3><a href="/">HOME</a></h3>
                    </div>
                    <div className="search">
                        <input type="text" name="search" className="search" />
                    </div>
                </div>
            </div>
        </header >
    )
}