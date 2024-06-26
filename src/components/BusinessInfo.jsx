// BusinessInfo.jsx

import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import QRCode from '../components/QRCode';

const CopySuccessMessage = ({ show }) => {
  if (!show) return null;

  return <p className="text-green-600 text-left">Copié</p>;
};

const BusinessInfo = ({ business }) => {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  if (!business) return null;

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

  const preventSelect = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center overflow-y-auto">
      <div className="flex flex-col md:flex-row business-info-container max-w-2xl">
        <div className="md:w-1/2 text-left p-4 bg-white rounded-md shadow-md shadow-zap-orange/15 overflow-x-auto">
          <h3 className="text-lg font-medium mb-2">
            Liens utiles Google Business Profile pour:{" "}
            <span className="text-zap-orange">{business.name}</span>
          </h3>
          <p className="text-sm mb-4 text-earth">{business.address}</p>
          <div className="space-y-2">
            <div>
              <p className="font-medium text-gray-600">
                Voir les avis sur Google Business Profile
              </p>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={`https://search.google.com/local/reviews?placeid=${business.place_id}`}
                  readOnly
                  onSelectStart={preventSelect}
                  className="w-full px-2 py-1 bg-gray-100 border border-gray-300 rounded focus:outline-none"
                />
                <CopyToClipboard
                  text={`https://search.google.com/local/reviews?placeid=${business.place_id}`}
                  onCopy={handleCopy1}
                >
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-zap-orange text-white rounded hover:bg-orange-600 focus:outline-none">
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    </svg>
                  </button>
                </CopyToClipboard>
                <CopySuccessMessage show={copied1} />
              </div>
            </div>
            <br />
            <div>
              <p className="font-medium text-gray-600">
                Obtenir plus d'avis
              </p>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={`https://search.google.com/local/writereview?placeid=${business.place_id}`}
                  readOnly
                  onSelectStart={preventSelect}
                  className="w-full px-2 py-1 bg-gray-100 border border-gray-300 rounded focus:outline-none"
                />
                <CopyToClipboard
                  text={`https://search.google.com/local/writereview?placeid=${business.place_id}`}
                  onCopy={handleCopy2}
                >
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-zap-orange text-white rounded hover:bg-orange-600 focus:outline-none">
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    </svg>
                  </button>
                </CopyToClipboard>
                <CopySuccessMessage show={copied2} />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 shadow-none mt-4 md:mt-0 md:ml-4">
          <QRCode data={`https://search.google.com/local/writereview?placeid=${business.place_id}`} />
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
