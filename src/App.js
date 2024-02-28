import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Home from "./routes/Home";
import BookHoliday from "./routes/BookHoliday";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app__page">
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/book/" element={<BookHoliday />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
