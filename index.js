'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var styled = _interopDefault(require('styled-components'));
var smoothscroll = _interopDefault(require('smoothscroll-polyfill'));
var debounce = _interopDefault(require('lodash.debounce'));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _templateObject, _templateObject2;
var ButtonWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  @media screen and (max-width: ", "px) {\n    display: none;\n  }\n"])), function (_ref) {
  var mobileBreakpoint = _ref.mobileBreakpoint;
  return mobileBreakpoint;
});
var Button = styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: calc(50% - 17.5px);\n  height: 35px;\n  width: 35px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 5px 0 #0009;\n  z-index: 10;\n  cursor: pointer;\n  font-size: 10px;\n  opacity: 0.6;\n  transition: opacity 0.25s;\n  left: ", ";\n  right: ", ";\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &::before {\n    content: '';\n    height: 10px;\n    width: 10px;\n    background: transparent;\n    border-top: 2px solid #000;\n    border-right: 2px solid #000;\n    display: inline-block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: ", ";\n  }\n"])), function (_ref2) {
  var type = _ref2.type;
  return type === 'prev' ? '5px' : 'initial';
}, function (_ref3) {
  var type = _ref3.type;
  return type === 'next' ? '5px' : 'initial';
}, function (_ref4) {
  var type = _ref4.type;
  return type === 'prev' ? 'translate(-25%, -50%) rotate(-135deg)' : 'translate(-75%, -50%) rotate(45deg)';
});

var ArrowButton = function ArrowButton(_ref5) {
  var type = _ref5.type,
      _ref5$mobileBreakpoin = _ref5.mobileBreakpoint,
      mobileBreakpoint = _ref5$mobileBreakpoin === void 0 ? 1 : _ref5$mobileBreakpoin,
      _ref5$hidden = _ref5.hidden,
      hidden = _ref5$hidden === void 0 ? false : _ref5$hidden,
      CustomBtn = _ref5.CustomBtn,
      onClick = _ref5.onClick;
  return /*#__PURE__*/React__default.createElement(ButtonWrapper, {
    mobileBreakpoint: mobileBreakpoint,
    hidden: hidden,
    onClick: onClick
  }, CustomBtn ? typeof CustomBtn === 'function' ? /*#__PURE__*/React__default.createElement(CustomBtn, null) : CustomBtn : /*#__PURE__*/React__default.createElement(Button, {
    type: type
  }));
};

ArrowButton.propTypes = {
  type: PropTypes.oneOf(['prev', 'next']).isRequired,
  mobileBreakpoint: PropTypes.number,
  hidden: PropTypes.bool,
  CustomBtn: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.elementType]),
  onClick: PropTypes.func.isRequired
};

var _templateObject$1, _templateObject2$1;
var DotWrapper = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0 5px;\n  cursor: pointer;\n"])));
var DotDefault = styled.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: ", ";\n"])), function (_ref) {
  var color = _ref.color;
  return color;
});

var Dot = function Dot(_ref2) {
  var index = _ref2.index,
      _ref2$isActive = _ref2.isActive,
      isActive = _ref2$isActive === void 0 ? false : _ref2$isActive,
      dotColorInactive = _ref2.dotColorInactive,
      dotColorActive = _ref2.dotColorActive,
      DotCustom = _ref2.dot,
      onClick = _ref2.onClick;
  var handleClick = React.useCallback(function () {
    onClick(index);
  }, [index, onClick]);
  return /*#__PURE__*/React__default.createElement(DotWrapper, {
    onClick: handleClick
  }, DotCustom ? /*#__PURE__*/React__default.createElement(DotCustom, {
    isActive: isActive
  }) : /*#__PURE__*/React__default.createElement(DotDefault, {
    color: isActive ? dotColorActive : dotColorInactive
  }));
};

Dot.propTypes = {
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  dotColorInactive: PropTypes.string,
  dotColorActive: PropTypes.string,
  dot: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.elementType]),
  onClick: PropTypes.func.isRequired
};

var HANDLER_NAME_SPACE = '__react-grid-carousle-resize-handler';
var handleResize = debounce(function (e) {
  Object.values(window[HANDLER_NAME_SPACE]).forEach(function (handler) {
    if (typeof handler === 'function') {
      handler(e);
    }
  });
}, 16);

var setupListener = function setupListener() {
  window.addEventListener('resize', handleResize);
};

var removeListener = function removeListener() {
  window.removeEventListener('resize', handleResize);
};

var addResizeHandler = function addResizeHandler(key, handler) {
  if (_typeof(window[HANDLER_NAME_SPACE]) !== 'object') {
    window[HANDLER_NAME_SPACE] = {};
    setupListener();
  }

  window[HANDLER_NAME_SPACE][key] = handler;
};
var removeResizeHandler = function removeResizeHandler(key) {
  delete window[HANDLER_NAME_SPACE][key];

  if (!Object.keys(window[HANDLER_NAME_SPACE])) {
    delete window[HANDLER_NAME_SPACE];
    removeListener();
  }
};

var useResponsiveLayout = function useResponsiveLayout() {
  var breakpointList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      currentBreakpointSetting = _useState2[0],
      setCurrentBreakpointSetting = _useState2[1];

  var random = React.useMemo(function () {
    return "".concat(Math.random(), "-").concat(Math.random());
  }, []);
  var sortedBreakpointList = React.useMemo(function () {
    return _toConsumableArray(breakpointList).sort(function (a, b) {
      return (b.breakpoint || 0) - (a.breakpoint || 0);
    });
  }, [breakpointList]);
  var handleResize = React.useCallback(function () {
    var windowWidth = window.innerWidth;
    var matchedSetting;
    sortedBreakpointList.find(function (setting) {
      if (windowWidth <= setting.breakpoint) {
        matchedSetting = setting;
      } else {
        return true;
      }
    });
    setCurrentBreakpointSetting(matchedSetting);
  }, [sortedBreakpointList]);
  React.useEffect(function () {
    if (breakpointList.length) {
      handleResize();
      addResizeHandler("responsiveLayout-".concat(random), handleResize);
      return function () {
        removeResizeHandler("responsiveLayout-".concat(random));
      };
    }
  }, [breakpointList, handleResize, random]);
  return currentBreakpointSetting;
};

var _templateObject$2, _templateObject2$2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var Container = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var RailWrapper = styled.div(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  margin: ", ";\n\n  @media screen and (max-width: ", "px) {\n    overflow-x: auto;\n    margin: 0;\n    scroll-snap-type: ", ";\n    scrollbar-width: none;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n"])), function (_ref) {
  var showDots = _ref.showDots;
  return showDots ? '0 20px 15px 20px' : '0 20px';
}, function (_ref2) {
  var mobileBreakpoint = _ref2.mobileBreakpoint;
  return mobileBreakpoint;
}, function (_ref3) {
  var scrollSnap = _ref3.scrollSnap;
  return scrollSnap ? 'x mandatory' : '';
});
var Rail = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-column-gap: ", ";\n  position: relative;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s;\n  grid-template-columns: ", ";\n  transform: ", ";\n\n  @media screen and (max-width: ", "px) {\n    padding-left: ", ";\n    grid-template-columns: ", ";\n    grid-column-gap: ", ";\n    transform: translateX(0);\n  }\n"])), function (_ref4) {
  var gap = _ref4.gap;
  return "".concat(gap, "px");
}, function (_ref5) {
  var page = _ref5.page;
  return "repeat(".concat(page, ", 100%)");
}, function (_ref6) {
  var currentPage = _ref6.currentPage,
      gap = _ref6.gap;
  return "translateX(calc(".concat(-100 * currentPage, "% - ").concat(gap * currentPage, "px))");
}, function (_ref7) {
  var mobileBreakpoint = _ref7.mobileBreakpoint;
  return mobileBreakpoint;
}, function (_ref8) {
  var gap = _ref8.gap;
  return "".concat(gap, "px");
}, function (_ref9) {
  var page = _ref9.page;
  return "repeat(".concat(page, ", 90%)");
}, function (_ref10) {
  var cols = _ref10.cols,
      rows = _ref10.rows,
      gap = _ref10.gap;
  return "calc(".concat((cols * rows - 1) * 90, "% + ").concat(cols * rows * gap, "px)");
});
var ItemSet = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-template-rows: ", ";\n  grid-gap: ", ";\n\n  @media screen and (max-width: ", "px) {\n    grid-template-columns: ", ";\n    grid-template-rows: 1fr;\n\n    &:last-of-type > ", ":last-of-type {\n      padding-right: ", ";\n      margin-right: ", ";\n    }\n  }\n"])), function (_ref11) {
  var cols = _ref11.cols;
  return "repeat(".concat(cols, ", 1fr)");
}, function (_ref12) {
  var rows = _ref12.rows;
  return "repeat(".concat(rows, ", 1fr)");
}, function (_ref13) {
  var gap = _ref13.gap;
  return "".concat(gap, "px");
}, function (_ref14) {
  var mobileBreakpoint = _ref14.mobileBreakpoint;
  return mobileBreakpoint;
}, function (_ref15) {
  var cols = _ref15.cols,
      rows = _ref15.rows;
  return "repeat(".concat(cols * rows, ", 100%)");
},
/* sc-sel */
Item, function (_ref16) {
  var gap = _ref16.gap;
  return "".concat(gap, "px");
}, function (_ref17) {
  var gap = _ref17.gap;
  return "-".concat(gap, "px");
});
var Dots = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: static;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 10px;\n  width: 100%;\n  line-height: 10px;\n  text-align: center;\n\n  @media screen and (max-width: ", "px) {\n    display: none;\n  }\n"])), function (_ref18) {
  var mobileBreakpoint = _ref18.mobileBreakpoint;
  return mobileBreakpoint;
});
var Item = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  scroll-snap-align: ", ";\n"])), function (_ref19) {
  var scrollSnap = _ref19.scrollSnap;
  return scrollSnap ? 'center' : '';
});
var CAROUSEL_ITEM = 'CAROUSEL_ITEM';

var Carousel = function Carousel(_ref20) {
  var _ref20$cols = _ref20.cols,
      colsProp = _ref20$cols === void 0 ? 1 : _ref20$cols,
      _ref20$rows = _ref20.rows,
      rowsProp = _ref20$rows === void 0 ? 1 : _ref20$rows,
      _ref20$gap = _ref20.gap,
      gapProp = _ref20$gap === void 0 ? 10 : _ref20$gap,
      _ref20$loop = _ref20.loop,
      loopProp = _ref20$loop === void 0 ? false : _ref20$loop,
      _ref20$scrollSnap = _ref20.scrollSnap,
      scrollSnap = _ref20$scrollSnap === void 0 ? true : _ref20$scrollSnap,
      _ref20$hideArrow = _ref20.hideArrow,
      hideArrow = _ref20$hideArrow === void 0 ? false : _ref20$hideArrow,
      _ref20$showDots = _ref20.showDots,
      showDots = _ref20$showDots === void 0 ? false : _ref20$showDots,
      autoplayProp = _ref20.autoplay,
      _ref20$dotColorActive = _ref20.dotColorActive,
      dotColorActive = _ref20$dotColorActive === void 0 ? '#795548' : _ref20$dotColorActive,
      _ref20$dotColorInacti = _ref20.dotColorInactive,
      dotColorInactive = _ref20$dotColorInacti === void 0 ? '#ccc' : _ref20$dotColorInacti,
      responsiveLayout = _ref20.responsiveLayout,
      _ref20$mobileBreakpoi = _ref20.mobileBreakpoint,
      mobileBreakpoint = _ref20$mobileBreakpoi === void 0 ? 767 : _ref20$mobileBreakpoi,
      arrowLeft = _ref20.arrowLeft,
      arrowRight = _ref20.arrowRight,
      dot = _ref20.dot,
      _ref20$containerClass = _ref20.containerClassName,
      containerClassName = _ref20$containerClass === void 0 ? '' : _ref20$containerClass,
      _ref20$containerStyle = _ref20.containerStyle,
      containerStyle = _ref20$containerStyle === void 0 ? {} : _ref20$containerStyle,
      _ref20$itemSetStyle = _ref20.itemSetStyle,
      itemSetStyle = _ref20$itemSetStyle === void 0 ? {} : _ref20$itemSetStyle,
      children = _ref20.children,
      startPage = _ref20.startPage,
      pageChangeHandlerProp = _ref20.pageChangeHandler;

  var _useState = React.useState(startPage),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isHover = _useState4[0],
      setIsHover = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isTouch = _useState6[0],
      setIsTouch = _useState6[1];

  var _useState7 = React.useState(colsProp),
      _useState8 = _slicedToArray(_useState7, 2),
      cols = _useState8[0],
      setCols = _useState8[1];

  var _useState9 = React.useState(rowsProp),
      _useState10 = _slicedToArray(_useState9, 2),
      rows = _useState10[0],
      setRows = _useState10[1];

  var _useState11 = React.useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      gap = _useState12[0],
      setGap = _useState12[1];

  var _useState13 = React.useState(loopProp),
      _useState14 = _slicedToArray(_useState13, 2),
      loop = _useState14[0],
      setLoop = _useState14[1];

  var _useState15 = React.useState(autoplayProp),
      _useState16 = _slicedToArray(_useState15, 2),
      autoplay = _useState16[0],
      setAutoplay = _useState16[1];

  var _useState17 = React.useState(0),
      _useState18 = _slicedToArray(_useState17, 2),
      railWrapperWidth = _useState18[0],
      setRailWrapperWidth = _useState18[1];

  var _useState19 = React.useState(false),
      _useState20 = _slicedToArray(_useState19, 2),
      hasSetResizeHandler = _useState20[0],
      setHasSetResizeHandler = _useState20[1];

  var railWrapperRef = React.useRef(null);
  var autoplayIntervalRef = React.useRef(null);
  var breakpointSetting = useResponsiveLayout(responsiveLayout);
  var randomKey = React.useMemo(function () {
    return "".concat(Math.random(), "-").concat(Math.random());
  }, []);
  var pageChangeHandler = React.useRef(pageChangeHandlerProp);
  React.useEffect(function () {
    smoothscroll.polyfill();
  }, []);
  React.useEffect(function () {
    var _ref21 = breakpointSetting || {},
        cols = _ref21.cols,
        rows = _ref21.rows,
        gap = _ref21.gap,
        loop = _ref21.loop,
        autoplay = _ref21.autoplay;

    setCols(cols || colsProp);
    setRows(rows || rowsProp);
    setGap(parseGap(gap || gapProp));
    setLoop(loop || loopProp);
    setAutoplay(autoplay || autoplayProp);
    setCurrentPage(currentPage);

    if (pageChangeHandler && pageChangeHandler.current && typeof pageChangeHandler.current === 'function') {
      pageChangeHandler.current(currentPage);
    }
  }, [breakpointSetting, colsProp, rowsProp, gapProp, loopProp, autoplayProp, parseGap]);
  var handleRailWrapperResize = React.useCallback(function () {
    railWrapperRef.current && setRailWrapperWidth(railWrapperRef.current.offsetWidth);
  }, [railWrapperRef]);
  var setResizeHandler = React.useCallback(function () {
    addResizeHandler("gapCalculator-".concat(randomKey), handleRailWrapperResize);
    setHasSetResizeHandler(true);
  }, [randomKey, handleRailWrapperResize]);
  var rmResizeHandler = React.useCallback(function () {
    removeResizeHandler("gapCalculator-".concat(randomKey));
    setHasSetResizeHandler(false);
  }, [randomKey]);
  var parseGap = React.useCallback(function (gap) {
    var parsed = gap;
    var shouldSetResizeHandler = false;

    if (typeof gap !== 'number') {
      switch (/\D*$/.exec(gap)[0]) {
        case 'px':
          {
            parsed = +gap.replace('px', '');
            break;
          }

        case '%':
          {
            var wrapperWidth = railWrapperWidth || railWrapperRef.current ? railWrapperRef.current.offsetWidth : 0;
            parsed = wrapperWidth * gap.replace('%', '') / 100;
            shouldSetResizeHandler = true;
            break;
          }

        default:
          {
            parsed = 0;
            console.error("Doesn't support the provided measurement unit: ".concat(gap));
          }
      }
    }

    shouldSetResizeHandler && !hasSetResizeHandler && setResizeHandler();
    !shouldSetResizeHandler && hasSetResizeHandler && rmResizeHandler();
    return parsed;
  }, [railWrapperWidth, railWrapperRef, hasSetResizeHandler, setResizeHandler, rmResizeHandler]);
  var itemList = React.useMemo(function () {
    return React__default.Children.toArray(children).filter(function (child) {
      return child.type.displayName === CAROUSEL_ITEM;
    });
  }, [children]);
  var itemAmountPerSet = cols * rows;
  var itemSetList = React.useMemo(function () {
    return itemList.reduce(function (result, item, i) {
      var itemComponent = /*#__PURE__*/React__default.createElement(Item, {
        key: i,
        scrollSnap: scrollSnap
      }, item);

      if (i % itemAmountPerSet === 0) {
        result.push([itemComponent]);
      } else {
        result[result.length - 1].push(itemComponent);
      }

      return result;
    }, []);
  }, [itemList, itemAmountPerSet, scrollSnap]);
  var page = Math.ceil(itemList.length / itemAmountPerSet);
  var handlePrev = React.useCallback(function () {
    setCurrentPage(function (p) {
      var prevPage = p - 1;

      if (loop && prevPage < 0) {
        if (pageChangeHandler && pageChangeHandler.current && typeof pageChangeHandler.current === 'function') {
          pageChangeHandler.current(page - 1);
        }

        return page - 1;
      }

      if (pageChangeHandler && pageChangeHandler.current && typeof pageChangeHandler.current === 'function') {
        pageChangeHandler.current(prevPage);
      }

      return prevPage;
    });
  }, [loop, page]);
  var handleNext = React.useCallback(function () {
    var isMobile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var railWrapper = railWrapperRef.current;

    if (isMobile && railWrapper) {
      if (!scrollSnap) {
        return;
      }

      var scrollLeft = railWrapper.scrollLeft,
          offsetWidth = railWrapper.offsetWidth,
          scrollWidth = railWrapper.scrollWidth;
      railWrapper.scrollBy({
        top: 0,
        left: loop && scrollLeft + offsetWidth >= scrollWidth ? -scrollLeft : scrollLeft === 0 ? gap + (offsetWidth - gap) * 0.9 - (offsetWidth * 0.1 - gap * 1.1) / 2 : (offsetWidth - gap) * 0.9 + gap,
        behavior: 'smooth'
      });
    } else {
      setCurrentPage(function (p) {
        var nextPage = p + 1;

        if (nextPage >= page) {
          if (pageChangeHandler && pageChangeHandler.current && typeof pageChangeHandler.current === 'function') {
            pageChangeHandler.current(loop ? 0 : p);
          }

          return loop ? 0 : p;
        }

        if (pageChangeHandler && pageChangeHandler.current && typeof pageChangeHandler.current === 'function') {
          pageChangeHandler.current(nextPage);
        }

        return nextPage;
      });
    }
  }, [loop, page, gap, railWrapperRef, scrollSnap]);
  var startAutoplayInterval = React.useCallback(function () {
    if (autoplayIntervalRef.current === null && typeof autoplay === 'number') {
      autoplayIntervalRef.current = setInterval(function () {
        handleNext(window.innerWidth <= mobileBreakpoint);
      }, autoplay);
    }
  }, [autoplay, autoplayIntervalRef, handleNext, mobileBreakpoint]);
  React.useEffect(function () {
    startAutoplayInterval();
    return function () {
      if (autoplayIntervalRef.current !== null) {
        clearInterval(autoplayIntervalRef.current);
        autoplayIntervalRef.current = null;
      }
    };
  }, [startAutoplayInterval, autoplayIntervalRef]);
  React.useEffect(function () {
    if (isHover || isTouch) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    } else {
      startAutoplayInterval();
    }
  }, [isHover, isTouch, autoplayIntervalRef, startAutoplayInterval]);
  var turnToPage = React.useCallback(function (page) {
    if (pageChangeHandler && pageChangeHandler.current && typeof pageChangeHandler.current === 'function') {
      pageChangeHandler.current(page);
    }

    setCurrentPage(page);
  }, []);
  var handleHover = React.useCallback(function () {
    setIsHover(function (hover) {
      return !hover;
    });
  }, []);
  var handleTouch = React.useCallback(function () {
    setIsTouch(function (touch) {
      return !touch;
    });
  }, []);
  return /*#__PURE__*/React__default.createElement(Container, {
    onMouseEnter: handleHover,
    onMouseLeave: handleHover,
    onTouchStart: handleTouch,
    onTouchEnd: handleTouch,
    className: containerClassName,
    style: containerStyle
  }, /*#__PURE__*/React__default.createElement(ArrowButton, {
    type: "prev",
    mobileBreakpoint: mobileBreakpoint,
    hidden: hideArrow || !loop && currentPage <= 0,
    CustomBtn: arrowLeft,
    onClick: handlePrev
  }), /*#__PURE__*/React__default.createElement(RailWrapper, {
    mobileBreakpoint: mobileBreakpoint,
    scrollSnap: scrollSnap,
    showDots: showDots,
    ref: railWrapperRef
  }, /*#__PURE__*/React__default.createElement(Rail, {
    cols: cols,
    rows: rows,
    page: page,
    gap: gap,
    currentPage: currentPage,
    mobileBreakpoint: mobileBreakpoint
  }, itemSetList.map(function (set, i) {
    return /*#__PURE__*/React__default.createElement(ItemSet, {
      key: i,
      cols: cols,
      rows: rows,
      gap: gap,
      mobileBreakpoint: mobileBreakpoint,
      style: itemSetStyle
    }, set);
  }))), showDots && /*#__PURE__*/React__default.createElement(Dots, {
    mobileBreakpoint: mobileBreakpoint
  }, _toConsumableArray(Array(page)).map(function (_, i) {
    return /*#__PURE__*/React__default.createElement(Dot, {
      key: i,
      index: i,
      isActive: i === currentPage,
      dotColorInactive: dotColorInactive,
      dotColorActive: dotColorActive,
      dot: dot,
      onClick: turnToPage
    });
  })), /*#__PURE__*/React__default.createElement(ArrowButton, {
    type: "next",
    mobileBreakpoint: mobileBreakpoint,
    hidden: hideArrow || !loop && currentPage === page - 1,
    CustomBtn: arrowRight,
    onClick: handleNext.bind(null, false)
  }));
};

var positiveNumberValidator = function positiveNumberValidator(props, propName, componentName) {
  var prop = props[propName];

  if (prop !== undefined && typeof prop !== 'number' || prop <= 0) {
    return new Error("Invalid prop `".concat(propName, "`: ").concat(props[propName], " supplied to `").concat(componentName, "`. expected positive `number`"));
  }
};

Carousel.propTypes = {
  cols: positiveNumberValidator,
  rows: positiveNumberValidator,
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loop: PropTypes.bool,
  scrollSnap: PropTypes.bool,
  hideArrow: PropTypes.bool,
  showDots: PropTypes.bool,
  autoplay: PropTypes.number,
  dotColorActive: PropTypes.string,
  dotColorInactive: PropTypes.string,
  responsiveLayout: PropTypes.arrayOf(PropTypes.shape({
    breakpoint: PropTypes.number.isRequired,
    cols: positiveNumberValidator,
    rows: positiveNumberValidator,
    gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    loop: PropTypes.bool,
    autoplay: PropTypes.number
  })),
  mobileBreakpoint: PropTypes.number,
  arrowLeft: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.elementType]),
  arrowRight: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.elementType]),
  dot: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.elementType]),
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  itemSetStyle: PropTypes.object
};

Carousel.Item = function (_ref22) {
  var children = _ref22.children;
  return children;
};

Carousel.Item.displayName = CAROUSEL_ITEM;

module.exports = Carousel;
