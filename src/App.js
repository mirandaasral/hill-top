import logo from "./hill_top_logo_image.svg";
// import quote from "./hill_top_quote.svg";
import "./App.css";
import work from "./work-1.jpeg";
import art from "./hill_top_art.svg";
import circle from "./hill_top_circle.svg";
import arrow from "./scroll_arrow.svg";

function App() {
  function onArrowClick() {
    const appEl = document.getElementById("App");
    appEl.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  return (
    <div className="App" id="App">
      {/* <div class="grid-container"> */}
      <div className="header-container">
        {/* <div className="About">
          <a href="">ABOUT</a>
        </div>
        <div className="Services">
          <a href="">SERVICES</a>
        </div> */}
      </div>
      <div className="Logo">
        <img src={logo} alt="Hill Top Logo Image" className="responsive"></img>
      </div>
      <div className="Arrow">
        <img
          src={arrow}
          alt="Scroll Arrow"
          className="responsive"
          onClick={onArrowClick}
        ></img>
      </div>
      <div className="grid" id="bottom">
        <div className="grid-rectangle-left">
          <div className="Art">
            <img src={art} alt="Art" className="responsive"></img>
          </div>
          <div className="Circle">
            <img src={circle} alt="Circle" className="responsive"></img>
          </div>
          <div className="Contact">
            <h1>CONTACT</h1>
            <li>Daniel Brociner</li>
            <li>hilltoplawncare11@gmail.com</li>
            <li>908-358-2227</li>
          </div>
        </div>
        <div className="grid-rectangle-right">
          <div className="About-Paragraph">
            <h1>ABOUT</h1>
            <p>
              Hill Top Lawn Care is an owner-operated business offering services
              tailored to your needs. We’re based in Warren, NJ and provide
              services to customers in Warren, Far Hills, Watchung, Gilette,
              Long Hill, and Basking Ridge.{" "}
              <i>
                Our mission is to provide homeowners with lawn care they
                deserve.
              </i>
            </p>
            <h1> SERVICES</h1>
            <li>Lawn Moving</li>
            <li>Mulch</li>
            <li>Bush and Shrub Removal and Trimming</li>
            <li>Tree Trimming</li>
            <br></br>
            <p>
              CLICK{" "}
              <a href="mailto: hilltoplawncare11@gmail.com">
                <b>HERE</b>
              </a>{" "}
              FOR A QUOTE
            </p>
          </div>

          <div className="mobile-footer">
            <div className="Circle-2">
              <img src={circle} alt="Circle"></img>
            </div>
            <div className="contact-mobile">
              <h2>CONTACT</h2>
              <li>Daniel Brociner</li>
              <li>hilltoplawncare11@gmail.com</li>
              <li>908-358-2227</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
