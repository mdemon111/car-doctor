import person from '../../../assets/images/team/1.jpg'
import person2 from '../../../assets/images/team/2.jpg'
import person3 from '../../../assets/images/team/3.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";








const OurTeam = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-5xl text-center mt-8 font-bold">Meet Our Team</h2>
        <p className="text-center mt-5">
          {" "}
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* card-1 */}
      <div className="card border bg-base-100 p-6">
        <figure>
          <img
          className='w-96 rounded-xl'
            src={person}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-semibold">Car Engine Plug</h2>
          <p>Engine Expert</p>
          <div className='flex mb-20 gap-10 text-center m-9 text-blue-600'>
          <FaFacebookF />
          <FaInstagram/>
          <FaLinkedinIn />
          <FiTwitter />
          </div>
        </div>
      </div>
      {/* card-2 */}
      <div className="card border bg-base-100 p-6">
        <figure>
          <img
          className='w-96 rounded-xl'
            src={person2}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-semibold">Car Engine Plug</h2>
          <p>Engine Expert</p>
          <div className='flex mb-20 gap-10 text-center m-9 text-blue-600'>
          <FaFacebookF />
          <FaInstagram/>
          <FaLinkedinIn />
          <FiTwitter />
          </div>
        </div>
      </div>
      {/* card-3 */}
      <div className="card border bg-base-100 p-6">
        <figure>
          <img
          className='w-96 rounded-xl'
            src={person3}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-semibold">Car Engine Plug</h2>
          <p>Engine Expert</p>
          <div className='flex mb-20 gap-10 text-center m-9 text-blue-600'>
          <FaFacebookF />
          <FaInstagram/>
          <FaLinkedinIn />
          <FiTwitter />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OurTeam;
