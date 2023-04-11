import React from "react";
import PropTypes from "prop-types";

import "./quote.css";

// QuoteBlock component that displays a quote with a customizable brand
export const QuoteBlock = ({ brand }) => {
  const { title, subTitle, description, ctaLinks, textBoxTextColor } = brand;

  return (
    <div
      className="container"
      style={{
        color: textBoxTextColor,
      }}
    >
      <div className="column">
        <div className="title" style={{ color: textBoxTextColor }}>
          {title}
        </div>
        <div className="subtitle">{subTitle}</div>
        <div
          className="horizontal"
          style={{ borderBottom: `1px solid ${textBoxTextColor}` }}
        ></div>
      </div>
      <div className="column">
        <p>{description}</p>
        <div className="cta-links">
          {ctaLinks.map((item) => (
            <a
              href={item.link}
              id={item.id}
              className="ctalink"
              style={{
                backgroundColor: item.backgroundColor,
                color: item.color,
              }}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

QuoteBlock.propTypes = {
  title: PropTypes.string,
  quote: PropTypes.string.isRequired,
  showTitleUnderline: PropTypes.bool,
  style: PropTypes.object,
  quoteStyle: PropTypes.object,
  brand: PropTypes.object,
};

QuoteBlock.defaultProps = {
  showTitleUnderline: true,
  style: {},
  quoteStyle: {},
  title: "Chetna",
  brand: {
    quote: "Not all those who wander are lost.",
    title: "J.R.R. Tolkien",
    subtitle: "Hello",
  },
};

export default QuoteBlock;
