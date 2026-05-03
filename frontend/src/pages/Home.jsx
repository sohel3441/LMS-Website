import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="text-center py-5 bg-light">
        <div className="container">
          <h1 className="fw-bold">
           School Management Software
We support schools in achieving excellence
          </h1>
          <p className="lead mt-3">
            Manage admissions, fees, attendance, exams, and communication — all in one platform.
          </p>

          <Link to="/contact" className="btn btn-primary mt-3">
            Request Demo
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">One Platform for Complete School Management</h2>

          <div className="row">
            <div className="col-md-4">
              <h5>📊 Administration</h5>
              <p>Manage students, staff, admissions and records efficiently.</p>
            </div>

            <div className="col-md-4">
              <h5>💰 Finance</h5>
              <p>Track fees, generate reports and automate reminders.</p>
            </div>

            <div className="col-md-4">
              <h5>📚 Academics</h5>
              <p>Handle exams, report cards, homework and performance tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2>Why Choose Our ERP?</h2>

          <div className="row mt-4">
            <div className="col-md-3">
              <h4>✔ Easy to Use</h4>
              <p>Simple interface for teachers, parents, and admins.</p>
            </div>

            <div className="col-md-3">
              <h4>✔ Secure</h4>
              <p>Data protection with modern cloud infrastructure.</p>
            </div>

            <div className="col-md-3">
              <h4>✔ Scalable</h4>
              <p>Works for small schools to large institutions.</p>
            </div>

            <div className="col-md-3">
              <h4>✔ Automated</h4>
              <p>Reduce manual work and save hours daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-5">
        <div className="container text-center">
          <h2>Core Modules</h2>

          <div className="row mt-4">

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                <h5>Admission Management</h5>
                <p>Manage enquiries, registrations and admissions online.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                <h5>Fee Management</h5>
                <p>Track payments, dues and generate financial reports.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                <h5>Attendance</h5>
                <p>Track student and staff attendance with reports.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                <h5>Exams & Results</h5>
                <p>Manage exams, report cards and performance analytics.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <h2>1000+</h2>
              <p>Schools</p>
            </div>

            <div className="col-md-3">
              <h2>300K+</h2>
              <p>Students</p>
            </div>

            <div className="col-md-3">
              <h2>20+</h2>
              <p>States</p>
            </div>

            <div className="col-md-3">
              <h2>10+</h2>
              <p>Years Experience</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center">
        <div className="container">
          <h2>Start Digitizing Your School Today</h2>
          <p className="lead">Book a free demo and experience the system.</p>

          <Link to="/contact" className="btn btn-warning">
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;