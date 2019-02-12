const colorMap = {
  green: "#C8E6C9",
  red: "#FFCDD2",
  blue: "#BBDEFB",
  white: "#FFF",
  brown: "#D7CCC8",
  yellow: "#FFF9C4",
  purple: "#E1BEE7",
  pink: "#F8BBD0",
  gray: "#F5F5F5",
  black: "#CFD8DC"
};

export default function getColor(colorName) {
  return colorMap[colorName];
}
