// QRCode.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QRCode = ({ data }) => {
    const [qrCode, setQrCode] = useState('');

    useEffect(() => {
        const fetchQRCode = async () => {
            try {
                const response = await axios.get(
                    `https://api.api-ninjas.com/v1/qrcode?data=${encodeURIComponent(data)}&format=svg&size=300`, // Utilisation du format SVG et augmentation de la taille
                    {
                        headers: {
                            'X-Api-Key': 'iiLpllQ9MDcmj7JO1c4YGg==SeMGDY7pF1ydwXwu',
                            'Accept': 'image/svg+xml'  // S'assurer que l'API retourne le contenu au format SVG
                        },
                        responseType: 'blob'  // Important pour le traitement des données binaires pour SVG
                    }
                );
                const url = URL.createObjectURL(response.data);
                setQrCode(url);
            } catch (error) {
                console.error("Error fetching QR code: ", error);
            }
        };

        fetchQRCode();
    }, [data]);

    return (
        <img src={qrCode} alt="QR Code" style={{ width: '100%', height: 'auto' }} /> // Retirer les classes Tailwind pour le contrôle direct via style
    );
};

export default QRCode;

