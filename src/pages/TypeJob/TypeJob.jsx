import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { jobs } from "../../assets/utils/utils";
import { getTypeJobUser } from "../../services/UserService";
import Card from "../../components/Card/Card";

import "./TypeJob.css"

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
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gray-100 rounded-lg max-w-md mb-3">
          <div className="text-center">
            <p className="text-2xl text-gray-800 mb-1 mt-2">{jobSelected.title}</p>
            <img className="rounded-lg" src={jobSelected.img} alt="Job Image" />
            <p className="text-base text-gray-700 mt-2 p-2 mb-3">{jobSelected.text}</p>
          </div>
        </div>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div className="card-container" key={user._id}>
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
    </div>
  );
};

export default TypeJob;
