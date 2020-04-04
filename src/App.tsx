/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import tw from "twin.macro";

export const App: React.FC = () => {
  return (
    <div className="App">
      <h1 css={tw`text-primary`}>Hello</h1>
      <button css={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
        Button
      </button>
    </div>
  );
};
