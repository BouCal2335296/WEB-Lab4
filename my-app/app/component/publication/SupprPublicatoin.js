export default function SupprPublication() {

    async function supprimerPublication(param) {
        //Server Action
        "use server";
        try {
            //On récupère les données du formulaire sous forme du tableau d'objets "param"
            const id =  param.get('id');
            const titre =  param.get('titre');
            const auteur = param.get('auteur');
            const contenu = param.get('contenu');
            //POST standard
            await fetch(`http://localhost:3000/publication/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
        } catch (error) {
            console.error(error);
            return Response.json({ message: 'Erreur serveur' }, { status: 500 });
        }
    }
    return (
        <div className="formulaire-ajout d-flex h-75 justify-content-center">
            <div className="col-10 col-md-9 mt-4 mt-md-3 d-flex flex-column justify-content-center align-items-center bgDarkLight glow-effect rounded-4">
                <h1 className="pb-5 lora-font text-white">Supprimer publication</h1>
                <form action={supprimerPublication}>
                    <label htmlFor="id" className="lora-font text-white">ID :</label><br/>
                    <input type="text" id="id" name="id" className="rounded-3 bgDark text-white" placeholder="Insérer l'id" /><br/>

                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn mt-4 btn-primary rounded-3 bgBlue text-white lora-font">Supprimer</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
