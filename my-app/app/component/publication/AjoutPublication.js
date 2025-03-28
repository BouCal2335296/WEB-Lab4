function AjoutPublication() 
{
    const dateISO = new Date();
    const date = dateISO.toISOString().split('T')[0];
    const [titre, setTitre] = React.useState('');
    const [auteur, setAuteur] = React.useState('');
    const [contenu, setContenu] = React.useState('');

    function handleTitre(event) {
        setTitre(event.target.value);
    }

    function handleAuteur(event) {
        setAuteur(event.target.value);
    }

    function handleContenu(event) {
        setContenu(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(window.confirm('Confirmer publication blog ?'))
        {
            console.log('Submit');
            fetch('http://localhost:3000/publication', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ titre, auteur, contenu })
            }).then(response => {
            if (response.ok) {
                window.location.href = "principale.html";
            } else {
                alert("Erreur lors de la publication");
                $("#ajouter").fadeIn(200);
            }
            }).catch(error => {
                console.error('Erreur:', error);
                alert("Impossible de contacter le serveur");
                $("#ajouter").fadeIn(200);
            });
        }
    }

    return <>
        <div className="formulaire-ajout d-flex h-75 justify-content-center">
            <div className="col-10 col-md-9 mt-4 mt-md-3 d-flex justify-content-center align-items-center bgDarkLight glow-effect rounded-4">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="titre" className="lora-font text-white">Titre :</label><br/>
                    <input type="text" value={titre} id="titre" name="titre" className="rounded-3 bgDark text-white" placeholder="Insérer le titre" onChange={handleTitre}/><br/>

                    <label htmlFor="auteur" className="lora-font text-white">Auteur :</label><br/>
                    <input type="text" value={auteur} id="auteur" name="auteur" className="rounded-3 bgDark text-white" placeholder="Insérer l'auteur" onChange={handleAuteur}/><br/>

                    <label htmlFor="contenu" className="lora-font text-white">Contenu :</label><br/>
                    <textarea type="text" value={contenu} id="contenu" name="contenu" className="rounded-3 w-100 bgDark text-white" placeholder="Insérer le contenu" onChange={handleContenu}></textarea><br/>

                    <div className="d-flex justify-content-end">
                    <button type="submit" id="ajouter" className="btn mt-4 btn-primary rounded-3 bgBlue text-white lora-font">Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}