import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {_id, title, img, price} = service; 
    return (
        <div data-aos='zoom-in' className="card w-96 bg-base-100 aos-init aos-animate border group-hover:blur-sm hover:blur-none  cursor-pointer">
  <figure className="">
    <img src={img} alt="Shoes" className=" rounded-xl w-full h-60" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Price: ${price}</p>
    <div className="card-actions">
      <Link to={`/book/${_id}`}>
      <button className="btn bg-gradient-to-r from-pink-500 to-yellow-500  hover:from-purple-500 hover:to-pink-500 text-white">Book Now</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;