// App.jsx
import React from "react";
import "../App.css";
import FormHandler from "../FormHandler";
import HelpSection from "../components/HelpSection";

// Le composant principal de l'application.
// Affiche le titre, la description et le formulaire de recherche.
const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cream mt-8 mb-8">
      <div className="text-center px-6 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
        <h1
          className="text-5xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
          style={{ fontFamily: "Degular", fontWeight: "bold" }}
        >
          Générateur de liens d'évaluations Google
        </h1>
        <p
          className="mt-2 text-lg mb-6"
          style={{ fontFamily: "Degular", fontStyle: "Regular" }}
        >
          Obtenez plus d'avis Google en Suisse Romande avec notre générateur de
          lien d'évaluation gratuit. Partagez{" "}
          <span className="font-semibold">l'URL</span> ou le
          <span className="font-semibold">QR code</span> avec vos clients.
        </p>
        <FormHandler />
        <HelpSection />
      </div>
    </div>
  );
};

// Exporte le composant App pour être utilisé dans d'autres fichiers.
export default App;
