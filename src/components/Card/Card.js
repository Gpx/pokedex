import styled, { css, keyframes } from "styled-components/macro";

const loadingImage = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

const Card = styled.div`
  border-radius: 3px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
  background-color: ${p => p.color};

  ${p =>
    p.loading &&
    css`
      background: linear-gradient(270deg, #ccc, #eee);
      background-size: 400% 400%;
      animation: ${loadingImage} 2s ease infinite;
    `}
`;

Card.defaultProps = { color: "#fff", loading: false };

export default Card;
