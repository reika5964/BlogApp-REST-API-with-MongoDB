import "./post.css"

export default function Post() {
  return (
    <div className="post">
       <img 
        className="postImg"
        src="https://cdn.pixabay.com/photo/2016/10/21/09/25/rocks-1757593_960_720.jpg" 
        alt="" 
       />
       <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet rum  
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore optio, blanditiis in omnis error adipisci perferendis. Hic iure sequi nulla adipisci quos, eaque ratione neque, aperiam illo, dolore sint quis!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore optio, blanditiis in omnis error adipisci perferendis. Hic iure sequi nulla adipisci quos, eaque ratione neque, aperiam illo, dolore sint quis!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore optio, blanditiis in omnis error adipisci perferendis. Hic iure sequi nulla adipisci quos, eaque ratione neque, aperiam illo, dolore sint quis!</p>
       </div>
    </div>
  )
}
