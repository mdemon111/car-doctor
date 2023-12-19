import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    const {_id, title, img, price} = product; 
    return (
        <div  className="card  bg-base-100 aos-init aos-animate border group-hover:blur-sm hover:blur-none  cursor-pointer">
  <figure className="bg-[#F3F3F3]">
    <img src={img} alt="Shoes" className=" rounded-xl w-40 h-60 " />
  </figure>
  <div className="card-body">
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <h2 className="card-title">{title}</h2>
    <p>Price: ${price}</p>
    <div className="">
      <Link to={`/book/${_id}`}>
      <button className="btn w-full bg-gradient-to-r from-green-900 to-yellow-500  hover:from-orange-800 hover:to-pink-500 text-white">Book Now</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ProductCard;