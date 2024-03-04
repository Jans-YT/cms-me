import './App.css';
import Login from './page/login';
import MainPage from './page/mainpage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        {/* <Route path='/*' element={<Notfound />}/> */}
        <Route path='/Homepage' element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
