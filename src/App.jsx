import React, { useState } from "react";
import Lightbox from "./lightbox";
import './App.css';
import './shared.css';

function App() {
    const [isMenuClosed, closeMenu] = useState(true);
    const [isCartClosed, closeCart] = useState(true);
    const [isLightboxVisible, showLightbox] = useState(false);
    const [numOfProductsAdded, updateNumOfProductsAdded] = useState(0);
    const [totalNumOfProducts, updateTotalNumOfProducts] = useState(0);
    const [mainImageIndex, updateMainImageIndex] = useState(0);


    const singleProductPrice = 125;
    const numOfThumbnailImages = 4;
    const productImageUrls = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"];
    const productImageAlts = ["product 1", "product 2", "product 3", "product 4"];

    const closeButtonClickHandler = (e) => {
        closeMenu(true);
    };

    const menuClickHandler = (e) => {
        closeMenu(false);
    };

    const viewCartButtonClickHandler = (e) => {
        closeCart(!isCartClosed);
    };

    const reduceNumOfProductsAddedHandler = (e) => {
        if (numOfProductsAdded > 0) {
            updateNumOfProductsAdded(numOfProductsAdded - 1);
        }
    };

    const increaseNumOfProductsAddedHandler = (e) => {
        updateNumOfProductsAdded(numOfProductsAdded + 1);
    };

    const addToCartButtonClickHandler = (e) => {
        if (numOfProductsAdded > 0) {
            updateTotalNumOfProducts(totalNumOfProducts + numOfProductsAdded);
            updateNumOfProductsAdded(0);
        }
    };

    const checkoutButtonClickHandler = (e) => {
        closeCart(true);
    };

    const removeCartItemClickHandler = (e) => {
        updateTotalNumOfProducts(0);
        closeCart(true);
    };

    const thumbnailClickHandler = (index) => {
        updateMainImageIndex(index);
    };

    const mainPreviousButtonClickHandler = (e) => {
        if (mainImageIndex > 0) {
            updateMainImageIndex(mainImageIndex - 1);
        }
        else {
            updateMainImageIndex(numOfThumbnailImages - 1);
        }
    };

    const mainNextButtonClickHandler = (e) => {
        if (mainImageIndex < numOfThumbnailImages - 1) {
            updateMainImageIndex(mainImageIndex + 1);
        }
        else {
            updateMainImageIndex(0);
        }
    };

    const mainImageButtonClickHandler = (e) => {
        showLightbox(true);
    };

    const onCloseLightboxHandler = (e) => {
        showLightbox(false);
    };

    return (
        <div className="container">
            <header>
                <div className="navigation-bar flex">
                    <div className="left flex">
                        <img id="menu" src="./images/icon-menu.svg" alt="icon menu" onClick={menuClickHandler} />
                        <img className="logo" src="./images/logo.svg" alt="logo" />
                        <ul className={"navigation-menu flex " + (isMenuClosed ? "" : "mobile")}>
                            <li>
                                <a href="/">Collections</a>
                            </li>
                            <li>
                                <a href="/">Men</a>
                            </li>
                            <li>
                                <a href="/">Women</a>
                            </li>
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li style={{ margin: '0' }}>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                        <div className={"overlay " + (isMenuClosed ? "" : "mobile")}></div>
                        <button id="menu-close-button" className={"flex " + (isMenuClosed ? "" : "mobile")} onClick={closeButtonClickHandler}>
                            <svg style={{ width: '0.896rem', height: '0.896rem', display: 'block' }} viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd" /></svg>
                        </button>
                    </div>
                    <div className="right flex">
                        <button id="view-cart-button" onClick={viewCartButtonClickHandler}>
                            <span style={{ position: 'relative' }}>
                                <svg className="cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fillRule="nonzero" /></svg>
                                {(totalNumOfProducts > 0) && <span className="cart-num-of-products">{totalNumOfProducts}</span>}
                            </span>
                        </button>
                        <a href="/">
                            <img className="avatar" src="./images/image-avatar.png" alt="avatar" />
                        </a>
                    </div>
                </div>
                <div className="line"></div>
                <div className="vertical-flex" id="cart-popup" style={{ display: (isCartClosed ? "none" : "flex") }}>
                    <div className="title flex">
                        <div>Cart</div>
                    </div>
                    <div className="content flex" style={{ flex: 1 }}>
                        {totalNumOfProducts === 0 &&
                            <div id="empty-cart" className="flex">
                                <div>Your cart is empty.</div>
                            </div>
                        }
                        {totalNumOfProducts > 0 &&
                            <div id="full-cart" className="vertical-flex">
                                <div className="full-cart-content flex">
                                    <div className="flex" style={{ flex: 0, marginRight: '1rem' }}>
                                        <img src="./images/image-product-1-thumbnail.jpg" alt="product 1" style={{ width: '3.125rem', borderRadius: '0.25rem' }} />
                                    </div>
                                    <div style={{ flex: 1, color: 'var(--dark-grayish-blue)', marginRight: '1rem' }}>
                                        <div>Fall Limited Edition Sneakers</div>
                                        <span style={{ marginRight: '0.375rem' }}>${singleProductPrice}.00 x <span className="cart-num-of-products">{totalNumOfProducts}</span></span>
                                        <span style={{ color: 'var(--very-dark-blue)', fontWeight: 'bold' }} id="cart-total">{"$" + (totalNumOfProducts * singleProductPrice) + ".00"}</span>
                                    </div>
                                    <button className="remove-cart-item-button flex" style={{ flex: 0, backgroundColor: 'transparent' }} onClick={removeCartItemClickHandler}>
                                        <svg className="remove-cart-item" width="14" height="16"><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" fillRule="nonzero" /></svg>
                                    </button>
                                </div>
                                <button id="checkout-cart-button" onClick={checkoutButtonClickHandler}>Checkout</button>
                            </div>
                        }
                    </div>
                </div>
            </header>
            <main className="flex">
                <div className="product-images">
                    <div className="desktop">
                        <button id="main-image-button" onClick={mainImageButtonClickHandler}>
                            <img className="main-image" src={productImageUrls[mainImageIndex]} alt={productImageAlts[mainImageIndex]} />
                        </button>
                        <div className="thumbnails flex">
                            {productImageUrls.map((productImageUrl, index) => {
                                let productImageAlt = productImageAlts[index];
                                return (
                                    <button key={index}
                                        className={mainImageIndex === index ? "active" : ""}
                                        onClick={() => thumbnailClickHandler(index)}>
                                        <div className="overlay"></div>
                                        <img src={productImageUrl.replace(".jpg", "") + "-thumbnail.jpg"} alt={productImageAlt} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="mobile">
                        <img className="main-image" src={productImageUrls[mainImageIndex]} alt={productImageAlts[mainImageIndex]} />
                        <button id="main-previous-button" className="flex" onClick={mainPreviousButtonClickHandler}>
                            <svg viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                        </button>
                        <button id="main-next-button" className="flex" onClick={mainNextButtonClickHandler}>
                            <svg viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                        </button>
                    </div>
                </div>
                <div className="product-details">
                    <div className="title">Sneaker Company</div>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <div className="description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</div>
                    <div className="prices vertical-flex">
                        <div className="flex">
                            <h2 className="new-price">$125.00</h2>
                            <div className="discount">50%</div>
                        </div>
                        <div className="old-price">$250.00</div>
                    </div>
                    <div className="actions flex">
                        <div className="num-of-products-buttons flex">
                            <button id="minus-button" onClick={reduceNumOfProductsAddedHandler}>
                                <svg width="12" height="4"><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" fillRule="nonzero" /></svg>
                            </button>
                            <div id="num-of-products">{numOfProductsAdded}</div>
                            <button id="plus-button" onClick={increaseNumOfProductsAddedHandler}>
                                <svg width="12" height="12"><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" fillRule="nonzero" /></svg>
                            </button>
                        </div>
                        <button id="add-to-cart-button" className="flex" onClick={addToCartButtonClickHandler}>
                            <svg className="cart" style={{ width: '1rem', height: '1rem', fill: 'var(--white)' }} viewBox="0 0 22 20"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fillRule="nonzero" /></svg>
                            <div style={{ lineHeight: '1rem', fontWeight: 'bold' }}>Add to cart</div>
                        </button>
                    </div>
                </div>
            </main>
            {isLightboxVisible &&
                <Lightbox mainImageUrl={productImageUrls[mainImageIndex]}
                    mainImageAlt={productImageAlts[mainImageIndex]}
                    productImageUrls={productImageUrls}
                    productImageAlts={productImageAlts}
                    onCloseHandler={onCloseLightboxHandler} />
            }
        </div>
    );
}

export default App;
