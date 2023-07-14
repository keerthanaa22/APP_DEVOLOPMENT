import React from "react";
import "./Posts.css";
import first from "./first.jpg"
import PostItem from "./PostItem";
export default function Posts(){
    const posts = [
        {
            upvote :  547,
            Image : <img src={first} />,
            title : "Quetions about new wallet",
            user: "theindependentonline",
            subapp: "politics",
            comment_count: 284, 

        }
    ]
    return(
        <div className="posts">
            {posts.map(post => (
                <PostItem post={post} />
            ))}
        </div>
    )
}