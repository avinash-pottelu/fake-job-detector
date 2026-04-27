import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const handleAnalyze = () => {
    if (!text && !image) {
      setResult("⚠️ Enter text or upload image");
      return;
    }

    if (text.toLowerCase().includes("no experience") && text.toLowerCase().includes("salary")) {
      setResult("❌ High Risk Fake Job");
    } else {
      setResult("✅ Looks Safe");
    }
  };

  return (
    <div style={{
      background: "#020617",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <h1 style={{ fontSize: "28px" }}>🔥 Fake Job Detector</h1>

      <textarea
        placeholder="Paste job description..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "320px",
          height: "120px",
          marginTop: "20px",
          borderRadius: "10px",
          padding: "10px"
        }}
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        style={{ marginTop: "15px" }}
      />

      <button
        onClick={handleAnalyze}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "10px",
          background: "#6366f1",
          color: "white",
          border: "none"
        }}
      >
        Analyze
      </button>

      <p style={{ marginTop: "20px" }}>{result}</p>
    </div>
  );
}

export default App;