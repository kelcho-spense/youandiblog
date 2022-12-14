import {useEffect, useState} from "react"
import Header from "../../Components/header/Header";
import Sidebar from "../../Components/sidebar/Sidebar";
import Posts from "../../Components/posts/Posts";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      if (res.data && res.data !== null){
          setPosts(res.data)
      }
    }
    fetchPosts();
  },[search])
  return (
    <>
     <Header />
    <div className="home"> 
          <Posts posts={posts} />
          <Sidebar /> 
    </div>
    </>
  )
}

export default Home