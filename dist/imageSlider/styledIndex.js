var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var Container = styled.div.attrs(function (_a) {
    var $width = _a.$width, $height = _a.$height;
    return ({
        style: {
            width: $width ? "".concat($width + 20, "px") : "100%",
            height: $height ? "".concat($height, "px") : "auto",
        },
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"])));
export var SliderContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tposition: relative;\n\talign-items: center;\n"], ["\n\tdisplay: flex;\n\tposition: relative;\n\talign-items: center;\n"])));
export var SliderImgContainer = styled.div.attrs(function (_a) {
    var $width = _a.$width, $height = _a.$height, $borderRadius = _a.$borderRadius;
    return ({
        style: {
            width: $width ? "".concat($width, "px") : "100%",
            height: $height ? "".concat($height, "px") : "100%",
            borderRadius: "".concat($borderRadius, "px"),
        },
    });
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\toverflow: hidden;\n"], ["\n\tdisplay: flex;\n\toverflow: hidden;\n"])));
export var ImgInnerContainer = styled.div.attrs(function (_a) {
    var $offset = _a.$offset, $transitionEnabled = _a.$transitionEnabled, $duration = _a.$duration;
    return ({
        style: {
            transform: "translateX(".concat($offset, "px)"),
            transition: $transitionEnabled ? "".concat($duration, "ms") : "none",
        },
    });
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tdisplay: flex;\n"], ["\n\tdisplay: flex;\n"])));
export var Indicator = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\twidth: 13px;\n\theight: 13px;\n\tborder: 1px solid ", ";\n\tbackground-color: ", ";\n\tborder-radius: 50%;\n\tmargin-inline: 2px;\n\ttransition: 0.3s;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground-color: ", ";\n\t}\n"], ["\n\twidth: 13px;\n\theight: 13px;\n\tborder: 1px solid ", ";\n\tbackground-color: ", ";\n\tborder-radius: 50%;\n\tmargin-inline: 2px;\n\ttransition: 0.3s;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground-color: ", ";\n\t}\n"])), function (props) { return props.$dotBorderColor; }, function (props) { return props.$dotColor; }, function (props) { return props.$dotHoverColor; });
export var IndicatorContainer = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\ttransform: translateY(-20px);\n\tdisplay: flex;\n"], ["\n\ttransform: translateY(-20px);\n\tdisplay: flex;\n"])));
export var Button = styled.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tdisplay: flex;\n\tposition: absolute;\n\tcolor: ", ";\n\tfont-size: ", "px;\n\tcursor: pointer;\n\tz-index: 1;\n\tbackground: none;\n\tborder: none;\n\n\t&:hover {\n\t\ttransition: 0.3s;\n\t\ttransform: scale(120%);\n\t}\n\t&:active {\n\t\ttransition: 0s;\n\t\ttransform: scale(100%);\n\t}\n\n\t&.left {\n\t}\n\n\t&.right {\n\t\tright: 0;\n\t}\n"], ["\n\tdisplay: flex;\n\tposition: absolute;\n\tcolor: ", ";\n\tfont-size: ", "px;\n\tcursor: pointer;\n\tz-index: 1;\n\tbackground: none;\n\tborder: none;\n\n\t&:hover {\n\t\ttransition: 0.3s;\n\t\ttransform: scale(120%);\n\t}\n\t&:active {\n\t\ttransition: 0s;\n\t\ttransform: scale(100%);\n\t}\n\n\t&.left {\n\t}\n\n\t&.right {\n\t\tright: 0;\n\t}\n"])), function (props) { return props.$arrowColor; }, function (props) { return props.$arrowSize; });
export var ImageWrapper = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: ", ";\n\theight: ", ";\n"], ["\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: ", ";\n\theight: ", ";\n"])), function (props) { return (props.$width ? "".concat(props.$width, "px") : ""); }, function (props) { return (props.$height ? "".concat(props.$height, "px") : ""); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
