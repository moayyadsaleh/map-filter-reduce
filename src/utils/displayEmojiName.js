// Import statements (if needed)
import React from "react";
import emojipedia from "../components/emojipedia";

// create a function to extract the truncated meanings
function extractMeanings(array) {
  return array.map(function (entry) {
    return entry.meaning.substring(0, 100);
  });
}

// create a function to display the emoji names
function displayEmojiName(array) {
  return array.map(function (emojiEntry) {
    return emojiEntry.name;
  });
}
//Filter by Meaning Length: Use the filter method to create a new array of emojis with meanings
//shorter than a certain character count (e.g., less than 50 characters).
// Export the functions
//Count Emojis: Use the reduce method to count the number of emojis in the array.
//Alphabetical Sorting: Sort the emojis alphabetically based on their names using the sort method.
//Group Emojis by First Letter: Group the emojis by the first letter of their names using the reduce method.
//Search by Emoji Name: Implement a search functionality where the user can input a search term, and display the emojis whose names contain the search term.
//Display Emoji Categories: Create categories for the emojis (e.g., Smileys, People, Objects) based on keywords in their meanings. Then, display the emojis within each category.
//Extract Unique Keywords: Use the map and reduce methods to extract unique keywords from all the emoji meanings.
//Render Emojis as Components: Create a separate component for rendering each emoji entry. Use the map method to render each emoji entry component.
//Calculate Average Meaning Length: Calculate the average length of all the emoji meanings using the reduce method.
//Display IDs and Emojis: Display a list of IDs and corresponding emojis from the array.
//Find Longest Emoji Name: Find the emoji with the longest name using the reduce method.
export { extractMeanings, displayEmojiName };
