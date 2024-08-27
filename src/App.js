
import Header from "./Components/Header/Header";
import Contact from "./Components/Contacts/Contact";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import Blog from "./Components/Blog/Blog";
import Mode from "./Components/Mode/Mode";
import Content from "./Components/Content/Content";


import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="split">
          <div className="left"></div>
          <div className="right">
            {/* <Routes>
                            buffer test
              <Route path="/" element={<Portfolio />}></Route>  
            </Routes> */}

            <Routes>
              <Route path="/" element={<Content />}></Route>
            </Routes>
            <Routes>
              <Route path="/home" element={<Content />}></Route>
            </Routes>
            <Routes>
              <Route path="/about" element={<About />}></Route>
            </Routes>
            <Routes>
              <Route path="/resume" element={<Resume />}></Route>
            </Routes>
            <Routes>
              <Route path="/portfolio" element={<Portfolio />}></Route>
            </Routes>
            <Routes>
              <Route path="/contacts" element={<Contact />}></Route>
            </Routes>
            <Routes>
              <Route path="/blog" element={<Blog />}></Route>
            </Routes>
            <Routes>
              <Route path="/mode" element={<Mode />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
