import "./Home.css";
import Nav from "../Navbar/Nav";
import Model1 from '../assets/model-girl.jpg';
import Model2 from "../assets/model-men.jpg";
import Model3 from "../assets/card-model1.jpg";
import Model4 from "../assets/card-model2.jpg";
import Model5 from "../assets/card-model3.jpg";
import Example1 from "../assets/show-mag.jpg";
import Example2 from "../assets/example2.jpg";
import Carousel from "../assets/car-img.jpg";
import Carousel2 from "../assets/car-img2.jpg";
import Carousel3 from "../assets/car-img3.jpg";
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
                    <img src={Example2} alt="" className="example-2" />
                </div>

                <div className="cont-models">

                    <h1 className="slide-right">Yeni Sezon Məhsullarına 50% Endirim</h1>

                    <div className="cards-value-cont">
                        <div className="card-model">
                            <img src={Model3} alt="" className="img-mod" />
                            <h1 className="textering">Women</h1>
                        </div>

                        <div className="card-model">
                            <img src={Model5} alt="" className="img-mod" />
                            <h1 className="textering">Couple</h1>
                        </div>

                        <div className="card-model">
                            <img src={Model4} alt="" className="img-mod" />
                            <h1 className="textering">Men</h1>
                        </div>

                    </div>

                </div>


                <div id="carouselExampleCaptions" className="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Carousel} id="car-img" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="car-txt-head">First slide label</h5>
        <p className="car-txt">Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Carousel3} id="car-img" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="car-txt-head">Second slide label</h5>
        <p className="car-txt">Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Carousel2} id="car-img" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="car-txt-head">Third slide label</h5>
        <p className="car-txt">Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


            </div>
        </>
    )
}

export default Home;