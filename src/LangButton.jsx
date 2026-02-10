import React from "react";
import "./style/LangButton.css";

const LangButton = ({ currentLang, toggleLang }) => {
  return (
    <button className="lang-button" onClick={toggleLang}>
      {currentLang === "ar" ? "English" : "العربية"}
    </button>
  );
};

export default LangButton;
