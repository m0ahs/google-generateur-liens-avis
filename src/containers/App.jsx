// App.jsx

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../App.css";
import FormHandler from "../FormHandler";
import HelpSection from "../components/HelpSection";

function App() {
  const [showHelpSection, setShowHelpSection] = useState(false);

  const toggleHelpSection = () => {
    setShowHelpSection((prev) => !prev);
  };

  return (
    <div className="App">
      {" "}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        style={{ fontFamily: "Degular", fontWeight: "bold" }}
      >
        {" "}
        Générateur de liens d'évaluations Google{" "}
      </h1>{" "}
      <p
        className="mt-2 px-6 sm:px-6 md:px-10 lg:px-12 xl:px-14 2xl:px-16 text-lg mb-6"
        style={{ fontFamily: "Degular", fontStyle: "Regular" }}
      >
        {" "}
        Obtenez plus d'avis Google en Suisse Romande avec notre générateur de
        lien d'évaluation gratuit. Partagez{" "}
        <span className="font-semibold"> l'URL</span> ou le{" "}
        <span className="font-semibold"> QR code</span> directement avec vos
        clients.{" "}
      </p>{" "}
      <FormHandler toggleHelpSection={toggleHelpSection} />{" "}
      <div
        className={`scrollable-container ${showHelpSection ? "max-h-screen" : "max-h-0"}`}
      >
        {" "}
        <CSSTransition
          in={showHelpSection}
          timeout={300}
          classNames="help-section"
          unmountOnExit
        >
          {" "}
          <HelpSection />{" "}
        </CSSTransition>{" "}
      </div>{" "}
    </div>
  );
}
export default App;
