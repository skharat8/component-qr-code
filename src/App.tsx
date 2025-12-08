import QRCodeImage from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <img src={QRCodeImage} />
        <h1 className="title">
          Improve your front-end skills by building projects
        </h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </>
  );
}

export default App;
