import React from "react";
import ReactDOM from "react-dom/client";
import { extractMeanings, displayEmojiName } from "./utils/displayEmojiName";
import App from "./App";

//Create a new array that just has the meaning text and truncate the meaning text so that it has a maximum of 100 chars.
//Create a function that just display the emoji names
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
