import { useEffect, useState, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
// import { createCommentForPost, deleteCommentFromPost } from "../../services/commentService"
import { deleteCharacter, getCharacter } from "../../services/characterService"

function Show({ user }) {

    const [post, setPost] = useState({})

    const navigate = useNavigate()
    const params = useParams()
    const bodyRef = useRef()
    const detailsRef = useRef()

    useEffect(() => {
        async function loadData() {
            const data = await getCharacter(params.id)
            if (!data) navigate('/posts')
            setPost(data)
        }
        loadData()
    }, [params.id])

    // async function handleDeleteComment(comment) {
    //     await deleteCommentFromPost(comment._id, post._id)
    //     let updatedPost = { ...post }
    //     updatedPost.comments = updatedPost.comments.filter(c => c._id !== comment._id)
    //     setPost(updatedPost)
    // }

    async function handleDeletePost() {
        await characterPost(post._id)
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
                    <h2>{character.subject}</h2>
                    <h5 style={{ opacity: '.3'}}>Posted by {character.user} on {new Date(character.createdAt).toLocaleDateString()} at {new Date(character.createdAt).toLocaleTimeString()}</h5>
                    <div className='p-body'>{character.body}</div><br /><br />

                    {
                        post.comments?.length ?
                        <>
                            <div>Comments:</div>
                            <div>{post.comments.map((comment, i) => 
                                <div key={i} className="comm">
                                    <div>{comment.user}</div>
                                    <div>{comment.body}</div>
                                    {comment.user === user &&
                                        <>
                                            <button onClick={() => handleDeleteComment(comment)}>X</button>
                                            <Link to={`/posts/${post._id}/comments/${comment._id}`}><span>+</span></Link>
                                        </>
                                    }
                                </div>
                            )}</div>
                            <br/><br/>
                        </>
                        : ''
                    }
                    {user && 
                        <details ref={detailsRef}>
                            <summary style={{ opacity: '.5' }}>Leave a comment:</summary>
                            <form onSubmit={handleSubmit}>
                                <textarea ref={bodyRef} id="lc" cols="1" rows="1" />
                                <button>Comment</button>
                            </form>
                        </details>
                    }
                    
                    <div className="buttons">
                        {post.user === user &&
                            <>
                                <button onClick={handleDeletePost}>Delete</button>
                                <Link to={`/characters/${character._id}/edit`}>
                                    <button>Edit</button>
                                </Link>
                            </>
                        }
                        <Link to='/characters'>
                            <button>Back</button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Show