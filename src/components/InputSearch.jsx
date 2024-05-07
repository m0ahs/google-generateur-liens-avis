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
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Prévenir le comportement par défaut du lien et basculer la section d'aide
  const handleToggleClick = (event) => {
    event.preventDefault();
    toggleHelpSection();
  };

  return (
    <div className="relative search-container">
      <label
        htmlFor="searchInput"
        className="block text-lg font-semibold text-gray-700 mb-2"
      >
        Obtenez votre lien d'évaluation Google
      </label>
      <input
        type="text"
        id="searchInput"
        value={searchTerm}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Commencez à taper le nom et l'adresse de votre entreprise..."
        required
      />
      {showRemark && (
        <div className="mt-2 py-4 text-base text-gray-600">
          Vous ne trouvez pas votre entreprise ?{" "}
          <a
            href="#"
            className="text-lavender font-semibold hover:underline"
            onClick={handleToggleClick}
          >
            Essayez ceci !
          </a>
        </div>
      )}
    </div>
  );
};

export default InputSearch;
