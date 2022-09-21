import {Link} from "react-router-dom";
import  './add_cars'
import './AddCars'
  
  function Header()
{
  return(

    <nav class="navbar bg-light">
    <form class="container-fluid justify-content-start">
      
      {/* <Link to="./add_cars" style={{textDecoration:"none",padding:5+"px", border:2+"px solid black",
                                    backgroundColor:"black",color:"white",borderRadius:20+"px",
                                    fontSize:20+"px" ,margin:10+"px"}} >Edit Car</Link> */}
  
      <Link to="./AddCars" style={{textDecoration:"none",padding:5+"px", border:2+"px solid black",
                                    backgroundColor:"black",color:"white",borderRadius:20+"px",
                                    fontSize:20+"px", margin:10+"px"}} >Add Car</Link>
  
      {/* <Link to="./add_cars" style={{textDecoration:"none",padding:5+"px", border:2+"px solid black",
                                    backgroundColor:"black",color:"white",borderRadius:20+"px",
                                    fontSize:20+"px",margin:10+"px"}} >Delete Car</Link> */}
  
                               {/* <input placeholder="search faculty here" type={"text"} style={{color:"white",float:"right",fontSize:20+"px",padding:10+"px",backgroundColor:"black"}}></input> */}
          
    </form>
  </nav>
  )
}
export default  Header;