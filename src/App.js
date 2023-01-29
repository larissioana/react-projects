
import './styles.css';
import {useState,useEffect} from 'react';
import {FiSun} from 'react-icons/fi';
import {IoMoonSharp} from 'react-icons/io5';
//Components
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {Route,Routes} from 'react-router-dom';


function App() {
  const[toggle,setToggle]=useState(true);
  const[theme,setTheme]=useState('light-theme');
  
  const toggleBtn=()=>{
    setToggle(!toggle);
  };

  const toggleTheme=()=>{
   if(theme==='light-theme'){
    setTheme('dark-theme')
   }
   else{
    setTheme('light-theme')
   }
  }
  useEffect(()=>{
  document.documentElement.className=theme;
  },[theme]);

  return (
    <div className="App">
      <button onClick={()=>{toggleBtn();
       toggleTheme()}}
       className="toggle-btn">
      {toggle? <IoMoonSharp/> : <FiSun/>}
      </button>
      <Nav/>
      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/projects' element={<Portfolio/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
