// Results.jsx
// Le composant Results affiche les résultats de la recherche.
import React from 'react';

const Results = ({ results, onBusinessSelect, setBusinessNameAndAddress }) => {
  /*
  Props :
  - results : tableau des résultats de la recherche
  - onBusinessSelect : fonction callback à appeler lorsque l'utilisateur sélectionne un résultat
  - setBusinessNameAndAddress : fonction pour mettre à jour le nom et l'adresse de l'entreprise sélectionnée
  */
  return (
    <div className="mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-earth rounded-lg overflow-hidden overflow-y-auto">
      {/* Affiche chaque résultat de la recherche sous forme de bouton cliquable */}
      {results.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            className="py-2 px-4 w-full text-sm text-earth cursor-pointer hover:bg-lavender rounded-lg focus:outline-none"
            onClick={() => {
              onBusinessSelect(item);
              setBusinessNameAndAddress(`${item.name} ${item.address}`);
            }}
          >
            {item.name} - ({item.address})
          </button>
          {/* Affiche une ligne de séparation entre chaque résultat */}
          {index < results.length - 1 && (
            <div className="h-px w-full bg-earth"></div>
          )}
        </div>
      ))}
    </div>
  );
};

// Exporte le composant Results pour être utilisé dans d'autres fichiers.
export default Results;

