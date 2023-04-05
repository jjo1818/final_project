import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createCharacter } from "../../services/characterService";

function New({ user }) {

    let subjectRef = useRef()
    let bodyRef = useRef()
    let navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        let character = {
            subject: subjectRef.current.value,
            body: bodyRef.current.value,
            user
        }
        await createCharacter(character)
        navigate('/characters')
    }

    return ( 
        <div>
            <h1>New Character</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nme">Subject:</label><br />
                <input type="text" id="nme" ref={subjectRef} /><br /><br />

                <label htmlFor="clr">Body:</label><br />
                <textarea id="clr" cols="30" rows="10" ref={bodyRef} /><br /><br />

                <button>Submit</button>
            </form>
        </div>
     );
}

export default New;