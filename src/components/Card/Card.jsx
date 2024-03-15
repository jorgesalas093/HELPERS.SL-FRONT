import "./Card.css"
const Card = ({ title, imageUrl, description }) => {
  return (
    <div className="card-container">
      <div className="card flex-col border rounded-lg block w-full h-full">
        <div className="card-wrapper">
          <div style={{ width: '100%', height: '100%', overflow: 'hidden', padding: '25px' }}>
            <img
              src={imageUrl}
              alt="Card"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              className="splash rounded-xl"
            />
          </div>
          <div className="card-content">
            <h3 className="mb-2 text-center">{title}</h3>
            <p className="text-sm text-center">{description.join(" / ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
