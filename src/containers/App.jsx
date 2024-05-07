// App.jsx
import React from "react";
import "/src/App.css";
import FormHandler from "/src/FormHandler.jsx";

// Le composant principal de l'application.
// Affiche le titre, la description et le formulaire de recherche.
const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cream mt-8 mb-8">
      <div className="text-center max-w-full px-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <h1
          className="text-5xl sm font-bold mb-4"
          style={{ fontFamily: "Degular", fontWeight: "bold" }}
        >
          Générateur de liens d'évaluations Google
        </h1>
        <p
          className="mt-2 text-lg sm mb-6"
          style={{ fontFamily: "Degular", fontStyle: "Regular" }}
        >
          Obtenez plus d'avis Google en Suisse Romande avec notre générateur de
          lien d'évaluation gratuit. Partagez{" "}
          <span className="font-semibold">l'URL</span> ou le
          <span className="font-semibold">QR code</span> avec vos clients.
        </p>
        <FormHandler />
      </div>
    </div>
  );
};

// Exporte le composant App pour être utilisé dans d'autres fichiers.
export default App;
