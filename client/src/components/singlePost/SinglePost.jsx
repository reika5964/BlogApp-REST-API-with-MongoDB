import "./singlepost.css"
export default function singlePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          <img src="https://img.freepik.com/free-photo/medium-shot-smiley-woman-wearing-headphones_52683-88576.jpg?w=900&t=st=1659706288~exp=1659706888~hmac=618aad5a91a071f84f9714fb12644358031d604df807ad32bf22b70c83700c20" 
          alt="" 
          className="singlePostImg" 
          />
          <h1 className="singlePostTitle">
            Lorem consectetur adipisicing  quod?
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">Author : <b>Reika</b></span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque adipisci officia ex eos ipsam! Aliquid, alias suscipit quaerat, commodi quibusdam dolore assumenda totam saepe exercitationem quisquam veritatis nihil fugit facere.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, molestias nisi harum possimus quisquam cupiditate reprehenderit eveniet quos animi rerum deleniti minima obcaecati. Deleniti nemo eos aliquam explicabo recusandae vitae.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quidem cupiditate unde, tempore architecto dolorum illum beatae animi vitae! Eligendi possimus nemo fugit enim voluptate beatae ullam laudantium magni soluta.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga mollitia incidunt amet sunt illo a omnis, laboriosam quos corporis veritatis laborum veniam ipsa cumque eveniet accusantium in velit autem est!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda porro atque nihil eos dolores, molestiae excepturi. Ipsum ducimus neque, eos dolore maxime ullam facilis, tenetur blanditiis quasi similique exercitationem.
          </p>
        </div>
    </div>
  )
}
