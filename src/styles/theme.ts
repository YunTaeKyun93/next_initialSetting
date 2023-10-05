const colors = {
  primary: {
    black: "#000000",
    white: "#FFFFFF",
    hitec1: "#B1EAEC",
    hitec2: "#28C3CD",
    hitec3: "#00A9B5",
  },

  point: {
    red: "#006EDC",
  },
  text: {
    black: "#000000",
    lightBlack: "#2D2D2D",
    darkGrey: "#999999",
    grey: "#CCCCCC",
    lightGrey: "#EAEAEA",
    hitec: "#FF400",
  },
  line: {
    grey: "#EAEAEA",
    lightGrey: "#F6F6F6",
    white: "#FFFFFF",
  },
};

const typography = {
  weight: {
    regular: "400",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
  },
  family: {
    pretendard: "Pretendard Variable",
    kimmLight: "KIMM_Light",
    spoqaHanSansNeo: "SpoqaHanSansNeo",
  },
};
const mediaScreen = {
  tablet: "1420px",
  mobile: "768px",
};
const theme = {
  colors,
  typography,
  mediaScreen,
};

export default theme;
