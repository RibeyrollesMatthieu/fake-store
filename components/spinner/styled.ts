import styled from "styled-components";
import { keyframes } from "styled-components";

const color1: string = '#a5a7bb';
const color2: string = '#a496a4';
const color3: string = '#554d73';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const load = keyframes`
  0% {
    stroke-dashoffset: 570;
  }
  50% {
    stroke-dashoffset: 530;
  }
  100% {
    stroke-dashoffset: 570;
    stroke-dashoffset: 570;
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 150px;
  height: 150px;
`;

export const Svg = styled.svg`
    width: 90%;
    fill: none;
`;

export const CircleLoad = styled.circle`
  transform-origin: 50% 50%;
  stroke-dasharray: 570;
  stroke-width: 20px;
`;

export const CircleLoad__one = styled(CircleLoad)`
  stroke: ${color3};
  animation: ${load} 1.5s infinite;
`;

export const CircleLoad__two = styled(CircleLoad)`
  stroke: ${color2};
  animation: ${load} 1.5s infinite;
  animation-delay: 0.1s;
`;

export const CircleLoad__three = styled(CircleLoad)`
  stroke: ${color1};
  animation: ${load} 1.5s infinite;
  animation-delay: 0.2s;
`;

export const Point = styled.circle`
  animation: ${bounce} 1s infinite ease-in-out;
`;

export const Point__one = styled(Point)`
  fill: ${color1};
  animation-delay: 0s;
`;

export const Point__two = styled(Point)`
  fill: ${color2};
  animation-delay: 0.1s;
`;

export const Point__three = styled(Point)`
  fill: ${color3};
  animation-delay: 0.2s;
`;