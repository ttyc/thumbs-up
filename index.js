"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
    function PraiseButton() {
        var score = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        _classCallCheck(this, PraiseButton);

        this.score = score;
    }

    _createClass(PraiseButton, [{
        key: "addScore",
        value: function addScore() {
            this.score = this.score + 1;
        }
    }, {
        key: "getScore",
        value: function getScore() {
            return this.score;
        }
    }]);

    return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb(options) {
        _classCallCheck(this, Thumb);

        var thumbDom = options.thumbDom,
            scoreDom = options.scoreDom,
            score = options.score;

        var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, score));

        _this.thumbDom = thumbDom;
        _this.scoreDom = scoreDom;
        _this.init();
        return _this;
    }

    _createClass(Thumb, [{
        key: "init",
        value: function init() {
            this.bindEvent();
            this.renderScore();
        }
    }, {
        key: "renderScore",
        value: function renderScore() {
            this.scoreDom.innerHTML = this.getScore();
        }
    }, {
        key: "bindEvent",
        value: function bindEvent() {
            var _this2 = this;

            this.thumbDom.addEventListener("click", function () {
                _this2.addScore();
                _this2.renderScore();
            }, false);
        }
    }]);

    return Thumb;
}(PraiseButton);

new Thumb({
    thumbDom: document.getElementById("js-thumb"),
    scoreDom: document.getElementById("js-score"),
    score: 0
});
