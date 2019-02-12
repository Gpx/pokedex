import React from "react";

export default class InfiniteScroll extends React.Component {
  static defaultProps = { offset: 0 };

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const hasReachedTheEnd =
      window.innerHeight + window.scrollY + this.props.offset >=
      document.body.offsetHeight;
    if (hasReachedTheEnd) this.props.onBottomReached();
  };

  render() {
    return null;
  }
}
