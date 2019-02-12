import styled from "styled-components/macro";

export const Body = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${p => p.background};
  overflow-y: scroll;
`;
Body.defaultProps = { background: "#fff" };
