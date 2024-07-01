import React from "react";

const Card = ({ children }) => {
  return (
    <div className="mt-4 border-2 hover:bg-yellow cursor-pointer">
      {children}
    </div>
  );
};

const Title = ({ children }) => {
  return <h2 className="font-medium p-2 text-lg">{children}</h2>;
};

const Description = ({ children }) => {
  return <p className="font-light p-2">{children}</p>;
};

Card.Title = Title;
Card.Description = Description;

export default Card;
