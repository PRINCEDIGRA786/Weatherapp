import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Detail from './Components/Detail';
import About from "./Components/About";
import Contact from "./Components/Contact";
import News from "./Components/News";
import GetInTouch from "./Components/Getintouch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />}>
        </Route>
        <Route path='/detailpage' element={<Detail />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<News />} />
        <Route path='/getintouch' element={<GetInTouch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
