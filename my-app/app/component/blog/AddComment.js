'use client';
import React from "react";

// onCommentAdded = fonction fourni par le parent, elle appel le fetch pour afficher les commentaires
export default function AddComment({ id, onCommentAdded }) {
    const dateISO = new Date();
    const date = dateISO.toISOString().split('T')[0];
    const blogId = id;
    const [contenu, setContenu] = React.useState(''); //Permet de stocker le texte dans le textarea

    //Vien récupérer ce qui ce trouve dans le textarea à chaque qu'il est modifier
    function handleName(event) {
        setContenu(event.target.value);
    }

    //Réagi au submit du formulaire et post le commentaire et vide le textarea
    function handleSubmit(event) {
        event.preventDefault();
        fetch('/api/commentaire', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ blogId, date, contenu })
        }).then(() => {
            setContenu(''); //Permet de vider le textarea
            onCommentAdded(); 
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <h4 className="pt-3 lora-font text-white">Commentaires</h4>
            </div>
            <div className="row">
                <textarea className="form-control" value={contenu} onChange={handleName} rows="4"></textarea>
            </div>
            <div className="row d-flex justify-content-end pt-3">
                <button type="submit" className="btn btn-primary btn-submit-blog">Envoyer</button>
            </div>
        </form>
    );
}
