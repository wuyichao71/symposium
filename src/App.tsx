import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

// import Symposium from "./components/Symposium.tsx";

function App() {
  return (
    <>
      <Header />
      <div className="App-content">
        <Outlet />
        {/* <Symposium /> */}
      </div>
      <footer>
        <div>Copyright © 2025 All Rights Reserved.</div>
      </footer>
    </>
  );
}

export default App;
