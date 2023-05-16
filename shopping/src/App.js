
import React, { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import axios from 'axios';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './Pages/main/Main.js'
import './App.css';

function App() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    axios
      .get( 'http://cozshopping.codestates-seb.link/api/v1/products/')
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => console.log(error));

  }, []);
  return (
    <BrowserRouter>
    
    <Header />
   <Routes>
   <Route path="/" element={<Main />}></Route>
   </Routes>
   <Footer />
   
   </BrowserRouter>
);
}

export default App;
