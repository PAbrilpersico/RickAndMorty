import style from './searchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   const[id, setId]= useState("")

   const handleChange= (event)=>{
      setId(event.target.value)
   }


   return (
      <div className={style.navbar}>
         <input value={id} onChange={handleChange} className={style.buscador} type='search' />
         <button className={style.boton} onClick={()=> {onSearch(id)}}>Agregar</button>
         
      </div>
   );
}
