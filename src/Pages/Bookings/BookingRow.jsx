const BookingRow = ({ booking, handleDelete, handleBookingPending }) => {
  const { _id, date, server, price, img, status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle bg-[#FF3811] text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{server}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        {
            status === 'pending' ? <span className="font-bold text-primary">Confirmed</span> :
          <button
            onClick={() => handleBookingPending(_id)}
            className="rounded-md text-white btn-xs bg-[#FF3811]"
          >
           Please Confirm
          </button>
        }
      </th>
    </tr>
  );
};

export default BookingRow;
