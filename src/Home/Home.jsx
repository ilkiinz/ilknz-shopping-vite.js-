import "./Home.css";
import Nav from "../Navbar/Nav";
import Model1 from '../assets/model-girl.jpg';
import Model2 from "../assets/model-men.jpg";
import { Link } from 'react-router-dom';
function Home() {
    
    return(
        <>
        <Nav/>
        <div className="home-cont">
                <div className="head-txt-cont">

                    <h1 className="head-txt1">Sustainable. Beautiful. Ethical.</h1>
                    <Link to={'/shop'}> <button className="btn-shop" >Shop All</button></Link>
                </div>

                
                <div className="main-shop-cont">
                            <div className="main-shop-left">
                             <img src={Model1} alt="" />
                             <Link to={'/women'}> <button className="gender-btn">Shop for Women → </button>  </Link>
                          
                            </div>

                            <div   className="main-shop-right">
                               <img src={Model2} alt="" />
                               <button className="gender-btn">Shop for Men →  </button>
                            </div>
                </div>


        </div>
        </>
    )
}

export default Home;