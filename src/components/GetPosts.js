import { useEffect, useState } from 'react'

const GetPosts = () => {
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      setPosts(data)
      console.log(posts)
    }
    fetchPosts()
  }, [])

  const [posts, setPosts] = useState([])

  const post = posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )) ;

  return (
    <div>
      <>{post}</>     
    </div>
  )
}

export default GetPosts
