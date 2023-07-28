import "./Post.css";
import React from "react";
import { MoreVert } from "@material-ui/icons";
import { FavoriteOutlined } from "@material-ui/icons";
import {Bookmark} from "@material-ui/icons";


import { Users } from "../../dummyData";
import { useState } from "react";
import one from "./like.jpg"
import { Link } from "react-router-dom";
import { AlignHorizontalLeft } from "@mui/icons-material";

export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)
  const [show,setShow] =useState(false)

  const ShowName =()=>{
    if(show==true){
      setShow(false)
    }else{
      setShow(true)
    }
  }

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={one} onClick={likeHandler} alt="" />
            {/* <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" /> */}
            <span className="postLikeCounter">{like} people like it</span>
          </div>



          {/* <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span> */}
            {/* <span className="topbarIconBadge">1</span> */}



          <div className="postBottomRight">
            <span className="postCommentText" onClick={ShowName}>{post.comment} comments</span>{
              
              show && (
                <ul classname="commentsection">
                  <br></br>
                  <p >This is such a beautiful picture</p>
                </ul>
              )
            }
          </div>

            <div className="postBottomRight">
            <Link to="/online"><Bookmark className="sidebarIcon" style={{fontSize:"25px"}}/>
            <span className="sidebarListItemText"></span></Link>
            </div>
        </div>
      </div>
    </div>
  );
}