import ArrowRain from "../../components/ArrowRain";
import { Typewriter } from "react-simple-typewriter";
import code from "../assets/code.png"
import design from "../assets/design.png"
import "./Home.css";


function Home() {
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
      <img src={code} alt="code" className="service-image" />
  <li>Custom Web Development – Tailored websites using modern frameworks and best practices.</li>
  <br />
  <img src={design} alt="design" className="service-image" />
  <li>UI/UX Design – Intuitive and engaging design solutions for web and mobile platforms.</li>
  <li>Graphical Designing – Creative poster designs, branding assets, product mockups, and social media creatives.</li>
  <li>Brand Identity – Logo design, brand strategy, and visual storytelling to define your brand.</li>
  <li>Digital Marketing – SEO, social media, and performance marketing to grow your online presence.</li>
  <li>Consulting & Strategy – Expert guidance to turn your vision into reality and scale effectively.</li>
</ul>
</div>


      <div className="footer-section">
        <p>This is footer section (Div 4)</p>
      </div>
    </div>
  );
}

export default Home;
