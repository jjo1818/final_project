import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getCharacter, updateCharacter } from '../../services/characterService'

function Edit() {

    const [character, setCharacter] = useState({})

    const navigate = useNavigate()
    const params = useParams()

    const nameRef = useRef()
    const biographyRef = useRef()
    const imageRef = useRef()

    useEffect(() => {
        getCharacter(params.id).then(data => setCharacter(data))
    }, [params.id])

    async function handleSubmit(e) {
        e.preventDefault()
        let updatedCharacter = {
            name: nameRef.current.value,
            biography: biographyRef.current.value,
            image: imageRef.current.value,
        }
        await updateCharacter(character._id, updatedCharacter)
        navigate(`/chracters/${character._id}`)
    }

    return ( 
        <div>
            <h1>Edit Character</h1>
            <div className='buttons' style={{ flexDirection: 'column' }}>
                <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="nme">Character:</label><br />
                    <input type="text" id="nme" ref={subjectRef} defaultValue={character.subject} /><br /><br /> */}
                    <label htmlFor="nme">name:</label><br />
                <input type="text" id="nme" ref={nameRef} defaultValue={character.subject}/><br /><br />
                <label htmlFor="bio">biography:</label><br />
                <input type="text" id="bio" ref={biographyRef} defaultValue={character.subject}/><br /><br />
                <label htmlFor="img">image:</label><br />
                <input type="text" id="img" ref={imageRef} defaultValue={character.subject}/><br /><br />

                    {/* <label htmlFor="clr">Body:</label><br />
                    <textarea ref={bodyRef} id="clr" cols="30" rows="10" defaultValue={character.body} /><br /><br /> */}

                    <button>Submit</button>
                </form>
                <Link to={`/characters/${character._id}`}>
                    <button>Back</button>
                </Link>
                
            </div>
        </div>
    );
}

export default Edit;