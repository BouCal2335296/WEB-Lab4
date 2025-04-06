'use client'
import React from "react";
import Comment from "./Comment";

export default function CommentList({ comments }) {
    return (
        <>
            {comments.map(comment => (
                <Comment key={comment.id} commentaire={comment.contenu} />
            ))}
        </>
    );
}
