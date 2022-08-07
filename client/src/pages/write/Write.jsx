import "./write.css"

export default function Write() {
  return (
    <div className="write">
          <img 
            className="writeImg"
            src="https://img.freepik.com/free-vector/geometric-floral-background-with-grain-texture_79603-1566.jpg?w=900&t=st=1659752245~exp=1659752845~hmac=23298b5f578a4a9a82c34b22edac521389080bd8f10dfc6feb7668ea05b5fc04" 
            alt="" 
          />
       <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:'none'} }/>
            <input type="text" id="fileInput" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story" type="text" className="writeInput writetext">

            </textarea>
        </div>
        <button className="writeSubmit">Publish</button>
       </form>
    </div>
  );
}
