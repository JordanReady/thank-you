import HeroImage from "./assets/hero-logo-3.png";
import "./App.css";

interface LetterStyles extends React.CSSProperties {
  "--i": string;
}

function App() {
  return (
    <>
      <div className="App">
        <div className="section">
          <div className="container contact-container">
            {/* <div className="triangle-container">
              <div id="contact-triangle-bottomright"></div>
              <div id="contact-triangle-bottomright-accent"></div>
              <div id="contact-triangle-topright-accent"></div>
              <div id="contact-triangle-topright"></div>
              <div id="contact-triangle-topleft"></div>
              <div id="contact-triangle-topleft-accent"></div>
            </div> */}
            <div className="contact-inner-container">
              <div className="thanks-box">
                <h1 className="contact-title">
                  <span style={{ "--i": "1" } as LetterStyles}>T</span>
                  <span style={{ "--i": "2" } as LetterStyles}>h</span>
                  <span style={{ "--i": "3" } as LetterStyles}>a</span>
                  <span style={{ "--i": "4" } as LetterStyles}>n</span>
                  <span style={{ "--i": "5" } as LetterStyles}>k</span>
                  <span style={{ "--i": "6" } as LetterStyles}> </span>
                  <span style={{ "--i": "7" } as LetterStyles}>Y</span>
                  <span style={{ "--i": "8" } as LetterStyles}>o</span>
                  <span style={{ "--i": "9" } as LetterStyles}>u</span>
                  <span style={{ "--i": "10" } as LetterStyles}>!</span>
                </h1>
                <p className="contact-subtitle">
                  Your message has been sent! I will get back to you as soon as
                  possible!
                </p>
                <div className="hero-img">
                  <img
                    className="thanks-img img-fluid"
                    src={HeroImage}
                    alt="hero"
                  />
                </div>
                <button>Back to Site</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
