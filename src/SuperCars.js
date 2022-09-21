
import { Link, useNavigate, useParams } from "react-router-dom"; 
import './styles.css'; 
import  { useEffect, useState } from "react";
// const { Link } = require("react-router-dom");

function SuperCars() {
  let params = useParams();
  const navigate = useNavigate();
  const [carsInfo, setcarsInfo] = useState([]);
  console.log(params.id)
  useEffect(() => {
    
    fetch("https://63234e43362b0d4e7de1159e.mockapi.io/superCars")
      .then((res) => res.json())
      .then((res) => setcarsInfo(res));
  }, []);
  var result = carsInfo.map((cars) => {
    return (
      <>
      <div className="col">
        
      <div className="card border-info mb-3 h-100" >
      <img src={cars.SuperCarImage} class="card-img-top" style={{margin:20+"px",width:400+"px",alignItems:"center",height:200+"px",borderRadius:100+"px"}}/>
  <div className="card-body" >
    <h5>SuperCarName:-{cars.SuperCarName}</h5>
    <h5>SuperCarPrice:-{cars.SuperCarPrice}</h5>
    <h5>SuperCarDisc:-{cars.SuperCarDisc}</h5>
    <Link to={"../supercars/"+cars.id}>
    <button type="button" class="btn btn-danger"
              onClick={() => {
                fetch(
                  "https://63234e43362b0d4e7de1159e.mockapi.io/superCars/" +
                    params.id,
                  {
                    method: "DELETE"
                  })
                  // .then((res) => res.json())
                  
                  .then((res) => {
                    
                  navigate("/supercars");
                });
              }}
              >
              Delete</button></Link>




    <button type="button" class="btn btn-info" style={{float:"right",margin:0+"px"}}>Edit  Car</button>
    {/* <h5 style={{textAlign:"center",color:"green" ,fontSize:20+"px"}}><a href="">Edit Profile</a></h5> */}
    
  </div>
  </div>
  
</div>
        
      </>
    );
  });

  return (
    <>
     <div class="card-group row row-cols-1 row-cols-md-3 g-4">
        {result}
     </div>
    </>
  );
}

export default SuperCars;



