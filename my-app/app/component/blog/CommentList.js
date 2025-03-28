function CommentList({id}) {
    const [comments, setComment] = React.useState();
    
    React.useEffect(() => {
      fetch("http://localhost:3000/commentaire")
        .then(response => response.json())
        .then(data =>
            {
                let idBlog = id;
                let filtreCommentaire = data.filter(commentaire => commentaire.blogId == idBlog);
                setComment(filtreCommentaire);
            }       
        )
        .catch(error => console.error("Erreur de chargement des blogs :", error));
    }, []); // Se lance une seule fois au montage du composant
    
    // On sort avec un tableau de commentaire associé au blog 

    // Permet d'attendre pendant que sa charge
    if (!comments) return <p>Chargement...</p>;
    
    
    return (
        <>
        {comments.map(comment => (
                <Comment key={comment.id} commentaire={comment.contenu} />
            ))}
      </>
    );
  }