// Results.jsx
// Le composant Results affiche les résultats de la recherche.
import React from 'react';

const Results = ({ results, onBusinessSelect, setBusinessNameAndAddress }) => {

  return (
    <div className="mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-earth rounded-lg overflow-hidden overflow-y-auto">
      {results.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            className="py-2 px-4 w-full text-sm text-earth cursor-pointer hover:bg-lavender/50 rounded-lg focus:outline-none"
            onClick={() => {
              onBusinessSelect(item);
              setBusinessNameAndAddress(`${item.name} ${item.address}`);
            }}
          >
            {item.name} - ({item.address})
          </button>
          {index < results.length - 1 && (
            <div className="h-px w-full bg-earth"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Results;
