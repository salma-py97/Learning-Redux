import {useState} from 'react'
const AddPost = ({onAdd}) => {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();

    // POST request
    onAdd({title, body})

    // clear form
    setTitle("")
    setBody("")
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title : </label>
          <input type="text" name="title" placeholder="Add Post..." value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <br />
        <div>
          <label>Body: </label>
          <textarea type="text" name="body" placeholder="Add Body..." value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit" style={{padding: "5px 30px", border: "0", background:"#333", color: "white", marginTop: "20px"}} >Add</button>
      </form>
    </div>
  )
}

export default AddPost
