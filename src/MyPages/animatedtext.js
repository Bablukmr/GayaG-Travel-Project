import React, { useState, useEffect } from "react";

export default function TextAnimation() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    " Gaya is a city of historical significance and is one of the major tourist attractions in India..."
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setIndex(1);
      }, 1000); // Adjust the delay between repetitions (in milliseconds)
    }
  }, [index, text]);

  return (
    <>
      <div style={{ height: "15vh" }}>
        <h2
          style={{
            color: "white",
            textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"
          }}
        >
          {text}
        </h2>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
