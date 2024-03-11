import { useState, useEffect } from 'react';
import { getEnumTypeJob } from '../services/UserService';
import Button from '../components/Button';
import { EditCurrentUserProfile } from '../services/UserService'; // Asegúrate de importar la función de servicio adecuada

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

    const handleSaveSelectedWork = () => {
        // Formatear los trabajos seleccionados antes de enviarlos al servidor
        const formattedSelectedWork = selectedWork.map(work => work.toUpperCase());

        // Llamar a la función del servicio para editar el perfil con los trabajos seleccionados
        EditCurrentUserProfile({ typejob: formattedSelectedWork }) // Pasar un objeto con la propiedad typejob
            .then(response => {
                console.log('Perfil editado exitosamente:', response);
                // Aquí puedes realizar alguna acción adicional después de editar el perfil
            })
            .catch(error => {
                console.error('Error al editar el perfil:', error);
            });
    };

    return (
        <div>
            <h2>Type of job:</h2>
            <div>
                {typesJob.map((type, index) => (
                    <p className='flex' key={index}>
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
            <Button text="Save works" onClick={handleSaveSelectedWork} bgcolor="bg-blue-500" />
        </div>
    );
};

export default JoinUs;
