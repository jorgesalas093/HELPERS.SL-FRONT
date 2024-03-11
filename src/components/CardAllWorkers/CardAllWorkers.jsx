import "./CardAllWorkers.css"
const Card = ({ title, imageUrl, description }) => {
    return (
        <div className="card-list-search">
            <div className="card-container-search">
                <div className="splash-search">
                    <img src={imageUrl} alt="Card"/>
                    <div className="card-content-search">
                        <h3 className="card-title-search">{title}</h3>
                        <p className="card-description-search">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
