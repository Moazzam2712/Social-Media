import "./App.css";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

import PostListProvider from "./store/ItemStore";

function App() {
  return (
    <PostListProvider>
      <div className="app-container ">
        <Sidebar />
        <div className="content">
          <Header />
         <Outlet/>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
