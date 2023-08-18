import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./templates/Header";
import { Serial } from "./pages/Serial";
import { Movie } from "./pages/Movie";
import { Persons } from "./pages/Person";
import { HomePage } from "./pages/HomePage";
import { SearchResoult } from "./templates/SearchResoults";
import Footer from "./templates/Footer";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="middle">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/movies" element={<Movie />} />
            <Route path="/serials" element={<Serial />} />
            <Route path="/persons" element={<Persons/>} />
            <Route path="/search/:id" element={<SearchResoult/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
