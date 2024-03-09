import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./TypeJob.css";
import Button from "../../components/Button";
import { jobs } from "../../assets/utils/utils";


import { getTypeJobUser } from "../../services/UserService";

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
      {users.map((user) => (
        <div key={user._id}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Job: {user.typejob}</p>
          <Link to={`/users/${user.id}`}>
            <Button text="PROFILE" />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default TypeJob;
