import CardJob from "../CardJob/CardJob";
import Trato from "../Trato";
import "./Body.css"


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
                                <li className="font-serif text-xs"><a>Carer</a></li>
                                <li className="font-serif text-xs"><a>Carpenter</a></li>
                                <li className="font-serif text-xs"><a>Brickwork</a></li>
                                <li className="font-serif text-xs"><a>Chef</a></li>
                                <li className="font-serif text-xs"><a>Closet Organizer</a></li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <ul className="text-center">
                                <li className="font-serif text-xs"><a>Electrician</a></li>
                                <li className="font-serif text-xs"><a>Assembler</a></li>
                                <li className="font-serif text-xs"><a>Gardener</a></li>
                                <li className="font-serif text-xs"><a>Home Cleaner</a></li>
                                <li className="font-serif text-xs"><a>Locksmith</a></li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <ul className="text-center">
                                <li className="font-serif text-xs"><a>Messenger</a></li>
                                <li className="font-serif text-xs"><a>Painter</a></li>
                                <li className="font-serif text-xs"><a>Plumber</a></li>
                                <li className="font-serif text-xs"><a>Teacher</a></li>
                                <li className="font-serif text-xs"><a>Welder</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-4">
                    <Trato />
                </div>
            </div>
            <div>
                <CardJob />
            </div>
        </div>
    );
};

export default Body;