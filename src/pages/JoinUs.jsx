import { useState, useEffect } from 'react';
import { getEnumTypeJob } from '../services/UserService';
import Button from '../components/Button';
import { EditCurrentUserProfile } from '../services/UserService'; // Asegúrate de importar la función de servicio adecuada

import { Link } from 'react-router-dom';

const JoinUs = () => {
    const [typesJob, setTypesJob] = useState([]);
    const [selectedWork, setSelectedWork] = useState([]);
    
    useEffect(() => {
        fetchEnumTypeJob();
    }, []);

    const fetchEnumTypeJob = () => {
        getEnumTypeJob()
            .then((response) => {
                setTypesJob(response);
            })
            .catch(error => {
                console.error('Error fetching enum type job:', error);
            });
    };


    const toggleWorkSelection = (work) => {
        if (selectedWork.includes(work)) {
            setSelectedWork(selectedWork.filter(item => item !== work));
        } else {
            setSelectedWork([...selectedWork, work]);
        }
    };

    const handleSaveSelectedWork = (typeJob) => {

        const formattedSelectedWork = typeJob.map(work => work.toLowerCase());


        EditCurrentUserProfile({ typejob: formattedSelectedWork })
            .then(response => {
                console.log('Perfil editado exitosamente:', response);

            })
            .catch(error => {
                console.error('Error al editar el perfil:', error);
            });
    };

    return (
        <div>
            <h2>Type of job:</h2>
            <div className='flex justify-evenly'>
                {typesJob.map((type, index) => (
                    <p key={index}>
                        <Button
                            text={type}
                            onClick={() => toggleWorkSelection(type)}
                            selected={selectedWork.includes(type)}
                            bgcolor="bg-green-500"
                        >
                            {type}
                        </Button>
                    </p>
                ))}
            </div>
            <p>Selected work: {selectedWork.join(', ')}</p>
            <Link to={`/profile`}>
                <Button text="Save works" onClick={handleSaveSelectedWork(selectedWork)} bgcolor="bg-blue-500" />
            </Link>

        </div>
    );
};

export default JoinUs;
