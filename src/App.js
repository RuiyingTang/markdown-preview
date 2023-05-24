import { useState } from "react";
import { marked } from "marked";
import "./App.css";

const initialText = `
This is a paragraph

**This is bolded text**

>Block Quotes!

# Heading
## Heading 2

- list item 1
- list item 2
- list item 3

[Visit my website](https://github.com/)

This is a inline \`<div></div>\`
  
This is a block of code
\`\`\`
let x=1;
let y=2;
let z=x+y;
\`\`\`
![React](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)
`;
function App() {
  let [text, setText] = useState(initialText);
  const markdown = marked(text, { breaks: true });

  const handleChange = (e) => {
    text = setText(e.target.value);
  };
  return (
    <div className="App container-fluid">
      <h2 className="text-center">Convert your Markdown</h2>
      <div className="row">
        <div className="col-6">
          <h5 className="text-white">Enter your markdown</h5>
          <textarea
            className="form-control"
            id="editor"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-6">
          <h5 className="text-white">See the result</h5>
          <div
            id="preview"
            className="rounded p-2"
            dangerouslySetInnerHTML={{
              __html: markdown,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
