import React from "react";
import { Body } from "./styles";

export default class Panel extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "visible";
  }

  render() {
    return (
      <Body background={this.props.background}>{this.props.children}</Body>
    );
  }
}
