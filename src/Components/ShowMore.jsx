import { useState } from "react";

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

const ShowMore = ({ text = longText, wordsToShow = 10 }) => {
  const [isExpand, setEIsExpand] = useState(false);

  const getShortText = (str, n) => {
    const words = str.trim().split(/\s+/);
    if (words.length <= n) return str;
    return words.slice(0, n).join(" ") + "...";
  };

  const shortText = getShortText(text, wordsToShow);
  const isShorterThanLimit = shortText === text;

  const toggle = () => setEIsExpand((s) => !s);

  return (
    <div>
      <h1>CHALLENGE 1</h1>
      <p>{isExpand ? text : shortText}</p>

      <button onClick={toggle} disabled={isShorterThanLimit} style={{
          marginTop: 8,
          padding: "8px 12px",
          borderRadius: 6,
          border: "1px solid #333",
          background: isExpand ? "#111" : "#fff",
          color: isExpand ? "#fff" : "#111",
          cursor: isShorterThanLimit ? "not-allowed" : "pointer",
          opacity: isShorterThanLimit ? 0.6 : 1,
        }}
        aria-expanded={isExpand}>
        {isShorterThanLimit
          ? "Nothing more to show"
          : isExpand
          ? "Show Less"
          : "Show More"}
      </button>
    </div>
  );
};

export default ShowMore;
