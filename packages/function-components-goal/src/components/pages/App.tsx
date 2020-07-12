import React from "react";
import { Contents } from "../organisms/Contents";

export const App = () => {
  const contentsProps = {
    title: "Header",
    text: "Footer",
    number: "1234",
    value: "alert",
    handler: (str: string) => alert(str),
  };
  return <Contents {...contentsProps} />;
};
