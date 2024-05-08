// QRCode.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QRCode = ({ data }) => {
    const [qrCode, setQrCode] = useState('');

    useEffect(() => {
        const fetchQRCode = async () => {
            const response = await axios.get(
                `https://api.api-ninjas.com/v1/qrcode?data=${encodeURIComponent(data)}&format=png`,
                {
                    headers: {
                        'X-Api-Key': 'iiLpllQ9MDcmj7JO1c4YGg==SeMGDY7pF1ydwXwu',
                    },
                }
            );
            setQrCode(response.data);
        };

        fetchQRCode();
    }, [data]);

    return (
        <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" />
    );
};

export default QRCode;
