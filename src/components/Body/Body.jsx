import Trato from "../Trato";
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
        <div className="container mx-auto px-4">
            <div className="md:flex md:justify-between md:items-center">
                <div className="md:w-1/2 md:pr-4">
                    <h3 className="font-serif text-xs text-center md:text-left mb-3">We offer all types of comprehensive services, HELPERS is made up of a team of professionals for each service area, with the aim of satisfying the different needs of each client.</h3>
                    <span className="flex justify-center text-xs font-bold items-center mb-2">Our main services</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex justify-center">
                            <ul className="text-center">
                                <li className="font-serif text-xs"><a href="#">Carer</a></li>
                                <li className="font-serif text-xs"><a href="#">Carpenter</a></li>
                                <li className="font-serif text-xs"><a href="#">Brickwork</a></li>
                                <li className="font-serif text-xs"><a href="#">Chef</a></li>
                                <li className="font-serif text-xs"><a href="#">Closet Organizer</a></li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <ul className="text-center">
                                <li className="font-serif text-xs"><a href="#">Electrician</a></li>
                                <li className="font-serif text-xs"><a href="#">Assembler</a></li>
                                <li className="font-serif text-xs"><a href="#">Gardener</a></li>
                                <li className="font-serif text-xs"><a href="#">Home Cleaner</a></li>
                                <li className="font-serif text-xs"><a href="#">Locksmith</a></li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <ul className="text-center">
                                <li className="font-serif text-xs"><a href="#">Messenger</a></li>
                                <li className="font-serif text-xs"><a href="#">Painter</a></li>
                                <li className="font-serif text-xs"><a href="#">Plumber</a></li>
                                <li className="font-serif text-xs"><a href="#">Teacher</a></li>
                                <li className="font-serif text-xs"><a href="#">Welder</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-4">
                    <Trato />
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <CardBody
                    title="Messenger"
                    content="If you need us to bring something to your house, such as shopping, picking up an order from a local store or doing some type of procedure or transaction."
                    link=""
                />
                <CardBody
                    title="Messenger"
                    content="If you need us to bring something to your house, such as shopping, picking up an order from a local store or doing some type of procedure or transaction."
                    link=""
                />
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