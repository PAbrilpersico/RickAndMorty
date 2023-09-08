import Card from "../card/Card";
import style from './cards.module.css'

export default function Cards({characters, onClose}) {
  return (
    <div>
      {characters.map((character, index) => {
        return (
          <Card className ={style.tarjetas}
            key={index}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
            id = {character.id}
          />
        );
      })}
    </div>
  );
}