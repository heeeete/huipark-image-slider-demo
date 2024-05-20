var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import * as Styled from "./indexStyled";
var ImageSlider = function (_a) {
    var images = _a.images, _b = _a.showArrows, showArrows = _b === void 0 ? true : _b, _c = _a.showDots, showDots = _c === void 0 ? true : _c, _d = _a.enableDrag, enableDrag = _d === void 0 ? true : _d, _e = _a.enableLoop, enableLoop = _e === void 0 ? true : _e, _f = _a.width, width = _f === void 0 ? null : _f, _g = _a.height, height = _g === void 0 ? null : _g, _h = _a.objectFit, objectFit = _h === void 0 ? "fill" : _h, _j = _a.dotColor, dotColor = _j === void 0 ? "RGB(0, 114, 255)" : _j, _k = _a.dotHoverColor, dotHoverColor = _k === void 0 ? "rgb(135, 135, 135)" : _k, _l = _a.dotBorderColor, dotBorderColor = _l === void 0 ? "rgb(152, 152, 152)" : _l, _m = _a.arrowColor, arrowColor = _m === void 0 ? "white" : _m, _o = _a.arrowSize, arrowSize = _o === void 0 ? 50 : _o, _p = _a.dotSize, dotSize = _p === void 0 ? 13 : _p, _q = _a.borderRadius, borderRadius = _q === void 0 ? 0 : _q, _r = _a.autoSlider, autoSlider = _r === void 0 ? 0 : _r, _s = _a.duration, duration = _s === void 0 ? 300 : _s;
    if (duration < 100)
        throw new Error("Duration should be at least 100ms");
    if (autoSlider > 0)
        enableLoop = true;
    var imgStyle = {
        width: width ? "".concat(width, "px") : "100%",
        height: height ? "".concat(height, "px") : "100%",
        objectFit: objectFit,
        borderRadius: borderRadius,
    };
    var sliderContainerRef = useRef(null);
    var loopedImages = enableLoop
        ? __spreadArray(__spreadArray([images[images.length - 1]], images, true), [images[0]], false) : images;
    var _t = useState(0), imgWidth = _t[0], setImgWidth = _t[1];
    var _u = useState(0), offset = _u[0], setOffset = _u[1];
    var _v = useState(enableLoop ? 1 : 0), idx = _v[0], setIdx = _v[1];
    var _w = useState(true), transitionEnabled = _w[0], setTransitionEnabled = _w[1];
    var totalChildren = loopedImages.length;
    var isMoving = useRef(false);
    var initDragPos = 0;
    var travelRatio = 0;
    var travel = 0;
    var originOffset = 0;
    useEffect(function () {
        if (autoSlider) {
            var intervalId_1 = setInterval(function () {
                navigate(1);
            }, autoSlider);
            return function () { return clearInterval(intervalId_1); };
        }
    }, [autoSlider, imgWidth, idx]);
    useEffect(function () {
        if (!transitionEnabled) {
            requestAnimationFrame(function () {
                setTransitionEnabled(true);
            });
        }
    }, [transitionEnabled]);
    useEffect(function () {
        var id;
        var handleResize = function (entries) {
            clearTimeout(id);
            id = window.setTimeout(function () {
                for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                    var e = entries_1[_i];
                    var width_1 = e.contentRect.width;
                    setImgWidth(width_1);
                    setOffset(-idx * width_1);
                    setIdx(enableLoop ? 1 : 0);
                }
            }, 300);
        };
        var resizeObserver = new ResizeObserver(handleResize);
        if (sliderContainerRef.current)
            resizeObserver.observe(sliderContainerRef.current);
        return function () {
            if (sliderContainerRef.current)
                resizeObserver.unobserve(sliderContainerRef.current);
        };
    }, []);
    useEffect(function () {
        if (!enableDrag)
            return;
        var $imgInnerContainer = document.querySelector(".img-inner-container");
        var startMouse = function (e) {
            setTransitionEnabled(false);
            travel = e.clientX - initDragPos;
            travelRatio = travel / imgWidth;
            setOffset(originOffset + travel);
        };
        var stopMouse = function () {
            setTransitionEnabled(true);
            if (Math.abs(travelRatio) > 0.2) {
                var newIdx = travelRatio > 0
                    ? Math.max(idx - 1, 0)
                    : Math.min(idx + 1, totalChildren - 1);
                setIdx(newIdx);
                setOffset(newIdx * -imgWidth);
            }
            else {
                setOffset(idx * -imgWidth);
            }
            document.removeEventListener("mousemove", startMouse);
            document.removeEventListener("mouseup", stopMouse);
        };
        var downMouse = function (e) {
            e.preventDefault();
            if (!isMoving.current) {
                isMoving.current = true;
                setTransitionEnabled(false);
                travelRatio = 0;
                initDragPos = e.clientX;
                originOffset = offset;
                document.addEventListener("mousemove", startMouse);
                document.addEventListener("mouseup", stopMouse);
                setTimeout(function () {
                    isMoving.current = false;
                }, duration + 100);
            }
        };
        $imgInnerContainer === null || $imgInnerContainer === void 0 ? void 0 : $imgInnerContainer.addEventListener("mousedown", downMouse);
        return function () {
            $imgInnerContainer === null || $imgInnerContainer === void 0 ? void 0 : $imgInnerContainer.removeEventListener("mousedown", downMouse);
            document.removeEventListener("mousemove", startMouse);
            document.removeEventListener("mouseup", stopMouse);
        };
    }, [enableDrag, imgWidth, idx]);
    var handleTransitionEnd = function () {
        if (enableLoop) {
            if (idx === 0) {
                setTransitionEnabled(false);
                setIdx(images.length);
                setOffset(-images.length * imgWidth);
            }
            else if (idx === totalChildren - 1) {
                setTransitionEnabled(false);
                setIdx(1);
                setOffset(1 * -imgWidth);
            }
        }
    };
    var onClickIndicator = function (idx) {
        setOffset(-idx * imgWidth);
        setIdx(idx);
    };
    var navigate = function (direction) {
        if (!isMoving.current) {
            var newIdx = idx + direction;
            if (enableLoop) {
                if (newIdx >= totalChildren) {
                    newIdx = 1;
                }
                else if (newIdx <= -1) {
                    newIdx = totalChildren - 2;
                }
            }
            else {
                newIdx = Math.max(0, Math.min(totalChildren - 1, newIdx));
            }
            isMoving.current = true;
            setIdx(newIdx);
            setOffset(-newIdx * imgWidth);
            setTimeout(function () {
                isMoving.current = false;
            }, duration + 100);
        }
    };
    var RenderIndicators = function () {
        var indicators = Array.from({ length: enableLoop ? totalChildren - 2 : totalChildren }, function (_, _idx) {
            var indicatorIdx = enableLoop ? _idx + 1 : _idx;
            var hoverFlag = true;
            var backgroundColor;
            if (enableLoop) {
                if (idx === totalChildren - 1 && indicatorIdx === 1) {
                    backgroundColor = dotColor;
                    hoverFlag = false;
                }
                else if (idx === 0 && indicatorIdx === totalChildren - 2) {
                    backgroundColor = dotColor;
                    hoverFlag = false;
                }
                else if (indicatorIdx === idx) {
                    backgroundColor = dotColor;
                    hoverFlag = false;
                }
                else {
                    backgroundColor = "";
                }
            }
            else {
                if (idx === _idx)
                    backgroundColor = dotColor;
                else
                    backgroundColor = "";
            }
            return (_jsx(Styled.Indicator, { "$dotColor": backgroundColor, "$dotHoverColor": dotHoverColor, "$dotBorderColor": dotBorderColor, "$hoverFlag": hoverFlag, "$dotSize": dotSize, onClick: function () { return onClickIndicator(_idx + 1); } }, _idx));
        });
        return _jsx(_Fragment, { children: indicators });
    };
    return (_jsxs(Styled.Container, __assign({ "$width": width, "$height": height }, { children: [_jsxs(Styled.SliderContainer, { children: [showArrows ? (_jsx(Styled.Button, __assign({ onClick: function () { return navigate(-1); }, className: "left", "$arrowColor": arrowColor, "$arrowSize": arrowSize }, { children: _jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20" }, { children: _jsxs("g", __assign({ fill: "currentColor" }, { children: [_jsx("path", { d: "m12.384 15.68l-5-6l-.768.64l5 6z" }), _jsx("path", { d: "m11.616 16.32l-5-6c-.427-.512.341-1.152.768-.64l5 6c.427.512-.341 1.152-.768.64" }), _jsx("path", { d: "m11.616 3.68l-5 6l.768.64l5-6z" }), _jsx("path", { d: "m12.384 4.32l-5 6c-.427.512-1.195-.128-.768-.64l5-6c.427-.512 1.195.128.768.64" })] })) })) }))) : (""), _jsx(Styled.SliderImgContainer, __assign({ ref: sliderContainerRef, "$width": width, "$height": height, "$borderRadius": borderRadius }, { children: _jsx(Styled.ImgInnerContainer, __assign({ "$offset": offset, "$transitionEnabled": transitionEnabled, "$duration": duration, className: "img-inner-container", onTransitionEnd: handleTransitionEnd }, { children: loopedImages.map(function (e, idx) {
                                return (_jsx("img", { src: e.url, alt: "img-".concat(idx), loading: "lazy", style: imgStyle }, idx));
                            }) })) })), showArrows ? (_jsx(Styled.Button, __assign({ onClick: function () { return navigate(1); }, className: "right", "$arrowColor": arrowColor, "$arrowSize": arrowSize }, { children: _jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20" }, { children: _jsxs("g", __assign({ fill: "currentColor" }, { children: [_jsx("path", { d: "M7.116 4.32a.5.5 0 1 1 .768-.64l5 6a.5.5 0 0 1-.768.64z" }), _jsx("path", { d: "M7.884 16.32a.5.5 0 0 1-.768-.64l5-6a.5.5 0 1 1 .768.64z" })] })) })) }))) : ("")] }), showDots ? (_jsx(Styled.IndicatorContainer, { children: _jsx(RenderIndicators, {}) })) : ("")] })));
};
export default ImageSlider;
