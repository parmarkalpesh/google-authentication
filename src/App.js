import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log("Current User", user);
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated && <h2>Hello {user.name}</h2>}
        {isAuthenticated ? (
          <button
            onClick={(e) => logout()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px", // Space between icon and text
              padding: "10px 15px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              color: "#000",
            }}
          >
            <FiLogOut size={20} />
            Logout
          </button>
        ) : (
          <button
            onClick={(e) => loginWithRedirect()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 15px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              color: "#000",
            }}
          >
            <FcGoogle size={20} />
            login With Google
          </button>
        )}
        <footer>
          <p>
            &copy; All rights reserved | This template is made with{" "}
            <i className="icon-heart color-danger" aria-hidden="true"></i> by{" "}
            <a
              href="https://madhav-infotech.vercel.app/"
              target="_blank"
              style={{ color: "red" }}
            >
              MadhavInfotech.
            </a>
          </p>
        </footer>
      </header>
    </div>
  );
}

export default App;
