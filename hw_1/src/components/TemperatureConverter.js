import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        setFahrenheit(value === '' ? '' : ((parseFloat(value) * 9/5) + 32).toFixed(2));
    };

    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);
        setCelsius(value === '' ? '' : ((parseFloat(value) - 32) * 5/9).toFixed(2));
    };

    return (
        <div>
            <TextField
                label="Цельсий"
                value={celsius}
                onChange={handleCelsiusChange}
                type="number"
                InputProps={{ inputProps: { min: -273.15 } }}
            />
            <TextField
                label="Фаренгейт"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                type="number"
                InputProps={{ inputProps: { min: -459.67 } }}
            />
            <Button onClick={() => { setCelsius(''); setFahrenheit(''); }}>Очистить</Button>
        </div>
    );
};

export default TemperatureConverter;
