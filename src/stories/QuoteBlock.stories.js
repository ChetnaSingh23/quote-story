import QuoteBlock from "./QuoteBlock";

const brands = {
  A: {
    title: "Possit etimam",
    subTitle: "Morbi eget efficitur nunc.",
    description:
      "A staycation with the kids is always a good idea especially at Dubai’s family resort! Memorable bonding time with complimentary lunch or dinner at Gordon Ramsay’s Bread Street Kitchen*, activities for kids, one hour free watersports in the Arabian Sea and so much more! We’re sure to keep the little ones entertained.",
    ctaLinks: [
      {
        // main
        text: "Buy ticket",
        link: "https://reactjs.org/",
        backgroundColor: "#2830ca",
        color: "#fff",
        id: "primary",
      },
      {
        // secondary
        id: "secondary",
        text: "Cancel ticket",
        link: "https://reactjs.org/",
        backgroundColor: "#fff",
        color: "#2830ca",
      },
    ],
    compBackground: {
      backgroundColor: "white",
    },
    textboxBackground: {
      backgroundColor: "#F6F6F6",
    },
    hideUnderline: false,
    textBoxTextColor: "#2830ca",
  },
  B: {
    title: "Possit etimam Brand B",
    subTitle: "Morbi eget efficitur nunc.",
    description:
      "A staycation with the kids is always a good idea especially at Dubai’s family resort! Memorable bonding time with complimentary lunch or dinner at Gordon Ramsay’s Bread Street Kitchen*, activities for kids, one hour free watersports in the Arabian Sea and so much more! We’re sure to keep the little ones entertained.",
    ctaLinks: [
      {
        // main
        id: "primary",
        text: "Buy ticket",
        link: "https://reactjs.org/",
        backgroundColor: "#D2B99B",
        color: "#fff",
      },
      {
        // secondary
        id: "secondary",
        text: "Cancel ticket",
        link: "https://reactjs.org/",
        backgroundColor: "#fff",
        color: "#D2B99B",
      },
    ],
    compBackground: {
      backgroundColor: "white",
    },
    textboxBackground: {
      backgroundColor: "blue",
    },
    hideUnderline: false,
    textBoxTextColor: "#D2B99B",
  }
};

export default {
  title: "Example/QuoteBlock",
  component: QuoteBlock,
  tags: ["autodocs"],
  brand: brands.A,
  showTitleUnderline: true,
  style: {
    backgroundColor: { backgroundColor: "#f2f2f2" },
  },
  quoteStyle: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
};

export const BrandA = {
  args: {
    brand: brands.A,
    showTitleUnderline: false,
    style: {
      backgroundColor: { backgroundColor: "#ccc" },
    },
    quoteStyle: {
      backgroundColor: "#ffffff",
      color: "#000000",
    },
  },
};

export const BrandB = {
  args: {
    brand: brands.B,
    showTitleUnderline: false,
    style: {
      backgroundColor: { backgroundColor: "#ccc" },
    },
    quoteStyle: {
      backgroundColor: "#ffffff",
      color: "#000000",
    },
  },
};