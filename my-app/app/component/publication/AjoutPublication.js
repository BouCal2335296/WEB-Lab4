export default function AjoutPublication() {

    async function ajouterPublication(param) {
        //Server Action
        "use server";
        try {
            //On récupère les données du formulaire sous forme du tableau d'objets "param"
            const titre =  param.get('titre');
            const auteur = param.get('auteur');
            const contenu = param.get('contenu');
            //POST standard
            await fetch('http://localhost:3000/publication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // On envoie les données au backend -- !!! sous forme de tableau d'objets
                body: JSON.stringify({titre, auteur, contenu}),
            });
    
        } catch (error) {
            console.error(error);
            return Response.json({ message: 'Erreur serveur' }, { status: 500 });
        }
    }
    return (
        <div className="formulaire-ajout d-flex h-75 justify-content-center">
            <div className="col-10 col-md-9 mt-4 mt-md-3 d-flex flex-column justify-content-center align-items-center bgDarkLight glow-effect rounded-4">
                <h1 className="pb-5 lora-font text-white">Ajout publication</h1>
                <form action={ajouterPublication}>
                    <label htmlFor="titre" className="lora-font text-white">Titre :</label><br/>
                    <input type="text" id="titre" name="titre" className="rounded-3 bgDark text-white" placeholder="Insérer le titre" /><br/>

                    <label htmlFor="auteur" className="lora-font text-white">Auteur :</label><br/>
                    <input type="text" id="auteur" name="auteur" className="rounded-3 bgDark text-white" placeholder="Insérer l'auteur" /><br/>

                    <label htmlFor="contenu" className="lora-font text-white">Contenu :</label><br/>
                    <textarea id="contenu" name="contenu" className="rounded-3 w-100 bgDark text-white" placeholder="Insérer le contenu"></textarea><br/>

                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn mt-4 btn-primary rounded-3 bgBlue text-white lora-font">Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
