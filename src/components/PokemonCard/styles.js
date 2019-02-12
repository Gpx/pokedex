import styled from "styled-components/macro";

export const Name = styled.div`
  text-transform: capitalize;
  text-align: center;
  font-size: 1.3rem;
`;

export const Id = styled.span`
  color: #666;
`;

export const ImagePlaceholder = styled.div`
  height: 96px;
  width: 96px;
  margin: auto;
`;

export const Image = styled.img`
  display: block;
  height: 96px;
  width: 96px;
  margin: auto;
`;

export const Type = styled.div`
  display: inline-block;
  background: #9e9e9e;
  padding: 2px 4px;
  border-radius: 6px;
  font-variant: small-caps;
  color: #fff;
`;

export const Hp = styled(Type)`
  &::after {
    content: "HP ";
    font-size: 0.6em;
  }
`;
