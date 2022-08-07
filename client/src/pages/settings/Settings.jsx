import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
              <span className="settingsUpdateTitle">Update Your Account</span>
              <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                  <label>Profile Picture</label>
                  <div className="settingsPP">
                    <img 
                    src="https://1.bp.blogspot.com/-ku8CB0kbBHY/YSyM219ArSI/AAAAAAAAWak/4ZNpXfTHlkkO2j0qoDuOuCKkBI7QhkfnwCLcBGAsYHQ/s1041/girl-cartoon-cute-dp-images%2B%25281%2529.jpg" 
                    alt="" 
                    />
                    <label htmlFor="fileInput">
                       <i className=" settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                  </div>
                  <label>Username</label>
                  <input type="text" placeholder="Reika"/>
                  <label>Email</label>
                  <input type="email" placeholder="Reika@gmail.com"/>
                  <label>Password</label>
                  <input type="password"/>
                  <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
