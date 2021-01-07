import logo from "./logo.svg";
import imgSource from "./imageInSrc.jpg";
import "./App.css";
import "./Style.css";

function App() {
  let name = "Attia Ghazi Walid";
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">{name}</h1>

        <br />
        <img src={imgSource} alt="imageInSrc" />
        <br />
        <img src="/imageInPublic.jpg" alt="imageInPublic" />
      </div>
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
