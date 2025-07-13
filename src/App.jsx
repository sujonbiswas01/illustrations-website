import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Slider from './components/Slider';
import Video from './components/Video';
import Time from './components/Time';
import Bomarea from './components/Bomarea';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Presentation/>
      <Slider/>
      <Video/>
      <Time/>
      <Bomarea/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
