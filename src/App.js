import AddPost from './components/AddPost'
import './App.css';
import GetPosts from './components/GetPosts'

import { Provider } from 'react-redux'

import store from './store'

function App() {


  const addPost = async (post) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body : JSON.stringify(post)
    })
    const data = await res.json()
    console.log(data)
  }


  return (
    <Provider store={store} >
      <div className="App">
        <h1>POSTS</h1>
        <AddPost onAdd={addPost} />
        <br />
        <hr />
        <GetPosts />
      </div>
    </Provider>
  );
}

export default App;
