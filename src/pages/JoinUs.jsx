import { useState, useEffect } from 'react';
import { getEnumTypeJob } from '../services/UserService'; // Reemplaza 'tuRutaAlServicio' con la ruta correcta
import Button from '../components/Button';

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
            setSelectedWork(selectedWork.filter(item => item !== work)); // Si el trabajo ya está seleccionado, quítalo
        } else {
            setSelectedWork([...selectedWork, work]); // Si el trabajo no está seleccionado, agrégalo
        }
    };

    return (
        <div>
            <h2>Tipos de trabajo:</h2>
            <div>
                {typesJob.map((type, index) => (
                    <p className='flex' key={index}>
                        {/* <Button text="Mi botón" onClick={() => console.log("Botón clicado")} bgcolor="bg-green-500" /> */}
                        <Button
                            text={type}
                            bgcolor="bg-green-500"
                            onClick={() => toggleWorkSelection(type)}
                            selected={selectedWork.includes(type)}
                            style={{ backgroundColor: selectedWork.includes(type) ? 'green' : 'inherit' }} // Cambia el color a verde si está seleccionado
                        >
                            {type}
                        </Button>
                    </p>
                ))}
            </div>
            <p>Trabajos seleccionados: {selectedWork.join(', ')}</p>
        </div>
    );
};

export default JoinUs;
