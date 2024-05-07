// InputSearch.jsx
// Le composant InputSearch affiche le champ de recherche pour l'utilisateur.

import React from "react";

const InputSearch = ({
  onSelect,
  searchTerm,
  setSearchTerm,
  showRemark,
  toggleHelpSection,
}) => {
  /* 
  Props :
  - onSelect : fonction callback à appeler lorsque l'utilisateur soumet le formulaire
  - searchTerm : la valeur actuelle du champ de recherche
  - setSearchTerm : fonction pour mettre à jour la valeur du champ de recherche
  - showRemark : boolean pour afficher ou non la remarque
  */
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative search-container">
      <label
        htmlFor="searchInput"
        className="block text-lg font-semibold text-gray-700 mb-2"
      >
        Obtenez votre lien d'évaluation Google
      </label>

      {/* Affiche le champ de recherche */}
      <input
        type="text"
        id="searchInput"
        value={searchTerm}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Commencez à taper le nom et l'adresse de votre entreprise..."
        required
      />
      {/* Affiche la remarque si showRemark est true */}
      {showRemark && (
        <div className="mt-2 py-4 text-base text-gray-600">
          Vous ne trouvez pas votre entreprise ?{" "}
          <a
            href="#"
            className="text-lavender font-semibold hover:underline"
            onClick={toggleHelpSection}
          >
            Essayez ceci !
          </a>
        </div>
      )}
    </div>
  );
};

// Exporte le composant InputSearch pour être utilisé dans d'autres fichiers.
export default InputSearch;
