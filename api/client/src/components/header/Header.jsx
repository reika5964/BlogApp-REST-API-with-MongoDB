import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img 
          className="headerImg"
          src="https://cdn.pixabay.com/photo/2015/10/04/06/52/pathway-970705_960_720.jpg"
          alt="" />
    </div>
  )
}
