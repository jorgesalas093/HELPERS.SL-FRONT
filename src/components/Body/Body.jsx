import "./Body.css"

const CardBody = ({ title, content, link }) => (
    <div className="w-full md:w-1/3 p-4 card-container">
        <a href={link} className="block w-full h-full">
            <div className="bg-white shadow-md rounded-lg p-6 card">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p>{content}</p>
            </div>
        </a>
    </div>
);
const Body = () => {
    return (
        <div>
            <h3 className="">We offer all types of comprehensive services, HELPERS is made up of a team of professionals for each service area, with the aim of satisfying the different needs of each client.</h3>
            <div className="flex justify-center">
                <CardBody
                    title="Messenger"
                    content="If you need us to bring something to your house, such as shopping, picking up an order from a local store or doing some type of procedure or transaction."
                    link=""
                />
            </div>
        </div>
    );
};
export default Body;