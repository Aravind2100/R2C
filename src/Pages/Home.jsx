import ArrowRain from "../../components/ArrowRain";
import { Typewriter } from "react-simple-typewriter";
import code from "../assets/code.png"
import design from "../assets/design.png"
import graphic from "../assets/graphic.png"
import branding from "../assets/branding.png"
import digi from "../assets/digi.png"
import { useState, useEffect } from "react";
import cons from "../assets/consulting.png"
import serum1 from "../assets/serum1.jpg"
import mockup from "../assets/mockup.jpg"
import serumweb from "../assets/serumweb.png"
import puma from "../assets/puma.jpg"
import lite from "../assets/lite.png"
import codexloom from "../assets/codexloom.png"
import "./Home.css";


function Home() {

  const icons = [serum1, mockup, serumweb, puma, lite, codexloom];


  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
    createFallingHashes(e.clientX, e.clientY);
  };

  const createFallingHashes = (x, y) => {
    const hash = document.createElement("span");
    hash.textContent = "#";
    hash.classList.add("falling-hash");

    // Randomize the direction and distance of the fall
    const randomX = Math.random() * 100 - 50;  // Random X direction (left or right)
    const randomSpeed = Math.random() * 2 + 1; // Random speed for the fall
    const randomDuration = Math.random() * 1 + 0.5; // Random fall duration

    hash.style.left = `${x + randomX}px`;
    hash.style.top = `${y}px`;
    hash.style.animationDuration = `${randomDuration}s`;
    hash.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, 1)`;

    document.body.appendChild(hash);

    // Remove the element after animation ends
    setTimeout(() => {
      hash.remove();
    }, randomDuration * 1000); // Adjust the time to match animation duration
  };
  useEffect(() => {
    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  

  return (
    
    <div className="home-container">
      <ArrowRain count={20} />
      <ArrowRain count={10} />
      <ArrowRain count={20} />
   
      <div className="top-section">
        <div className="left-section">
          <h1 className="typing-title">
            <Typewriter
              words={["We are team R 2 C !"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
        
          <p className="content-left">
          
  Welcome to R2C, where <b>technology meets creativity.</b> We are a team of designers, developers, and marketers, united to help your brand thrive digitally. 
  At R2C, we craft customized, user-focused solutions that go beyond websites and designs to create impactful digital experiences. 
  We empower startups, small businesses, and enterprises to bring bold ideas to life, providing end-to-end digital services focused on quality, creativity, and authentic connections. 
  Our goal is to build long-lasting partnerships, ensuring your success in a fast-evolving digital world.
          </p>


        
            <button className="contact-button" onClick={() => window.location.href = "#contact"}>
              Contact Us
            </button>
        </div>

        <div className="right-section">
  <h2 className="section-title">Our Motive</h2>
  <p className="content-right">
    At R2C, our motive is to empower businesses with innovative digital solutions that drive success and create lasting impact. 
    We strive to bring together creativity and technology to craft experiences that are not only functional but also memorable. 
    Our commitment is to help our clients grow, evolve, and thrive in a fast-evolving digital landscape.
  </p>

  <h2 className="section-title">Quality of Service</h2>
  <p className="content-right">
    We take pride in delivering high-quality solutions that are customized to meet the unique needs of each client. 
    Our team ensures that every project is handled with precision and creativity, focusing on results that not only meet but exceed expectations. 
    With a blend of technology, design, and strategy, we ensure that every service we provide is both impactful and valuable.
  </p>
</div>


      </div>

      <div className="bottom-section">
      <h2 className="section-title">Our Services</h2>
      <ul className="service-list">
      
      <li>
  <img src={code} alt="code" className="service-image" /> <br />
  <strong>Custom Web Development</strong> – We build dynamic, high-performance websites and applications from the ground up, tailored to your unique business needs. Our solutions are scalable, secure, and built using the latest web technologies like React, Next.js, and Spring Boot.
</li>
<br />
<li>
  <img src={design} alt="design" className="service-image" /> <br />
  <strong>UI/UX Design</strong> – We create intuitive user interfaces and seamless user experiences that delight customers and increase engagement. From wireframes to high-fidelity designs, we ensure every interaction is smooth, purposeful, and user-focused.
</li>
<br />
<li>
  <img src={graphic} alt="graphic" className="service-image" /> <br />
  <strong>Graphical Designing</strong> – We offer impactful visual content including posters, social media graphics, flyers, mockups, and custom branding elements. Our designs are crafted to communicate your message with clarity and creativity.
</li>
<br />
<li>
  <img src={branding} alt="branding" className="service-image" /> <br />
  <strong>Brand Identity</strong> – From logo design to complete brand systems, we help you establish a compelling and consistent brand identity that resonates with your target audience. Our storytelling approach ensures your brand leaves a lasting impression.
</li>
<br />
<li>
  <img src={digi} alt="digi" className="service-image" /> <br />
  <strong>Digital Marketing</strong> – We drive traffic and convert leads through tailored SEO strategies, social media management, content marketing, and paid advertising campaigns. We focus on measurable results and long-term growth.
</li>
<br />
<li>
  <img src={cons} alt="consulting" className="service-image" /> <br />
  <strong>Consulting & Strategy</strong> – We partner with you to understand your goals and provide strategic insight across branding, technology, and digital transformation. Whether you're a startup or scaling enterprise, we guide your roadmap with clarity and expertise.
</li>

      </ul>
      </div>


      <div className="footer-section">
      <div className="scrolling-logos">
  {[...Array(30)].map((_, i) => (
    <img
      key={i}
      src={icons[i % icons.length]} // cycle through the icons
      alt={`logo-${i}`}
      className="scroll-logo"
    />
  ))}
   

  </div>
</div>

    </div>
  );
}

export default Home;
