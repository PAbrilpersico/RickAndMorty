import { connect } from "react-redux"
import Card from "../components/card/Card"
import { filterCards, orderCards } from "../redux/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"

const Favorites =({myFavorites})=>{

  const [aux, setAux] = useState(false)

  const dispatch = useDispatch()

  const handleOrder=(e)=>{
    dispatch(orderCards(e.target.value))
    setAux(!aux)
  }
  const handleFilter =(e)=>{
    dispatch(filterCards (e.target.value ))
    setAux(!aux)
  }
 
return(
    <div>
      <select onChange={handleOrder} name="" id="">
              <option value="A">Ascendente</option>
              <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter} name="" id="">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">unknown</option>
            </select>
        {myFavorites.map((character, index) => {
        return ( 
          <Card 
            key={index}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            id = {character.id}
          /> 
        );
      })}
    </div>
)
}
const mapStateToProps = (state)=>{
    return{
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps, null)(Favorites)