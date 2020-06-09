import React from "react"
import "./layout.css"

const Navbar = () => (
  <nav className="section group">
    <div className="col span_1_of_5">
      <img className="logo" src={require("../images/logo.jpg")} alt="logo.jpg" />
    </div>
    <ul className="col span_4_of_5 main-nav">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#" className="icon solid fa-angle-down">
          OUR DOGS
            </a>
        {/* <ul>
              <li>
                <a href="males.html">MALES</a>
              </li>
              <li>
                <a href="females.html">FEMALES</a>
              </li>
            </ul> */}
      </li>
      <li>
        <a href="#">NEWS</a>
        {/* <ul>
              <li>
                <a href="males.html">GENERAL</a>
              </li>
              <li>
                <a href="females.html">UPCOMING LITTERS</a>
              </li>
            </ul> */}
      </li>
      <li className="nav-options">
        <a href="#">ROTTWEILER INFORMATION</a>
        <div className="nav-sub-options">
        {/* <ul>
              <li> */}
                <a href="males.html"><span>BREED STANDARDS</span></a>
              {/* </li>
              <li> */}
                <a href="females.html">JLPP</a>
              {/* </li>
              <li> */}
                <a href="females.html">DIET</a>
              {/* </li>
            </ul> */}
            </div>
      </li>
      <li>
        <a href="testimonies.html">TESTIMONIES</a>
      </li>
      <li>
        <a href="forSale.html">FOR SALE</a>
      </li>
      <li>
        <a href="contact.html" id="button">
          CONTACT US
        </a>
      </li>
    </ul>
  </nav>
)

export default Navbar