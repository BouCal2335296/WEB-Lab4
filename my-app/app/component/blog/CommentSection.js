'use client'
import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

export default function CommentSection({ id }) {
    const [comments, setComments] = useState([]);

    const fetchComments = () => {
        fetch('/api/commentaire')
            .then(response => response.json())
            .then(data => {
                const filtreCommentaire = data.filter(commentaire => commentaire.blogId == id);
                setComments(filtreCommentaire);
            })
            .catch(error => console.error("Erreur de chargement des commentaires :", error));
    };

    useEffect(() => {
        fetchComments();
    }, [id]);

    return (
        <>
            <AddComment id={id} onCommentAdded={fetchComments} />
            <CommentList comments={comments} />
        </>
    );
}
