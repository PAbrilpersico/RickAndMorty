import './App.css';
import Nav from './components/nav/nav';
import {useState, useEffect} from 'react'
import React from 'react';
import { Route, Routes, useLocation, useNavigate,} from 'react-router-dom';
import Home from './Views/Home';
import Detail from './Views/Detail';
import About from './Views/About.view';
import Form from './components/Form/Form';
import Favorites  from './Views/Favorites';



function App() {
   
   const [characters, setCharacters] = useState([])
   const [access, setAcces] = useState(false)
   useEffect(() => {
    !access && navigate('/');
   }, [access]);
   
   const navigate = useNavigate();
   
   const EMAIL = ''
   const PASSWORD = ''
   const login=(userData)=>{
    if(userData.password === PASSWORD && userData.email === EMAIL){
      setAcces(true);
      navigate('/home')
    } 
   }
   

   const handleSearch = (characterID) => {
    fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.name) {
          const found = characters.some((element) => element.id === data.id); //some devuelve true o false
          if (!found) {
            setCharacters((characters) => [...characters, data]);
          } else {
            window.alert(`El personaje ${characterID} esta repetido!`);
          }
        } else {
          window.alert(`No se encontro el personaje ${characterID}`);
        }
      });
  };

    const OnClose = (id) => {
      setCharacters((prevState)=> prevState.filter((ch)=>ch.id !== +id))
    };
   
      return (

      <div className='App'>

         <Nav onSearch = {handleSearch}/>     
         <Routes>
          <Route path='/home' element= {<Home characters={characters}
          OnClose={OnClose}/>} /> 
          <Route path='/about' element= {<About/>}/>
          <Route path='/detail/:id' element= {<Detail/>} />
          <Route path='/' element={<Form login={login} />} />
          <Route path='/favorites' element={<Favorites/>} />
         </Routes>
         
      </div>
        
    
   );
}

export default App;
