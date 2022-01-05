'use strict';

//const e = React.createElement;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lightbox = function (_React$Component) {
    _inherits(Lightbox, _React$Component);

    function Lightbox(props) {
        _classCallCheck(this, Lightbox);

        var _this = _possibleConstructorReturn(this, (Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).call(this, props));

        _this.handleClose = _this.handleClose.bind(_this);
        _this.handlePrevious = _this.handlePrevious.bind(_this);
        _this.handleNext = _this.handleNext.bind(_this);
        _this.handleThumbnailClick = _this.handleThumbnailClick.bind(_this);
        _this.state = {
            mainImageUrl: _this.props.mainImageUrl,
            mainImageAlt: _this.props.mainImageAlt,
            mainImageIndex: _this.props.productImageUrls.indexOf(_this.props.mainImageUrl)
        };
        return _this;
    }

    _createClass(Lightbox, [{
        key: 'handleClose',
        value: function handleClose() {
            ReactDOM.unmountComponentAtNode(document.getElementById('lightbox-container'));
        }
    }, {
        key: 'handlePrevious',
        value: function handlePrevious() {
            if (this.state.mainImageIndex > 0) {
                var newImageIndex = this.state.mainImageIndex - 1;
                this.setState({
                    mainImageIndex: newImageIndex,
                    mainImageAlt: this.props.productImageAlts[newImageIndex],
                    mainImageUrl: this.props.productImageUrls[newImageIndex]
                });
            } else {
                var _newImageIndex = this.props.productImageUrls.length - 1;
                this.setState({
                    mainImageIndex: _newImageIndex,
                    mainImageAlt: this.props.productImageAlts[_newImageIndex],
                    mainImageUrl: this.props.productImageUrls[_newImageIndex]
                });
            }
        }
    }, {
        key: 'handleNext',
        value: function handleNext() {
            if (this.state.mainImageIndex < this.props.productImageUrls.length - 1) {
                var newImageIndex = this.state.mainImageIndex + 1;
                this.setState({
                    mainImageIndex: newImageIndex,
                    mainImageAlt: this.props.productImageAlts[newImageIndex],
                    mainImageUrl: this.props.productImageUrls[newImageIndex]
                });
            } else {
                var _newImageIndex2 = 0;
                this.setState({
                    mainImageIndex: _newImageIndex2,
                    mainImageAlt: this.props.productImageAlts[_newImageIndex2],
                    mainImageUrl: this.props.productImageUrls[_newImageIndex2]
                });
            }
        }
    }, {
        key: 'handleThumbnailClick',
        value: function handleThumbnailClick(index) {
            this.setState({
                mainImageIndex: index,
                mainImageAlt: this.props.productImageAlts[index],
                mainImageUrl: this.props.productImageUrls[index]
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { id: 'lightbox' },
                React.createElement('div', { className: 'overlay' }),
                React.createElement(
                    'div',
                    { className: 'content' },
                    React.createElement('img', { className: 'main-image', src: this.state.mainImageUrl, alt: this.state.mainImageAlt }),
                    React.createElement(
                        'div',
                        { className: 'thumbnails flex' },
                        this.props.productImageUrls.map(function (productImageUrl, index) {
                            var productImageAlt = _this2.props.productImageAlts[index];
                            return React.createElement(
                                'button',
                                { key: index,
                                    className: '' + (_this2.state.mainImageUrl == productImageUrl ? "active" : ""),
                                    onClick: function onClick() {
                                        return _this2.handleThumbnailClick(index);
                                    } },
                                React.createElement('div', { className: 'overlay' }),
                                React.createElement('img', { src: productImageUrl.replace(".jpg", "") + "-thumbnail.jpg", alt: productImageAlt })
                            );
                        })
                    ),
                    React.createElement(
                        'button',
                        { id: 'close-button', className: 'flex', onClick: this.handleClose },
                        React.createElement(
                            'svg',
                            { viewBox: '0 0 14 15', xmlns: 'http://www.w3.org/2000/svg' },
                            React.createElement('path', { d: 'm11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z', fillRule: 'evenodd' })
                        )
                    ),
                    React.createElement(
                        'button',
                        { id: 'lightbox-previous-button', className: 'flex', onClick: this.handlePrevious },
                        React.createElement(
                            'svg',
                            { viewBox: '0 0 12 18', xmlns: 'http://www.w3.org/2000/svg' },
                            React.createElement('path', { d: 'M11 1 3 9l8 8', strokeWidth: '3', fill: 'none', fillRule: 'evenodd' })
                        )
                    ),
                    React.createElement(
                        'button',
                        { id: 'lightbox-next-button', className: 'flex', onClick: this.handleNext },
                        React.createElement(
                            'svg',
                            { viewBox: '0 0 13 18', xmlns: 'http://www.w3.org/2000/svg' },
                            React.createElement('path', { d: 'm2 1 8 8-8 8', strokeWidth: '3', fill: 'none', fillRule: 'evenodd' })
                        )
                    )
                )
            );
        }
    }]);

    return Lightbox;
}(React.Component);

//const domContainer = document.querySelector('#lightbox-container');
//ReactDOM.render(e(Lightbox), domContainer);