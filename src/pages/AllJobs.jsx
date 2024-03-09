import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { jobs } from "../assets/utils/utils";
import { getAllUser } from "../services/UserService";

const AllJobs = () => {
  const [users, setUsers] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    const fetchUsers = () => {
      getAllUser()
        .then((response) => {
          setUsers(response);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const filtered = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(jobs);
    }
  }, [searchTerm]);


  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="type-job-container">
      <input
        type="text"
        placeholder="Search for user"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Buscar</button>
      {filteredUsers.map((user) => (
        <div key={user._id}>
          <p>{user.username}</p>
          <p>{user.typejob}</p>
          <Link to={`/users/${user.id}`}>
            <Button text="PROFILE" />
          </Link>
        </div>
      ))}
      {filteredJobs.map((job) => (
        <div key={job.id}>
          
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllJobs;
