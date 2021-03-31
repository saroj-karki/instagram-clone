import "./App.css";
import Post from "./Post";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "astrogeek",
      caption: "getting into it",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
    {
      username: "elon",
      caption: "lets do it",
      imageUrl:
        "https://images.theconversation.com/files/10787/original/54954sbn-1337307547.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    },
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
