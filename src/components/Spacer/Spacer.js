import styled from "styled-components/macro";

const Spacer = styled.div`
  padding-top: calc(${p => p.top} * 8px);
  padding-right: calc(${p => p.right} * 8px);
  padding-bottom: calc(${p => p.bottom} * 8px);
  padding-left: calc(${p => p.left} * 8px);
  ${p => p.inline && "display: inline-block;"}
`;

Spacer.defaultProps = { top: 0, right: 0, bottom: 0, left: 0, inline: false };

export default Spacer;
