import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { activate } from '../services/AuthService';
const ActivationPage = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        activate(token)
            .then(() => {
                navigate('/login');
            })
            .catch(err => {
                console.error('Error during activation', err);
            });
    }, [token, navigate]);
    return <div>Activating...</div>;
};
export default ActivationPage;