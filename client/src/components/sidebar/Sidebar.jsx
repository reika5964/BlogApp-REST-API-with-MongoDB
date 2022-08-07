import "./sidebar.css"

export default function Sidebar() {
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
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">travel</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">food</li>
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
