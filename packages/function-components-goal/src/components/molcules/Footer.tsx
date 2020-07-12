import React from "react";

export type FooterProps = {
  text: string;
  number: string;
};

export const Footer: React.FC<FooterProps> = (props) => (
  <footer>
    {props.text} {props.number}
  </footer>
);
