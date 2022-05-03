import './App.css';
import { Route,Routes} from "react-router-dom";
import ContactUs from './Component/Pages/ContactUs';
import Header from './Component/Header';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
    </>
  );
}

export default App;
