import CardJob from "../CardHome";
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
            <div>
                <CardJob />
            </div>
        </div>
    );
};

export default Body;