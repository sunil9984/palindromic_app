import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const string_check = (current_string) => {
    let n = current_string.length;

    let i = 0,
      j = n - 1;

    while (i < j) {
      if (current_string[i] !== current_string[j]) {
        return false;
      }
      i++;
      j--;
    }

    return true;
  };

  const checkPalindrome = () => {
    if (string_check(text)) {
      setResult("Yeah, you entered a Palindrome ✅");
    } else {
      setResult("Not a Palindrome , try another string");
    }
  };

  return (
    <>
      <h1>Palindrome Checker app</h1>

      <h2>Enter a String</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={checkPalindrome}>Check</button>

      <h3>{result}</h3>
    </>
  );
}

export default App;