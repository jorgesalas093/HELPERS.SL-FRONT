const Card = ({ title, imageUrl, description }) => {
  return (
    <div className="card-container w-400">
      <div className="card flex flex-col h-full border rounded-lg overflow-hidden">
        <div className="splash-container relative">
          <img
            src={imageUrl}
            alt="Card"
            style={{ width: "250px", height: "250px" }}
            className="rounded-full mt-5"
          />
          <div className="card-content">
            <h3 className="mb-2">{title}</h3>
            <p className="text-sm">{description.join(" - ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
