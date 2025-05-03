import ArrowRain from "../../components/ArrowRain";
import { Typewriter } from "react-simple-typewriter";
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
        </div>

        <div className="right-section">
          <p>This is the right content area</p>
        </div>
      </div>

      <div className="bottom-section">
        <p>This is bottom section (Div 3)</p>
      </div>

      <div className="footer-section">
        <p>This is footer section (Div 4)</p>
      </div>
    </div>
  );
}

export default Home;
