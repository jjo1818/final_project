// import { useEffect, useState, useRef } from 'react'
// import { useParams, useNavigate, Link } from 'react-router-dom'
// import { getCharacter, updateCharacter } from '../../services/postService'

// function Edit() {

//     const [character, setCharacter] = useState({})

//     const navigate = useNavigate()
//     const params = useParams()

//     const bodyRef = useRef()
//     const subjectRef = useRef()

//     useEffect(() => {
//         getCharacter(params.id).then(data => setCharacter(data))
//     }, [params.id])

//     async function handleSubmit(e) {
//         e.preventDefault()
//         let updatedCharacter = {
//             subject: subjectRef.current.value,
//             body: bodyRef.current.value
//         }
//         await updateCharacter(character._id, updatedCharacter)
//         navigate(`/chracters/${character._id}`)
//     }

//     return ( 
//         <div>
//             <h1>Edit Ch</h1>
//             <div className='buttons' style={{ flexDirection: 'column' }}>
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="nme">Subject:</label><br />
//                     <input type="text" id="nme" ref={subjectRef} defaultValue={character.subject} /><br /><br />

//                     <label htmlFor="clr">Body:</label><br />
//                     <textarea ref={bodyRef} id="clr" cols="30" rows="10" defaultValue={character.body} /><br /><br />

//                     <button>Submit</button>
//                 </form>
//                 <Link to={`/characters/${character._id}`}>
//                     <button>Back</button>
//                 </Link>
                
//             </div>
//         </div>
//     );
// }

// export default Edit;