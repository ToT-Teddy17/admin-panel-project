import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Product from "./pages/Product";
import SideBar from "./components/SideBar";
import UsersAdd from "./pages/UsersAdd";
import Create from "./pages/Create";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/usersAdd" element={<UsersAdd />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </div>
  );
}

export default App;
