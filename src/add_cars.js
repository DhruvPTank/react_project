import  { useEffect, useState } from "react";
import  {Link,useParams} from "react-router-dom";

function Add_cars() {

    let params =useParams();

    const [carsInformation, setcarsInformation] = useState([]);
    useEffect(() => {  
      fetch("https://63234e43362b0d4e7de1159e.mockapi.io/superCars")
        .then((res) => res.json())
        .then((res) => setcarsInformation(res));
    }, []);
    var result = carsInformation.map((cars) => {
      return (
        
        <div className="col">
        <div className="card border-info mb-3 h-100" >
        <img src={cars.superCarImage} class="card-img-top" style={{width:100+"%",height:100+"%"}}/>
    <div className="card-body" >
      <h5 className="card-title">SuperCarName:{cars.SuperCarName}</h5>
      <h5 className="card-subtitle">SuperCarPrice:{cars.SuperCarPrice}</h5>
      <h5 className="card-text">SuperCarDisc:{cars.SuperCarDisc}</h5>
      
    </div>
    </div>
  </div>
          

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
  
  export default Add_cars;
  