import "./Card.css";

const Card = ({ children, className }) => {
  const classes = ["card", className].join(" ");
  return <div className={classes}>{children}</div>;
};

export default Card;
