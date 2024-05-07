// QRCode.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QRCode = ({ url }) => {
    const [qrCode, setQrCode] = useState('');

    useEffect(() => {
        const fetchQRCode = async () => {
            const response = await axios.get(
                `https://api.apininjas.com/v1/qrcode?url=${encodeURIComponent(
                    url
                )}`,
                {
                    headers: {
                        'X-Api-Key': 'iiLpllQ9MDcmj7JO1c4YGg==SeMGDY7pF1ydwXwu',
                    },
                }
            );
            setQrCode(response.data.image);
        };

        fetchQRCode();
    }, [url]);

    return (
        <img src={qrCode} alt="QR Code" />
    );
};