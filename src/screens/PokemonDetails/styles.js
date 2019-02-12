import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const ImagePlaceholder = styled.div`
  background: #fff;
  border-radius: 50%;
  height: 136px;
  width: 136px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  margin: auto;
`;

export const Image = styled.img`
  background: #fff;
  border-radius: 50%;
  height: 96px;
  width: 96px;
  padding: 20px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  display: block;
  margin: auto;
`;

export const CloseButton = styled(Link).attrs({ children: "❌" })`
  position: fixed;
  top: 8px;
  right: 8px;
  border-radius: 50%;
  font-size: 0.8em;
`;

export const Name = styled.div`
  text-align: center;
  text-transform: capitalize;
  font-size: 1.5em;
`;

export const Id = styled.span`
  color: #666;
  font-size: 0.9em;

  &::before {
    content: "#";
  }
`;

export const StatItem = styled.div.attrs(({ stat }) => ({ children: stat }))`
  &::after {
    content: "${p => p.label}";
  }
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-around;
`;
