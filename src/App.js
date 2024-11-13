import './App.css';
import { Routes, Route } from 'react-router-dom';

import HeaderTop from './Components/HeaderTop';
import Hero from './Components/Hero';
import ListTopics from './Components/ListTopics';
import Works from './Components/Works';
import Explore from './Components/Explore';
import Reviews from './Components/Reviews';
import Statistics from './Components/Statistics';
import Blog from './Components/Blog';
import Subscription from './Components/Subscription';
import Footer from './Components/Footer';
import TopArea from './Components/TopArea';

function App() {
  return (
    <div className="App">
      <h2>Welcome</h2>
      {/* <HeaderTop /> */}

      {/* <ListTopics /> */}



      {/* <Statistics /> */}
      {/* <Blog /> */}

      {/* <Footer /> */}
              <TopArea/>   

      <Routes>

        <Route path="/home" element={<Hero />} />
        <Route path="/HOWITWORKS" element={<Works />} />
        <Route path="/EXPLORE" element={<Explore />} />
        <Route path="/REVIEW" element={<Reviews />} />
        <Route path="/CONTACT" element={<Subscription />} />
      </Routes>
    </div>
  );
}

export default App;
