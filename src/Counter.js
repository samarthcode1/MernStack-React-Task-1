import React, { useState } from 'react';

function Counter() {
  const [paragraph, setParagraph] = useState('');
  const countWords = () => {
    const words = paragraph.trim().split(/\s+/);
    return words.length;
  };

  return (
    <center>
      <div>
        <h1>Words Counter</h1>
        <textarea
          rows="5"
          cols="50"
          placeholder="Enter the Words here..."
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
        />
        <p>Word Count: {countWords()}</p>
      </div>
    </center>
  );
}

export default Counter;