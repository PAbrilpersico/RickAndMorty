import { Link, useLocation} from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";



export default function Nav({onSearch}) {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;}
    
  return(
    <div>
      <SearchBar onSearch={onSearch}/>
      <Link to = '/about'>
      <button >About</button>
      </Link>
      <Link to = '/home'>
      <button >Home</button>
      </Link>
      <Link to = '/favorites'>
      <button >Favorites</button>
      </Link>
     
     
    </div>
    
  
  ) 
}