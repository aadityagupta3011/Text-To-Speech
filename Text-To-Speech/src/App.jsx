import React, { useState } from "react";

const App = () => {
  const [content, setContent] = useState("");

  const handleClick = () => {
    const value = new SpeechSynthesisUtterance(content);

    window.speechSynthesis.speak(value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-slate-200">
        <h1 className="text-3xl mb-16 ">Text To Speech in React application</h1>

        <textarea
          className="bg-slate-50 w-[50vw] h-[50vh] resize-none  text-black "
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter the Content here" 
          />

        <button
          className="rounded my-5 bg-blue-500 p-1 w-20 font-bold text-white hover:bg-blue-600"
          onClick={handleClick}>
          Click
        </button>
      </div>
    </>
  );
};

export default App;
