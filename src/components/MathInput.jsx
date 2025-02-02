// components/MathInput.jsx
import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import MDEditor from "@uiw/react-md-editor";
import Image from 'next/image'
const MathInput = ({ onSubmit }) => {
  const [markdown, setMarkdown] = useState('');

  const handleEditorChange = (value) => {
    setMarkdown(value);
  };

  const handleSave = () => {
    onSubmit(markdown);
    setMarkdown('');
  };

  return (
    <div>
      <MDEditor value={markdown} onChange={handleEditorChange} />
      <button onClick={handleSave}>Save Equation</button>
    </div>
  );
};

export default MathInput;
