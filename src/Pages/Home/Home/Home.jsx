import About from "../About/About";
import Banner from "../Banner/Banner";
import OurTeam from "../Service/OurTeam";
import Service from "../Service/Services";
import Products from "../Service/product/Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Products></Products>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;