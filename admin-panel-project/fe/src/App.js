import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Product from "./pages/Product";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <h1>Admin Panel Project</h1>

      <SideBar />
      <Routes>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
