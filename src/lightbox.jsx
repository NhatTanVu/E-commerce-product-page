import React from "react";
import './lightbox.css';

class Lightbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
        this.state = {
            mainImageUrl: this.props.mainImageUrl,
            mainImageAlt: this.props.mainImageAlt,
            mainImageIndex: this.props.productImageUrls?.indexOf(this.props.mainImageUrl)
        };
    }

    handleClose() {
        this.props.onCloseHandler();
    }

    handlePrevious() {
        if (this.state.mainImageIndex > 0) {
            let newImageIndex = this.state.mainImageIndex - 1;
            this.setState({
                mainImageIndex: newImageIndex,
                mainImageAlt: this.props.productImageAlts[newImageIndex],
                mainImageUrl: this.props.productImageUrls[newImageIndex]
            });
        }
        else {
            let newImageIndex = this.props.productImageUrls.length - 1;
            this.setState({
                mainImageIndex: newImageIndex,
                mainImageAlt: this.props.productImageAlts[newImageIndex],
                mainImageUrl: this.props.productImageUrls[newImageIndex]
            });
        }
    }

    handleNext() {
        if (this.state.mainImageIndex < this.props.productImageUrls.length - 1) {
            let newImageIndex = this.state.mainImageIndex + 1;
            this.setState({
                mainImageIndex: newImageIndex,
                mainImageAlt: this.props.productImageAlts[newImageIndex],
                mainImageUrl: this.props.productImageUrls[newImageIndex]
            });
        }
        else {
            let newImageIndex = 0;
            this.setState({
                mainImageIndex: newImageIndex,
                mainImageAlt: this.props.productImageAlts[newImageIndex],
                mainImageUrl: this.props.productImageUrls[newImageIndex]
            });
        }
    }

    handleThumbnailClick(index) {
        this.setState({
            mainImageIndex: index,
            mainImageAlt: this.props.productImageAlts[index],
            mainImageUrl: this.props.productImageUrls[index]
        });
    }

    render() {
        return (
            <div id="lightbox">
                <div className="overlay"></div>
                <div className="content">
                    <img className="main-image" src={this.state.mainImageUrl} alt={this.state.mainImageAlt} />
                    <div className="thumbnails flex">
                        {this.props.productImageUrls?.map((productImageUrl, index) => {
                            let productImageAlt = this.props.productImageAlts[index];
                            return (
                                <button key={index}
                                    className={`${this.state.mainImageUrl === productImageUrl ? "active" : ""}`}
                                    onClick={() => this.handleThumbnailClick(index)}>
                                    <div className="overlay"></div>
                                    <img src={productImageUrl.replace(".jpg", "") + "-thumbnail.jpg"} alt={productImageAlt} />
                                </button>
                            );
                        })}
                    </div>
                    <button id="close-button" className="flex" onClick={this.handleClose}>
                        <svg viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd" /></svg>
                    </button>
                    <button id="lightbox-previous-button" className="flex" onClick={this.handlePrevious}>
                        <svg viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                    </button>
                    <button id="lightbox-next-button" className="flex" onClick={this.handleNext}>
                        <svg viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                    </button>
                </div>
            </div>
        );
    }
}

export default Lightbox;