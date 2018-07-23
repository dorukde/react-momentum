'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var Progress = (function (_ref) {
  var _ref$height = _ref.height,
      height = _ref$height === undefined ? 2 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 0 : _ref$width,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? "#5b9aff" : _ref$color,
      _ref$duration = _ref.duration,
      duration = _ref$duration === undefined ? 300 : _ref$duration,
      _ref$easing = _ref.easing,
      easing = _ref$easing === undefined ? "ease-out" : _ref$easing,
      _ref$position = _ref.position,
      position = _ref$position === undefined ? "top" : _ref$position,
      _ref$completedColor = _ref.completedColor,
      completedColor = _ref$completedColor === undefined ? "#40ce80" : _ref$completedColor;
  return React.createElement("div", {
    style: {
      height: height,
      width: width + "%",
      backgroundColor: width === 100 ? completedColor : color,
      transitionProperty: "all",
      transitionDuration: duration + "ms",
      transitionTimingFunction: easing,
      position: "fixed",
      top: position === "top" ? 0 : "auto",
      left: 0,
      bottom: position === "bottom" ? 0 : "auto"
    }
  });
});

var getRect = (function (element) {
  var rect = element.getBoundingClientRect();
  var top = rect.top + window.scrollY;
  var height = rect.height;
  var bottom = top + height;
  return {
    height: height,
    top: top,
    bottom: bottom
  };
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var _class = function (_React$Component) {
  inherits(_class, _React$Component);

  function _class(props) {
    classCallCheck(this, _class);

    var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.contentHeight = 0;
    _this.contentTop = 0;
    _this.contentBottom = 0;
    _this.state = {
      percentage: 0
    };

    _this.handleScroll = function () {
      // Using bottom of viewport for better ux
      var scrollPos = window.scrollY + window.innerHeight;
      var diff = scrollPos - _this.contentTop;

      var percentage = Math.floor(diff / _this.contentHeight * 100);

      if (percentage > 100) {
        _this.setState({ percentage: 100 });
        return;
      } else if (percentage < 0) {
        _this.setState({ percentage: 0 });
        return;
      }

      if (scrollPos >= _this.contentTop && scrollPos <= _this.contentBottom) {
        _this.setState({ percentage: percentage });
      } else {
        _this.setState({ percentage: percentage });
      }
    };

    return _this;
  }

  createClass(_class, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);

      var rect = getRect(this.refs.content);
      this.contentHeight = rect.height;
      this.contentTop = rect.top;
      this.contentBottom = rect.bottom;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { ref: "content", style: { boxSizing: "border-box" } },
          this.props.children
        ),
        React.createElement(Progress, {
          width: this.state.percentage,
          height: this.props.height,
          color: this.props.color,
          duration: this.props.duration,
          position: this.props.position,
          easing: this.props.easing,
          completedColor: this.props.completedColor
        })
      );
    }
  }]);
  return _class;
}(React.Component);

module.exports = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9Qcm9ncmVzcy5qcyIsIi4uL3NyYy9oZWxwZXJzL2dldFJlY3QuanMiLCIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBoZWlnaHQgPSAyLFxuICB3aWR0aCA9IDAsXG4gIGNvbG9yID0gXCIjNWI5YWZmXCIsXG4gIGR1cmF0aW9uID0gMzAwLFxuICBlYXNpbmcgPSBcImVhc2Utb3V0XCIsXG4gIHBvc2l0aW9uID0gXCJ0b3BcIixcbiAgY29tcGxldGVkQ29sb3IgPSBcIiM0MGNlODBcIlxufSkgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3tcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoOiB3aWR0aCArIFwiJVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB3aWR0aCA9PT0gMTAwID8gY29tcGxldGVkQ29sb3IgOiBjb2xvcixcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogXCJhbGxcIixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogZHVyYXRpb24gKyBcIm1zXCIsXG4gICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IGVhc2luZyxcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICB0b3A6IHBvc2l0aW9uID09PSBcInRvcFwiID8gMCA6IFwiYXV0b1wiLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogcG9zaXRpb24gPT09IFwiYm90dG9tXCIgPyAwIDogXCJhdXRvXCJcbiAgICB9fVxuICAvPlxuKTtcbiIsImV4cG9ydCBkZWZhdWx0IGVsZW1lbnQgPT4ge1xuICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgdG9wID0gcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgY29uc3QgaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gIGNvbnN0IGJvdHRvbSA9IHRvcCArIGhlaWdodDtcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQsXG4gICAgdG9wLFxuICAgIGJvdHRvbVxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9ncmVzcyBmcm9tIFwiLi9Qcm9ncmVzc1wiO1xuaW1wb3J0IGdldFJlY3QgZnJvbSBcIi4vaGVscGVycy9nZXRSZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29udGVudEhlaWdodCA9IDA7XG4gIGNvbnRlbnRUb3AgPSAwO1xuICBjb250ZW50Qm90dG9tID0gMDtcblxuICBzdGF0ZSA9IHtcbiAgICBwZXJjZW50YWdlOiAwXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG5cbiAgICBjb25zdCByZWN0ID0gZ2V0UmVjdCh0aGlzLnJlZnMuY29udGVudCk7XG4gICAgdGhpcy5jb250ZW50SGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgdGhpcy5jb250ZW50VG9wID0gcmVjdC50b3A7XG4gICAgdGhpcy5jb250ZW50Qm90dG9tID0gcmVjdC5ib3R0b207XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH1cblxuICBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgLy8gVXNpbmcgYm90dG9tIG9mIHZpZXdwb3J0IGZvciBiZXR0ZXIgdXhcbiAgICBjb25zdCBzY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBkaWZmID0gc2Nyb2xsUG9zIC0gdGhpcy5jb250ZW50VG9wO1xuXG4gICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGguZmxvb3IoKGRpZmYgLyB0aGlzLmNvbnRlbnRIZWlnaHQpICogMTAwKTtcblxuICAgIGlmIChwZXJjZW50YWdlID4gMTAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGVyY2VudGFnZTogMTAwIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAocGVyY2VudGFnZSA8IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZXJjZW50YWdlOiAwIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzY3JvbGxQb3MgPj0gdGhpcy5jb250ZW50VG9wICYmIHNjcm9sbFBvcyA8PSB0aGlzLmNvbnRlbnRCb3R0b20pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZXJjZW50YWdlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGVyY2VudGFnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHJlZj1cImNvbnRlbnRcIiBzdHlsZT17eyBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiIH19PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFByb2dyZXNzXG4gICAgICAgICAgd2lkdGg9e3RoaXMuc3RhdGUucGVyY2VudGFnZX1cbiAgICAgICAgICBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fVxuICAgICAgICAgIGNvbG9yPXt0aGlzLnByb3BzLmNvbG9yfVxuICAgICAgICAgIGR1cmF0aW9uPXt0aGlzLnByb3BzLmR1cmF0aW9ufVxuICAgICAgICAgIHBvc2l0aW9uPXt0aGlzLnByb3BzLnBvc2l0aW9ufVxuICAgICAgICAgIGVhc2luZz17dGhpcy5wcm9wcy5lYXNpbmd9XG4gICAgICAgICAgY29tcGxldGVkQ29sb3I9e3RoaXMucHJvcHMuY29tcGxldGVkQ29sb3J9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsImR1cmF0aW9uIiwiZWFzaW5nIiwicG9zaXRpb24iLCJjb21wbGV0ZWRDb2xvciIsInJlY3QiLCJlbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwid2luZG93Iiwic2Nyb2xsWSIsImJvdHRvbSIsInByb3BzIiwiY29udGVudEhlaWdodCIsImNvbnRlbnRUb3AiLCJjb250ZW50Qm90dG9tIiwic3RhdGUiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxQb3MiLCJpbm5lckhlaWdodCIsImRpZmYiLCJwZXJjZW50YWdlIiwiTWF0aCIsImZsb29yIiwic2V0U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0UmVjdCIsInJlZnMiLCJjb250ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJveFNpemluZyIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLGdCQUFlO3lCQUNiQSxNQURhO01BQ2JBLE1BRGEsK0JBQ0osQ0FESTt3QkFFYkMsS0FGYTtNQUViQSxLQUZhLDhCQUVMLENBRks7d0JBR2JDLEtBSGE7TUFHYkEsS0FIYSw4QkFHTCxTQUhLOzJCQUliQyxRQUphO01BSWJBLFFBSmEsaUNBSUYsR0FKRTt5QkFLYkMsTUFMYTtNQUtiQSxNQUxhLCtCQUtKLFVBTEk7MkJBTWJDLFFBTmE7TUFNYkEsUUFOYSxpQ0FNRixLQU5FO2lDQU9iQyxjQVBhO01BT2JBLGNBUGEsdUNBT0ksU0FQSjtTQVNiO1dBQ1M7b0JBQUE7YUFFRUwsUUFBUSxHQUZWO3VCQUdZQSxVQUFVLEdBQVYsR0FBZ0JLLGNBQWhCLEdBQWlDSixLQUg3QzswQkFJZSxLQUpmOzBCQUtlQyxXQUFXLElBTDFCO2dDQU1xQkMsTUFOckI7Z0JBT0ssT0FQTDtXQVFBQyxhQUFhLEtBQWIsR0FBcUIsQ0FBckIsR0FBeUIsTUFSekI7WUFTQyxDQVREO2NBVUdBLGFBQWEsUUFBYixHQUF3QixDQUF4QixHQUE0Qjs7SUFwQjNCO0NBQWY7O0FDRkEsZUFBZSxtQkFBVztNQUNsQkUsT0FBT0MsUUFBUUMscUJBQVIsRUFBYjtNQUNNQyxNQUFNSCxLQUFLRyxHQUFMLEdBQVdDLE9BQU9DLE9BQTlCO01BQ01aLFNBQVNPLEtBQUtQLE1BQXBCO01BQ01hLFNBQVNILE1BQU1WLE1BQXJCO1NBQ087a0JBQUE7WUFBQTs7R0FBUDtDQUxGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNhY2MsS0FBWixFQUFtQjs7OytHQUNYQSxLQURXOztVQVJuQkMsYUFRbUIsR0FSSCxDQVFHO1VBUG5CQyxVQU9tQixHQVBOLENBT007VUFObkJDLGFBTW1CLEdBTkgsQ0FNRztVQUpuQkMsS0FJbUIsR0FKWDtrQkFDTTtLQUdLOztVQWlCbkJDLFlBakJtQixHQWlCSixZQUFNOztVQUViQyxZQUFZVCxPQUFPQyxPQUFQLEdBQWlCRCxPQUFPVSxXQUExQztVQUNNQyxPQUFPRixZQUFZLE1BQUtKLFVBQTlCOztVQUVNTyxhQUFhQyxLQUFLQyxLQUFMLENBQVlILE9BQU8sTUFBS1AsYUFBYixHQUE4QixHQUF6QyxDQUFuQjs7VUFFSVEsYUFBYSxHQUFqQixFQUFzQjtjQUNmRyxRQUFMLENBQWMsRUFBRUgsWUFBWSxHQUFkLEVBQWQ7O09BREYsTUFHTyxJQUFJQSxhQUFhLENBQWpCLEVBQW9CO2NBQ3BCRyxRQUFMLENBQWMsRUFBRUgsWUFBWSxDQUFkLEVBQWQ7Ozs7VUFJRUgsYUFBYSxNQUFLSixVQUFsQixJQUFnQ0ksYUFBYSxNQUFLSCxhQUF0RCxFQUFxRTtjQUM5RFMsUUFBTCxDQUFjLEVBQUVILHNCQUFGLEVBQWQ7T0FERixNQUVPO2NBQ0FHLFFBQUwsQ0FBYyxFQUFFSCxzQkFBRixFQUFkOztLQW5DZTs7Ozs7Ozt3Q0FJQzthQUNYSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLUixZQUF2Qzs7VUFFTVosT0FBT3FCLFFBQVEsS0FBS0MsSUFBTCxDQUFVQyxPQUFsQixDQUFiO1dBQ0tmLGFBQUwsR0FBcUJSLEtBQUtQLE1BQTFCO1dBQ0tnQixVQUFMLEdBQWtCVCxLQUFLRyxHQUF2QjtXQUNLTyxhQUFMLEdBQXFCVixLQUFLTSxNQUExQjs7OzsyQ0FHcUI7YUFDZGtCLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtaLFlBQTFDOzs7OzZCQXlCTzthQUVMOzs7OztZQUNPLEtBQUksU0FBVCxFQUFtQixPQUFPLEVBQUVhLFdBQVcsWUFBYixFQUExQjtlQUNRbEIsS0FBTCxDQUFXbUI7U0FGaEI7NEJBSUcsUUFBRDtpQkFDUyxLQUFLZixLQUFMLENBQVdLLFVBRHBCO2tCQUVVLEtBQUtULEtBQUwsQ0FBV2QsTUFGckI7aUJBR1MsS0FBS2MsS0FBTCxDQUFXWixLQUhwQjtvQkFJWSxLQUFLWSxLQUFMLENBQVdYLFFBSnZCO29CQUtZLEtBQUtXLEtBQUwsQ0FBV1QsUUFMdkI7a0JBTVUsS0FBS1MsS0FBTCxDQUFXVixNQU5yQjswQkFPa0IsS0FBS1UsS0FBTCxDQUFXUjs7T0FaakM7Ozs7RUFqRHlCNEIsTUFBTUM7Ozs7In0=
