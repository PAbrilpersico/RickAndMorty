
import style from "./card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

function Card( props ) {

   const {name, species, gender, image, onClose, id, addFav, removeFav, myFavorites } = props

   const[isFav, setIsFav]= useState(false)

   const location = useLocation();

   const handleFavorite =()=>{
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
        <div className={style.tarjeta}>
          {isFav ? (<button onClick={handleFavorite}>🧡</button>) : (<button onClick={handleFavorite}>🤍</button>)}
       
         <div className={style.carta}>
            <img className={style.image} src={image} alt='' />
            {location.pathname !== "/favorites" && (<button className={style.boton} onClick={() => onClose(id)} >X</button> )}
            <Link to={`/detail/${id}`}>
            <h2 className={style.name}>{name} </h2>
            </Link>
            
         </div>
            <div className={style.info}>
              <h2 className={style.specie}>{species}</h2>
              <h2 className={style.gender}>{gender}</h2>
            </div>
      </div>
       
   );
}
const mapDispatchToProps=(dispatch)=>{
   return{
      addFav:(character) =>{
         dispatch(addFav(character))
      },
      removeFav:(id) =>{
         dispatch(removeFav(id))
      }
   }   
}

const mapStateToProps = (state) =>{ //hacemos una copia del estado global, lo mandamos como props al componente 
   return{
      myFavorites: state.myFavorites
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)
