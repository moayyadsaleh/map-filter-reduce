import React from "react";
import emojipedia from "./components/emojipedia"; // Adjust the path
import { displayEmojiName, extractMeanings } from "./utils/displayEmojiName";
import "../src/styles.css";

function App() {
  const meanings = extractMeanings(emojipedia); // Use the extractMeanings function
  const emojiNames = displayEmojiName(emojipedia); // Use the displayEmojiName function

  return (
    <div>
      <h1>App Component</h1>
      {/* Display the extracted meanings */}
      <ul>
        {meanings.map((meaning, index) => (
          <li key={index}>{meaning}</li>
        ))}
      </ul>
      {/* Display the emoji names */}
      <ul>
        {emojiNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
