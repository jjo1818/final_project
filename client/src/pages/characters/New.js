import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createCharacter } from "../../services/characterService";

function New({ user }) {

    let nameRef = useRef()
    let biographyRef = useRef()
    let imageRef = useRef()

    let navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        let character = {
            name: nameRef.current.value,
            biography: biographyRef.current.value,
            image: imageRef.current.value,
            
        }
        await createCharacter(character)
        navigate('/characters')
    }

    return ( 
        <div>
            <h1>New Character</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nme">name:</label><br />
                <input type="text" id="nme" ref={nameRef} /><br /><br />
                <label htmlFor="bio">biography:</label><br />
                <input type="text" id="bio" ref={biographyRef} /><br /><br />
                <label htmlFor="img">image:</label><br />
                <input type="text" id="img" ref={imageRef} /><br /><br />
                {/* <label htmlFor="clr">Body:</label><br />
                <textarea id="clr" cols="30" rows="10" ref={bodyRef} /><br /><br /> */}

                <button>Submit</button>
            </form>
        </div>
     );
}

export default New;