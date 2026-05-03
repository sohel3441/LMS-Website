    import { useEffect, useState } from "react";
import API from "../services/api";

const Inquiries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await API.get("/inquiry");
      setData(res.data);
    } catch (err) {
      alert("Error fetching data");
    }
  };

  return (
    <div>
      <h3>All Inquiries</h3>

      <div className="row">
        {data.map((item) => (
          <div key={item._id} className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>{item.name}</h5>
              <p>{item.email}</p>
              <p>{item.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inquiries;