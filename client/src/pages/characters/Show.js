import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
// import { createCommentForPost, deleteCommentFromPost } from "../../services/commentService"
import { deleteCharacter, getCharacter } from "../../services/characterService"
import { updateUser } from "../../services/userService"

function Show({ user }) {
    console.log(user)
    const [character, setCharacter] = useState({})
    const [newUser, setNewUser] = useState({user})


    const navigate = useNavigate()
    const params = useParams()
    // const favoriteCharacterRef = useRef()
    // const detailsRef = useRef()

    useEffect(() => {
        async function loadData() {
            const data = await getCharacter(params.id)
            if (!data) navigate('/characters')
            setCharacter(data)
        }
        loadData()
    }, )

    async function handleSubmitUser(e) {
        e.preventDefault()
        let updatedUser = {
            favoriteCharacter: character._id
        }
        await updateUser(newUser._id, updatedUser)
        navigate(`/users/${newUser._id}`)

    }

    async function handleDeleteCharacter() {
        await deleteCharacter(character._id)
        navigate('/characters')
    }

    // async function handleSubmit(e) {
    //     e.preventDefault()

    //     let comment = {
    //         body: bodyRef.current.value,
    //         user
    //     }

    //     const newComment = await createCommentForPost(comment, post._id)
    //     let updatedPost = { ...post }
    //     updatedPost.comments.push(newComment)
    //     setPost(updatedPost)
    //     bodyRef.current.value = ''
    //     detailsRef.current.open = false
    // }

    return (
        <div>
            
            <div className="a-post">
                <h2>{character.name}</h2>
                <img src={character.image} alt="" />
                <p>{character.biography}</p>
                <div className="buttons">
                    
                    <button onClick={handleDeleteCharacter}>Delete</button>
                    <Link to={`/characters/${character._id}/edit`}>
                        <button>Edit</button>
                    </Link>
                    <Link to='/characters'>
                        <button>Back</button>
                    </Link>
                    <button onClick={handleSubmitUser}>Add to Favorites</button>


                </div>
            </div>
        </div>
    )
}

export default Show