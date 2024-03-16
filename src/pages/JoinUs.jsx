import { useState, useEffect } from 'react';
import { getEnumTypeJob } from '../services/UserService';
import Button from '../components/Button';
import { EditCurrentUserProfile } from '../services/UserService'; // Asegúrate de importar la función de servicio adecuada
import { Link } from 'react-router-dom';

const JoinUs = () => {
    const [allTypesJob, setAllTypesJob] = useState([]);
    const [selectedWork, setSelectedWork] = useState([]);
    useEffect(() => {
        fetchEnumTypeJob();
    }, []);
    
    const fetchEnumTypeJob = () => {
        getEnumTypeJob()
            .then((response) => {
                setAllTypesJob(response);
            })
            .catch(error => {
                console.error('Error fetching enum type job:', error);
            });
    };
    const toggleWorkSelection = (typejob) => {
        if (selectedWork.includes({ typejob })) {
            setSelectedWork(selectedWork.filter(item => item !== typejob));
        } else {
            setSelectedWork([...selectedWork, typejob]);
        }
    };
    const handleSaveSelectedWork = (typeJob) => {
        console.log(typeJob)
        const formattedSelectedWork = typeJob.map(work => work.toLowerCase());
        console.log(formattedSelectedWork)
        EditCurrentUserProfile({ typejob: formattedSelectedWork })
            .then(response => {
                console.log('Perfil editado exitosamente:', response);
            })
            .catch(error => {
                console.error('Error al editar el perfil:', error);
            });
    };
    return (
        <div className='floating-dialog'>
            <h1 className='text-tw-primary uppercase font-bold text-3xl text-center'>CHOOSE YOUR PROFESIONS</h1>
            <p className='text-xs text-center'>Choose all the jobs you could do and save your changes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
                {allTypesJob.map((type, index) => (
                    <p key={index}>
                        <Button
                            className=""
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
            <div className='mt-8 flex justify-center'>
                <Link to={`/profile`}>
                    <Button text="SAVE WORKS"
                        onClick={() => handleSaveSelectedWork(selectedWork)}
                        color="green" />
                </Link>
            </div>
        </div>
    );
};
export default JoinUs;