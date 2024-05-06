// BusinessInfo.jsx

import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// Le composant CopySuccessMessage affiche un message de succès lorsque l'utilisateur copie un lien dans son presse-papiers.

// Props :
// - show : boolean pour afficher ou non le message de succès
const CopySuccessMessage = ({ show }) => {
  
  // Ne rend rien si show est false
  if (!show) return null;
  
  return <p className="text-green-600 text-left">Copié</p>;
};

// Le composant BusinessInfo affiche les informations de l'entreprise sélectionnée.

// Props :
// - business : objet contenant les informations de l'entreprise sélectionnée
const BusinessInfo = ({ business }) => {
  // Définit les états pour les messages de succès de copie.
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);

  // Ne rend rien si business est null
  if (!business) return null;

  // Fonctions pour mettre à jour les états des messages de succès de copie.
  const handleCopy1 = () => {
    setCopied1(true);
    setTimeout(() => {
      setCopied1(false);
    }, 500);
  };

  const handleCopy2 = () => {
    setCopied2(true);
    setTimeout(() => {
      setCopied2(false);
    }, 500);
  };

  const handleCopy3 = () => {
    setCopied3(true);
    setTimeout(() => {
      setCopied3(false);
    }, 500);
  };

  // Fonction pour empêcher la sélection du texte dans les champs d'URL.
  const preventSelect = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row business-info-container max-w-2xl">
        {/* Affiche les informations de l'entreprise sélectionnée */}
        <div className="md:w-1/2 text-left p-4 bg-white rounded-md shadow overflow-x-auto">
          <h3 className="text-lg font-medium mb-2">Liens utiles Google Business Profile pour: <span className="text-zap-orange">{business.name}</span></h3>
          <p className="text-sm mb-4 text-gray-600">{business.address}</p>
          {/* Affiche les champs d'URL pour les liens d'avis Google et les boutons pour copier ces liens dans le presse-papiers */}
          <div className="space-y-2">
            <div>
              <p className="font-medium text-gray-600">Voir les avis sur Google Business Profile</p>
              <div className="relative flex items-center">
                <input type="text" value={`https://search.google.com/local/reviews?placeid=${business.place_id}`} readOnly onSelectStart={preventSelect} className="w-full px-2 py-1 bg-gray-100 border border-gray-300 rounded focus:outline-none" />
                <CopyToClipboard text={`https://search.google.com/local/reviews?placeid=${business.place_id}`} onCopy={handleCopy1}>
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-zap-orange text-white rounded hover:bg-orange-600 focus:outline-none">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                  </button>
                </CopyToClipboard>
                {/* Affiche le message de succès de copie pour le premier lien */}
                <CopySuccessMessage show={copied1} />
              </div>
            </div>
            <div>
              <p className="font-medium text-gray-600">Obtenir plus de commentaires</p>
              <div className="relative flex items-center">
                <input type="text" value={`https://search.google.com/local/writereview?placeid=${business.place_id}`} readOnly onSelectStart={preventSelect} className="w-full px-2 py-1 bg-gray-100 border border-gray-300 rounded focus:outline-none" />
                <CopyToClipboard text={`https://search.google.com/local/writereview?placeid=${business.place_id}`} onCopy={handleCopy2}>
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-zap-orange text-white rounded hover:bg-orange-600 focus:outline-none">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                  </button>
                </CopyToClipboard>
                {/* Affiche le message de succès de copie pour le deuxième lien */}
                <CopySuccessMessage show={copied2} />
              </div>
            </div>
            <div>
              <p className="font-medium text-gray-600">Voir la Google Business Profile dans le SERP</p>
              <div className="relative flex items-center">
                <input type="text" value={`https://local.google.com/place?id=${business.place_id}&use=srp&hl=en`} readOnly onSelectStart={preventSelect} className="w-full px-2 py-1 bg-gray-100 border border-gray-300 rounded focus:outline-none" />
                <CopyToClipboard text={`https://local.google.com/place?id=${business.place_id}&use=srp&hl=en`} onCopy={handleCopy3}>
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-zap-orange text-white rounded hover:bg-orange-600 focus:outline-none">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                  </button>
                </CopyToClipboard>
                {/* Affiche le message de succès de copie pour le troisième lien */}
                <CopySuccessMessage show={copied3} />
              </div>
            </div>
          </div>
        </div>
        {/* Affiche l'image de Google Maps pour l'entreprise sélectionnée */}
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
          <img src="https://c.clc2l.com/c/screenshot/d/google-maps-transports-en-commun-6130c408a91b6040045698.jpg" alt="Google Maps" className="w-full h-96 object-cover rounded-md" />
        </div>
      </div>
    </div>
  );
};

// Exporte le composant BusinessInfo pour être utilisé dans d'autres fichiers.
export default BusinessInfo;

