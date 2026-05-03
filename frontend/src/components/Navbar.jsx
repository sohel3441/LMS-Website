// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-dark bg-dark">
//       <div className="container">
//         <Link className="navbar-brand" to="/">School Management Software</Link>

//         <div>
//           <Link className="btn btn-outline-light me-2" to="/register">Register</Link>
//           <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
//           <Link className="btn btn-warning" to="/contact">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <div className="container">

        {/* LOGO + BRAND */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://res.cloudinary.com/dnxhvsqax/image/upload/v1777807350/own-logo_ozrr1p.jpg"
            alt="Logo"
            width="40"
            height="40"
            className="me-2 rounded"
          />
          <span className="fw-semibold">School ERP</span>
        </Link>

        {/* RIGHT SIDE BUTTONS */}
        <div>
          <Link className="btn btn-outline-light me-2" to="/register">
            Register
          </Link>
          <Link className="btn btn-outline-light me-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-warning" to="/contact">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;