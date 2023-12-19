/* eslint-disable react/no-unescaped-entities */
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
import { Link } from 'react-router-dom';



const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row"  data-aos='fade-down' data-aos-delay='400'>
       <div className='lg:w-1/2 relative'>
       <img
          src={person}
          className="w-3/4 rounded-lg shadow-2xl" 
        />
       <img
          src={parts}
          className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
        />
       </div>
        <div className='lg:w-1/2 space-y-5 p-4'>
            <h3 className='text-3xl font-bold text-orange-500'>About Us</h3>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <Link to={'/about'}>
          <button  className="btn btn-secondary bg-[#FF3811] text-white">Get More Info </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
