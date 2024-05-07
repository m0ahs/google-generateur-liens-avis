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
    <div className="flex flex-col justify-center items-center min-h-screen bg-cream py-8">
      <div className="w-full max-w-5xl px-4 md:px-8 lg:px-12 mx-auto text-center overflow-hidden">
        <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <img src="../../google-avis-client-suisse-romande-marketlocal.png" 
            alt="Google avis client Suisse Romande Marketlocal.ch" 
            id="google-review-image" />
        </div>
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4">
          Générateur de liens d'évaluations Google
        </h1>
        <p className="text-lg px-4 md:px-8 lg:px-12 mb-6">
          Obtenez plus d'avis Google en Suisse Romande avec notre générateur de
          lien d'évaluation gratuit. Partagez{" "}
          <span className="font-semibold">l'URL</span> ou le
          <span className="font-semibold"> QR code</span> directement avec vos
          clients.
        </p>
        <img src="../../arrow-trending-svgrepo-com.svg" 
          alt="Follow instructions"
          id="follow-instruction"
          className="mx-auto my-4"
          style={{ maxWidth: '100px' }}/>
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
  );
}

export default App;
