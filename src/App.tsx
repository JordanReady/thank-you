import HeroImage from "./assets/hero-logo-3.png";
import "./App.css";

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
                  <span style={{ "--i": "1" }}>T</span>
                  <span style={{ "--i": "2" }}>h</span>
                  <span style={{ "--i": "3" }}>a</span>
                  <span style={{ "--i": "4" }}>n</span>
                  <span style={{ "--i": "5" }}>k</span>
                  <span style={{ "--i": "6" }}> </span>
                  <span style={{ "--i": "7" }}>Y</span>
                  <span style={{ "--i": "8" }}>o</span>
                  <span style={{ "--i": "9" }}>u</span>
                  <span style={{ "--i": "10" }}>!</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
