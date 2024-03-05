import "./FeaturedWorks.css"

const Card = ({ title, content, link }) => (
    <div className="w-full md:w-1/3 p-4 card-container">
        <a href={link} className="block w-full h-full">
            <div className="bg-white shadow-md rounded-lg p-6 card">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p>{content}</p>
            </div>
        </a>
    </div>
);
const FeaturedWorks = () => {
    return (
        <div>
            <h2 className="text-xl font-bold text-center p-10">FEATURED WORKS</h2>
            <div className="flex justify-center">
                <Card
                    title="Messenger"
                    content="If you need us to bring something to your house, such as shopping, picking up an order from a local store or doing some type of procedure or transaction."
                    link=""
                />
                <Card
                    title="Assamble"
                    content="Have you bought a piece of furniture and need help with assembly? We can also take it home and assemble it."
                    link=""
                />
                <Card
                    title="Chef"
                    content="Are you not good at cooking but want to surprise your guests? We have a home cook for you."
                    link=""
                />
            </div>
        </div>
    );
};
export default FeaturedWorks;