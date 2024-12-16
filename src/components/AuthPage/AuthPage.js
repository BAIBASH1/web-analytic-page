import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/UserSlice';

const AuthPage = () => {
    const [code, setCode] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        dispatch(login(code)); // Проверяем код
        if (localStorage.getItem('adminToken')) {
            navigate('/admin'); // Перенаправление на страницу администратора
        } else {
            alert('Incorrect code!'); // Уведомление об ошибке
        }
    };

    return (
        <div>
            <h1>Admin Login</h1>
            <input
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter code"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default AuthPage;