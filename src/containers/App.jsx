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
    <div className="min-h-screen flex flex-col justify-center items-center bg-cream mt-8 mb-8">
      <div className="text-center px-4 md:px-8 lg:px-12 xl:max-w-5xl mx-auto">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "Degular", fontWeight: "bold" }}
        >
          Générateur de liens d'évaluations Google
        </h1>
        <p
          className="mt-2 px-6 sm:px-6 md:px-10 lg:px-12 xl:px-14 2xl:px-16 text-lg mb-6"
          style={{ fontFamily: "Degular", fontStyle: "Regular" }}
        >
          Obtenez plus d'avis Google en Suisse Romande avec notre générateur de
          lien d'évaluation gratuit. Partagez{" "}
          <span className="font-semibold">l'URL</span> ou le
          <span className="font-semibold"> QR code</span> directement avec vos
          clients.
        </p>
      </div>
      <div className="w-full max-w-3xl">
        <FormHandler toggleHelpSection={toggleHelpSection} />
        <div
          style={{
            overflow: "hidden",
            maxHeight: showHelpSection ? "500px" : "0",
            transition: "max-height 0.3s ease",
          }}
        >
          <CSSTransition
            in={showHelpSection}
            timeout={300}
            classNames="help-section"
            unmountOnExit
            onEnter={() => setShowHelpSection(true)}
            onExited={() => setShowHelpSection(false)}
          >
            <HelpSection />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}

export default App;
