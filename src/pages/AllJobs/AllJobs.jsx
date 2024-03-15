import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jobs } from "../../assets/utils/utils";
import { getAllUser } from "../../services/UserService";
import Card from "../../components/Card/Card";
import Icon from "../../components/IconsAllJob/IconsAllJob";

import "./AllJobs.css"

const AllJobs = () => {
  const [users, setUsers] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

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

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
      user.typejob.join(" ").includes(searchFilter.toLowerCase())
  );

  const handleIconFiltersClick = (filterValue) => {
    console.log({ filterValue });
    setSearchFilter(filterValue);
  };

  return (
    <div>
      <div>
        <div>
          <Icon action={handleIconFiltersClick} />
        </div>
      </div>
      <div className="container-search">
        <input
          className="search-all"
          type="text"
          placeholder="Search for user"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="search-user type-job-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
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
        {filteredJobs.map((job) => (
          <div key={job.id}>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
