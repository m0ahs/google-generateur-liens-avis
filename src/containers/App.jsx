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
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-cream">
      <div className="text-center px-4 md:px-8 lg:px-12 xl:max-w-5xl mx-auto overflow-hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Générateur de liens d'évaluations Google
        </h1>
        <p className="text-lg mb-6">
          Obtenez plus d'avis Google en Suisse Romande avec notre générateur de
          lien d'évaluation gratuit. Partagez{" "}
          <span className="font-semibold">l'URL</span> ou le
          <span className="font-semibold"> QR code</span> directement avec vos
          clients.
        </p>
        <div className="px-4 md:px-6 lg:px-8">  {/* Ajout d'un padding spécifique */}
          <FormHandler toggleHelpSection={toggleHelpSection} />
          <CSSTransition
            in={showHelpSection}
            timeout={300}
            classNames="help-section"
            unmountOnExit
          >
            <HelpSection />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}

export default App;
