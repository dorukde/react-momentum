import React from "react";
import Progress from "./Progress";
import getRect from "./helpers/getRect";

export default class extends React.Component {
  contentHeight = 0;
  contentTop = 0;
  contentBottom = 0;

  state = {
    percentage: 0
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    const rect = getRect(this.refs.content);
    this.contentHeight = rect.height;
    this.contentTop = rect.top;
    this.contentBottom = rect.bottom;
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // Using bottom of viewport for better ux
    const scrollPos = window.scrollY + window.innerHeight;
    const diff = scrollPos - this.contentTop;

    const percentage = Math.floor((diff / this.contentHeight) * 100);

    if (percentage > 100) {
      this.setState({ percentage: 100 });
      return;
    } else if (percentage < 0) {
      this.setState({ percentage: 0 });
      return;
    }

    if (scrollPos >= this.contentTop && scrollPos <= this.contentBottom) {
      this.setState({ percentage });
    } else {
      this.setState({ percentage });
    }
  };

  render() {
    return (
      <div>
        <div ref="content" style={{ boxSizing: "border-box" }}>
          {this.props.children}
        </div>
        <Progress
          width={this.state.percentage}
          height={this.props.height}
          color={this.props.color}
          duration={this.props.duration}
          position={this.props.position}
          easing={this.props.easing}
          completedColor={this.props.completedColor}
          padding={this.props.padding}
          opacity+{this.props.opacity}
        />
      </div>
    );
  }
}
