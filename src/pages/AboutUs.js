import React from "react";
import "../App.css";
import "./css/AboutUs.css";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      <div className="aboutus-container">
        <div className="aboutus-image-container">
          <img src="/images/bottle.jpg" alt="gymwomen" />
        </div>
        <div className="aboutus-text-container">
          <h1 className="services">About Pulse Active</h1>
          <p>
            At PulseActive, we believe that every woman possesses an innate
            power - a pulse that beats with strength, determination, and endless
            possibilities. We are more than just a sportswear brand; we are a
            movement dedicated to empowering women through active living.
          </p>
          <p>
            Founded with a vision to inspire and support women in their fitness
            journeys, PulseActive stands at the intersection of style, comfort,
            and performance. We understand the unique challenges and triumphs
            that come with an active lifestyle, and we are here to celebrate
            every step, jump, and victory along the way.
          </p>
          <p>
            Our gym wear is more than just fabric and stitching; it's a
            testament to our commitment to quality.
          </p>
        </div>
      </div>
      <div className="aboutus-container">
        <div className="aboutus-text-container">
          <h1 className="services"> Community and Support</h1>
          <p>
            PulseActive isn't just a brand; it's a community of strong,
            inspiring women. We celebrate the diverse journeys of women from all
            walks of life, and we provide a platform for sharing stories, tips,
            and achievements. Our blog and social media channels are dedicated
            to fostering a sense of belonging and encouraging each other to
            reach new heights.
          </p>
          <p>
            Whether you're a seasoned athlete or just starting your fitness
            journey, PulseActive welcomes you. Join us in embracing active
            living, breaking barriers, and redefining standards. Together, we
            are a pulse, a rhythm, and a force to be reckoned with.
          </p>
          <p>
            Welcome to PulseActive, where your journey to a stronger, healthier,
            and more empowered you begins.
          </p>
        </div>
        <div className="aboutus-image-container">
          <img src="/images/gymphotoCopy.jpg" alt="gymwoman" />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default AboutUs;
