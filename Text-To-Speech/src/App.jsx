import React, { useEffect, useState } from "react";

const App = () => {
  const [content, setContent] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      const indianVoice = availableVoices.find((voice) => voice.lang === "en-IN");
      setSelectedVoice(indianVoice || availableVoices[0]);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handleClick = () => {
    const utterance = new SpeechSynthesisUtterance(content);
    utterance.voice = selectedVoice; 
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-slate-200">
        <h1 className="text-3xl mb-16">Text To Speech in React application</h1>

        <textarea
          className="bg-slate-50 w-[50vw] h-[50vh] resize-none text-black"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter the Content here"
        />

        <select
          className="my-5 bg-white p-1 w-60"
          value={selectedVoice?.name || ""} 
          onChange={(e) =>
            setSelectedVoice(voices.find((voice) => voice.name === e.target.value))
          }
        >
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}> 
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>

        <button
          className="rounded my-5 bg-blue-500 p-1 w-20 font-bold text-white hover:bg-blue-600"
          onClick={handleClick}
        >
          Click
        </button>
      </div>
    </>
  );
};

export default App;
