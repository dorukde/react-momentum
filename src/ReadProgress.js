import React from "react";

export default class extends React.Component {
  state = {
    wrapperHeight: 0,
    wrapperTop: 0,
    wrapperScrolling: false,
    scrollPosition: 0,
    wrapperBottom: 0,
    bodyTop: 0
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    const wrapper = this.refs.wrapper;
    const body = document.querySelector("body");

    const wrapperRect = wrapper.getBoundingClientRect();
    const wrapperHeight = wrapperRect.height;
    const wrapperTop = wrapperRect.top;

    const bodyRect = body.getBoundingClientRect();
    const bodyTop = bodyRect.top;

    const realWrapperTop = wrapperTop - bodyTop;

    this.setState(() => ({
      wrapperHeight,
      wrapperTop: realWrapperTop,
      wrapperBottom: realWrapperTop + wrapperHeight,
      bodyTop
    }));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY;
    this.setState({ scrollPosition });

    if (
      this.state.scrollPosition >= this.state.wrapperTop &&
      this.state.scrollPosition <= this.state.wrapperBottom
    ) {
      this.setState({ wrapperScrolling: true });
    } else {
      this.setState({ wrapperScrolling: false });
    }
  };

  render() {
    return (
      <div ref="wrapper" style={{ border: "solid 1px grey" }}>
        <div style={{ position: "fixed", left: 0, top: 0 }}>
          <pre>{JSON.stringify(this.state, undefined, 2)}</pre>
        </div>
        {this.props.children}
      </div>
    );
  }
}
