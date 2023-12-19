import About from "../About/About";
import Banner from "../Banner/Banner";
import OurTeam from "../Service/OurTeam";
import Service from "../Service/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;