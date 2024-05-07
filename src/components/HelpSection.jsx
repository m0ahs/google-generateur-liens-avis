// HelpSection.jsx

import React from "react";

function HelpSection() {
  return (
    <div className="bg-white p-6 rounded-sm shadow text-right">
      <h1 className="text-3xl font-bold mb-4">
        Si votre entreprise n'apparaît pas dans la boîte de recherche, vous avez
        probablement une adresse cachée !
      </h1>
      <p className="text-gray-700 mb-4">
        Mais ne vous inquiétez pas ! Il suffit de suivre les étapes ci-dessous :
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold">1.</span> Recherchez votre entreprise sur
        Google de manière à faire apparaître le panneau de connaissances de
        votre fiche. En général, [nom de l'entreprise] + [ville] font l'affaire.
        <span className="font-bold">2.</span> Inspectez le bouton Écrire un
        avis. Pour ce faire, cliquez avec le bouton droit de la souris sur le
        bouton et choisissez l'option "inspecter" (nous utilisons ici Chrome -
        cela varie légèrement selon le navigateur, pour plus d'informations,
        cliquez ici). Si vous ne voyez pas le bouton, il se peut que vous soyez
        connecté au compte qui gère votre annonce. Essayez d'utiliser le mode
        Incognito ou un autre navigateur, ou déconnectez-vous.
      </p>

      <img
        className="rounded-sm mb-4"
        src="https://wordpress.whitespark.ca/wp-content/uploads/2022/05/get-place-id-1.jpg"
        alt="Comment trouver l'identifiant Google Place de n'importe quel profil d'entreprise Google ?"
      />

      <p className="text-gray-700 mb-4">
        <span className="font-bold">3.</span> Recherchez data-pid. La plupart
        des inspecteurs vous permettent d'effectuer une recherche en appuyant
        sur Cmd+F (Mac) ou Ctrl+F (Win).
      </p>

      <img
        className="rounded-sm mb-4"
        src="https://wordpress.whitespark.ca/wp-content/uploads/2022/05/get-place-id-2.jpg"
        alt="Comment trouver l'identifiant Google Place de n'importe quel profil d'entreprise Google ?"
      />

      <p className="text-gray-700 mb-4">
        <span className="font-bold">4.</span> Mettez en évidence et copiez la
        chaîne de caractères entre les guillemets et collez-la ci-dessous.
      </p>
    </div>
  );
}

export default HelpSection;
