import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const BookServices = () => {
  const server = useLoaderData(); 
  // const product = useLoaderData();  
  const { title, _id, price, img } = server;

  const {user} = useContext(AuthContext)


  const handleBookservice = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const booking = {
        customerName: name,
        email,
        img,
        date,
        server: title,
        service_id: _id,
        price: price
    }
    console.log(booking);

    fetch('http://localhost:5000/bookings' , {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Service book successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }


  return (
    <div>
      {/* <h2 className="text-center text-3xl">Book Services: {title}</h2> */}
      <form onSubmit={handleBookservice}>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                type="text"
                defaultValue={'$' + price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn  btn-block bg-gradient-to-r from-[#FF3811] via-gray-700 to-[#FF3811] text-white"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookServices;
