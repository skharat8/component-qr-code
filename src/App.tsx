import QRCode from "./QRCode";
import "./App.css";

function App() {
  return (
    <main>
      <QRCode>
        <h1 className="title">
          Improve your front-end skills by building projects
        </h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </QRCode>
    </main>
  );
}

export default App;
