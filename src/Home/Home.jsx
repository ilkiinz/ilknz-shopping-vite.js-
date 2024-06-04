import "./Home.css";
import Nav from "../Navbar/Nav";
import Model1 from '../assets/model-girl.jpg';
import Model2 from "../assets/model-men.jpg";
import Example1 from "../assets/show-mag.jpg";
import Example2 from "../assets/example2.jpg";
import { Link } from 'react-router-dom';
function Home() {

    return (
        <>
            <Nav />
            <div className="home-cont">
                <div className="head-txt-cont">

                    <h1 className="head-txt1">Sustainable. Beautiful. Ethical.</h1>
                    <Link to={'/shop'} className="btn-shop"> <button className="btn-shop" >Shop All</button></Link>
                </div>


                <div className="main-shop-cont">
                    <div className="main-shop-left">
                        <img src={Model1} alt="" />
                        <Link to={'/women'} className="gender-btn"> <button className="gender-btn">Shop for Women → </button>  </Link>

                    </div>

                    <div className="main-shop-right">
                        <img src={Model2} alt="" />
                        <Link to={'/men'} className="gender-btn">  <button className="gender-btn">Shop for Men →  </button> </Link>
                    </div>
                </div>

                <div className="cards-main-cont">
                        <img src={Example1} alt="" className="example-1" />
                    <div className="info-card">
                        <h1>Ethically Made</h1>
                        <p>
                        I'm a paragraph. Click here to add your own text and edit me.
                        I’m a great place for you to tell a story and
                        let your users know a little more about you.</p>
                        <Link to={'/about'} className="btn-more"> <button className="btn-more" >Learn More</button></Link>
                        </div>
                        <img src={Example2} alt="" className="example-2"/>
                       
                </div>

            </div>
        </>
    )
}

export default Home;