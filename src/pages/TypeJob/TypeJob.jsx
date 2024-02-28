import "./TypeJob.css"

const TypeJob = ({ match }) => {
  const { params } = match;
  const { to } = params;

  return (
    <div className="type-job-container">
      <h2>{to}</h2>
      <p>Detalles del trabajo {to}</p>
    </div>
  );
};

export default TypeJob;