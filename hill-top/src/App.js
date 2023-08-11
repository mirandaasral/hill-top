import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="grid-container">
        <div class="grid">
          <div class="grid-rectangle-left">
            <div class="header-container">
              <div class="About">
                <a href="">ABOUT</a>
              </div>
              <div class="Services">
                <a href="">SERVICES</a>
              </div>
              <div class="Work">
                <a href="">WORK</a>
              </div>
            </div>
            <div class="Logo">
              <img
                src="Hill_Top_Logo.png"
                alt="Hill Top Logo"
                class="responsive"
              ></img>
            </div>
          </div>
          <div class="grid-rectangle-right"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
