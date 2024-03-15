
const Card = ({ title, imageUrl, description }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="card border rounded-lg block">

        <div className="card-wrapper" style={{ width: '300px', height: '600px' }}>
          <div style={{ width: '100%', height: '70%', padding: '25px', overflow: 'hidden' }}>
            <img
              src={imageUrl}
              alt="Card"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              className="rounded-xl w-full h-48 object-cover"
            />
          </div>
          
          <div className="card-content d-flex flex-column justify-content-center align-items-center" style={{ width: '100%', height: '0%' }}>        
            <h3 className="mb-2 text-center">{title}</h3>        
            <p className="text-sm text-center" style={{ margin: 'auto' }}>
              {description.join(" / ")}
            </p>
          </div>
        </div>
        
      </div>
    </div>

  );
};

export default Card;
