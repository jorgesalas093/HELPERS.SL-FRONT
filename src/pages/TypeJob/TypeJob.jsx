import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { jobs } from "../../assets/utils/utils";
import { getTypeJobUser } from "../../services/UserService";
import Card from "../../components/Card/Card";
import { motion, AnimatePresence } from "framer-motion";

import "./TypeJob.css";
const TypeJob = () => {
  const [users, setUsers] = useState([]);
  const { job } = useParams();

  const jobSelected = jobs.find((jobData) => jobData.title === job);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getTypeJobUser(job.toLowerCase());
        setUsers(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [job]);
  console.log(jobSelected);

  return (
    // pendiente retocar esta div con animacion, es la animacion de la card principal de typejob
    <AnimatePresence> 
      <motion.div className="flex flex-col">
        <div className="justify-center rounded-lg p-2 mb-1 max-w-md items-center">
          <p className="text-xl text-center mb-4 bg-green-200">{jobSelected.title}</p>
          <img className="" src={jobSelected.img} alt="Job Image" />
          <p className="text-sm">{jobSelected.text}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user._id}>
              <Link to={`/users/${user.id}`}>
                <Card
                  key={user._id}
                  title={user.username}
                  imageUrl={user.avatar}
                  description={user.typejob}
                />
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TypeJob;
