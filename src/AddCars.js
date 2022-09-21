import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import './styles.css'

export default function CarAdd() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (params.id > 0) {
      fetch(
        "https://63234e43362b0d4e7de1159e.mockapi.io/superCars" + params.id,
        {
          method: "GET"
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);

  return (
    <>
      <table>
        <tr>
          <td>Enter Car Name</td>
          <td>:</td>
          <td>
            <input
              value={data.SuperCarName}
              onChange={(e) => {
                setData({ ...data, SuperCarName: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Super car Image</td>
          <td>:</td>
          <td>
            <input
              value={data.SuperCarImage}
              onChange={(e) => {
                setData({ ...data, SuperCarImage: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Car Price</td>
          <td>:</td>
          <td>
            <input
              value={data.SuperCarPrice}
              onChange={(e) => {
                setData({ ...data, SuperCarPrice: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Car Discription</td>
          <td>:</td>
          <td>
            <input
              value={data.SuperCarDisc}
              onChange={(e) => {
                setData({ ...data, SuperCarDisc: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td colSpan="3">
            <button
              onClick={() => {
                if (params.id > 0) {
                  fetch(
                    "https://63234e43362b0d4e7de1159e.mockapi.io/superCars" +
                      params.id,
                    {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/SuperCars");
                  });
                } else {
                  fetch(
                    "https://63234e43362b0d4e7de1159e.mockapi.io/superCars",
                    {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/faculties");
                  });
                }
              }}
            >
              {params.id > 0 && "Edit  "}
              {!(params.id > 0) && "Edit "}
            </button>
          </td>
        </tr>
      </table>


      <Link to="./Supercars" style={{textDecoration:"none",padding:5+"px", border:2+"px solid black",
                                    backgroundColor:"black",color:"white",borderRadius:20+"px",
                                    fontSize:20+"px", margin:10+"px"}} >Return Home</Link>
    </>
  );
}