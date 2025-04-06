"use client"
import BlogDetails from "./BlogDetails";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import CommentSection from "./CommentSection";

export default function Blog({id})
{
    return <>
    <div className="container">
        <BlogDetails id={id} />
        <CommentSection id={id}/>
    </div>
    </>
}