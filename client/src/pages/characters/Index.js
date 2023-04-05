import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllCharacters } from "../../services/characterService"

function Index({ user }) {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function loadData() {
            const data = await getAllCharacters()
            setCharacters(data)
        }
        loadData()
    }, [])
    console.log(characters)
    return (
            <div>
               
                <h1>Marvel Characters</h1>
                <div id="characters">
            
                        {characters?.map((character, index) => 
                            <Link to={`/characters/${character._id}`} key={index}>
                                <div className="a-character">
                                    <img src={character.image} alt=""/>
                                    {character.subject}
                                </div>
                            </Link>
                        )}
            
                    {user && 
                        <Link to="/characters/new">
                            <button>NEW CHARACTER</button>
                        </Link>
                    }
    
                </div>
            </div>
    )
}

export default Index