import { useState } from "react";

const LanguageSwitcher = () => {
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async (text, lang) => {
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, lang }),
    });

    const data = await res.json();
    setTranslatedText(data.translatedText);
  };

  return (
    <div>
      <p>{translatedText || "Bienvenido a mi web"}</p>
      <button onClick={() => handleTranslate("Bienvenido a mi web", "en")}>
        🇺🇸 English
      </button>
      <button onClick={() => handleTranslate("Bienvenido a mi web", "zh")}>
        🇨🇳 中文
      </button>
    </div>
  );
};

export default LanguageSwitcher;
