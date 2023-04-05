import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
// import { createCommentForPost, deleteCommentFromPost } from "../../services/commentService"
import { deleteCharacter, getCharacter } from "../../services/characterService"

function Show({ user }) {

    const [character, setCharacter] = useState({})

    const navigate = useNavigate()
    const params = useParams()
    // const bodyRef = useRef()
    // const detailsRef = useRef()

    useEffect(() => {
        async function loadData() {
            const data = await getCharacter(params.id)
            if (!data) navigate('/characters')
            setCharacter(data)
        }
        loadData()
    }, )

    // async function handleDeleteComment(comment) {
    //     await deleteCommentFromPost(comment._id, post._id)
    //     let updatedPost = { ...post }
    //     updatedPost.comments = updatedPost.comments.filter(c => c._id !== comment._id)
    //     setPost(updatedPost)
    // }

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
                        <img className="logo" src="marvel logo.png" alt="logo"/>

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


                </div>
            </div>
        </div>
    )
}

export default Show