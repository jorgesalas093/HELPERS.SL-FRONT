import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./TypeJob.css";
import { jobs } from "../../assets/utils/utils";

import { getTypeJobUser } from "../../services/UserService";
import Card from "../../components/CardAllWorkers/CardAllWorkers";

const TypeJob = () => {
  const [users, setUsers] = useState([]);
  const { job } = useParams();

  const jobSelected = jobs.find((jobData) => jobData.title === job);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getTypeJobUser(job);
        setUsers(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [job]);
  console.log(jobSelected);

  return (
    <div className="type-job-container">
      <p>{jobSelected.title}</p>
      <img src={jobSelected.img} alt="Job Image" />
      <p>{jobSelected.text}</p>
      <div className="type-job-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  );
};

export default TypeJob;
