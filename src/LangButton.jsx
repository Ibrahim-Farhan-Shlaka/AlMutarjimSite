import React from "react";
import "./style/LangButton.css";

const LangButton = ({ lang, toggleLang }) => {
  return (
    <button className="lang-button" onClick={toggleLang}>
      {lang === "ar" ? "English" : "العربية"}
    </button>
  );
};

export default LangButton;
