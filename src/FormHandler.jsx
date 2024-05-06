// FormHandler.jsx
// Le composant FormHandler gère le formulaire de recherche et affiche les résultats.

// Définit les états pour la valeur du champ de recherche, les résultats de la recherche, l'entreprise sélectionnée, le chargement et l'animation de chargement.
import React, { useState, useEffect } from 'react';
import mockData from '../Data/mockData.json';
import InputSearch from './components/InputSearch';
import Results from './components/Results';
import BusinessInfo from './components/BusinessInfo';

// Fonction pour filtrer les résultats de la recherche en fonction de la valeur du champ de recherche.
const FormHandler = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [loading, setLoading] = useState(false);
  const [businessClicked, setBusinessClicked] = useState(false);
  const [loadingAnimation, setLoadingAnimation] = useState(false);

  // Fonction pour mettre à jour l'entreprise sélectionnée et afficher l'animation de chargement.
  const handleSelect = async (searchTerm) => {
    setLoading(true);
    setTimeout(() => {
      const filteredResults = mockData.results.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredResults);
      setLoading(false);
    }, 500);
  };

  // Effet pour filtrer les résultats de la recherche lorsque la valeur du champ de recherche change.
  const handleBusinessSelect = (business) => {
    setBusinessClicked(true);
    setLoadingAnimation(true);
    setTimeout(() => {
      setSelectedBusiness(business);
      setSearchTerm(`${business.name} ${business.address}`);
      setLoadingAnimation(false);
    }, 2000);
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      handleSelect(searchTerm);
    } else {
      setResults([]);
      setSelectedBusiness(null);
      setBusinessClicked(false);
    }
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-4">
        {/* Affiche le champ de recherche */}
        <InputSearch
          onSelect={handleSelect}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          showRemark={!selectedBusiness}
        />
      </div>
      {/* Affiche l'animation de chargement lorsque loading est true */}
      {loading && (
        <div className="flex justify-center">
          <svg
            className="animate-spin h-5 w-5 text-zap-orange"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
      {/* Affiche l'animation de chargement lorsque businessClicked et loadingAnimation sont true */}
      {!loading && businessClicked && loadingAnimation && (
        <div className="flex justify-center">
          <svg
            className="animate-spin h-5 w-5 text-zap-orange"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
      {/* Affiche les résultats de la recherche si results a une longueur supérieure à 0 et qu'aucune entreprise n'est sélectionnée et qu'aucune animation de chargement n'est en cours */}
      {results.length > 0 && !selectedBusiness && !businessClicked && (
        <Results
          results={results}
          onBusinessSelect={handleBusinessSelect}
        />
      )}
      {/* Affiche les informations de l'entreprise sélectionnée si selectedBusiness n'est pas null */}
      {selectedBusiness && (
        <div className="mt-8">
          <BusinessInfo business={selectedBusiness} />
        </div>
      )}
    </div>
  );
};

// Exporte le composant FormHandler pour être utilisé dans d'autres fichiers.
export default FormHandler;
