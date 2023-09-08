import Cards from "../components/cards/Cards"

export default function Home({characters, OnClose}){
    return(
        <div>
            <Cards characters={characters}
                onClose ={OnClose}/>
        </div>
    )

}