import React from "react";
import ReactDOM from "react-dom/client";
import emojipedia from "./components/emojipedia";
import Content from "./App";

//Create a new array that just has the meaning text and truncate the meaning text so that it has a maximum of 100 chars.

function extractMeanings(array) {
  return array.map(function (entry) {
    return entry.meaning.substring(0, 100);
  });
}

const extractedMeanings = extractMeanings(emojipedia); // Pass emojipedia array to the function

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<extractMeanings />);
