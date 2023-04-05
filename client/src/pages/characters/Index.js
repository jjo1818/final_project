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
                {/* <meta name=“viewport” content=“width=device-width, initial-scale=1">
<link href=“https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css” rel=“stylesheet” integrity=“sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD” crossorigin=“anonymous”>
<script src=“https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js” integrity=“sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN” crossorigin=“anonymous”></script> */}
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