import axios from "axios";
import { useState,useEffect } from "react"
import "./sidebar.css"
import { Link } from "react-router-dom";
import {axiosInstance} from "../../config"


export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data)
    }
    getCats()
  }, []);
    
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://cdn.pixabay.com/photo/2017/02/26/02/37/girl-2099359_960_720.jpg" alt="" />
        <p> สวัสดีทุกคน
            เราก็เป็นมนุษย์เหมื่อนกับคนอื่นนะแหละ
             เรามาอย่างเป็นมิตร
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}  
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
             <i className=" sidebarIcon fa-brands fa-square-facebook"></i>
             <i className=" sidebarIcon fa-brands fa-square-twitter"></i>
             <i className=" sidebarIcon fa-brands fa-square-pinterest"></i>
             <i className=" sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      
      </div>
    </div>
  )
}
