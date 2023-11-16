import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Detail from './Components/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />}>
        </Route>
        <Route path='/detailpage' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
