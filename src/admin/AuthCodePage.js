import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCodePage = () => {
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const correctCode = '1234'; // Установите ваш код
        if (code === correctCode) {
            localStorage.setItem('auth', 'true'); // Сохраняем состояние авторизации
            navigate('/admin'); // Перенаправляем на admin
        } else {
            alert('Incorrect code! Try again.');
        }
    };

    return (
        <div>
            <h1>Authorization</h1>
            <p>Enter the code to access the admin page:</p>
            <input
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter code"
            />
            <button onClick={handleLogin}>Submit</button>
        </div>
    );
};

export default AuthCodePage;