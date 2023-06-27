import "./styles.css";
import { useState } from "react";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState("/");

  const renderComponent = () => {
    if (currentRoute === "/") return <Home />;
    if (currentRoute === "/about") return <About />;
    if (currentRoute === "/contact") return <Contact />;
  };
  const handleNavigation = (route) => {
    setCurrentRoute(route);
  };
  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleNavigation("/")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/about")}>About</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/contact")}>
              Contact
            </button>
          </li>
        </ul>
        {renderComponent()}
        {/* <p>Current Route: {currentRoute}</p> */}
      </nav>
    </div>
  );
}
