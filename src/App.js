import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleAnalyze = () => {
    if (!text) {
      setResult("⚠️ Enter job description");
      return;
    }

    if (
      text.toLowerCase().includes("salary") &&
      text.toLowerCase().includes("no experience")
    ) {
      setResult("❌ Fake Job (High Risk)");
    } else {
      setResult("✅ Looks Safe");
    }
  };

  return (
    <div style={{
      background: "#0f172a",
      color: "white",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <h1>🔥 Fake Job Detector</h1>

      <textarea
        placeholder="Paste job description..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "300px",
          height: "120px",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "20px"
        }}
      />

      <button
        onClick={handleAnalyze}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          borderRadius: "10px",
          background: "#6366f1",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Analyze
      </button>

      <p style={{ marginTop: "20px" }}>{result}</p>
    </div>
  );
}

export default App;