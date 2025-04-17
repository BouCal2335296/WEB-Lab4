'use client';

import { useState } from "react";
import db from "../../lib/localbase";
import { modifierPublication } from "../../action/publication";

export default function ModifPublication() {

    async function handleSubmit(formData) {
        const result = await modifierPublication(formData);

        if (result.success) {
            
            await db.collection('publication').add({
                id: result.id,
                titre: result.titre,
                auteur: result.auteur,
                contenu: result.contenu,
            });
        }
    }

    return (
        <div className="formulaire-ajout d-flex h-75 justify-content-center">
            <div className="col-10 col-md-9 mt-4 mt-md-3 d-flex flex-column justify-content-center align-items-center bgDarkLight glow-effect rounded-4">
                <h1 className="pb-5 lora-font text-white">Modifier publication</h1>
                <form action={handleSubmit}>
                    <label htmlFor="id" className="lora-font text-white">ID :</label><br/>
                    <input type="text" id="id" name="id" className="rounded-3 bgDark text-white" /><br/>

                    <label htmlFor="titre" className="lora-font text-white">Titre :</label><br/>
                    <input type="text" id="titre" name="titre" className="rounded-3 bgDark text-white" /><br/>

                    <label htmlFor="auteur" className="lora-font text-white">Auteur :</label><br/>
                    <input type="text" id="auteur" name="auteur" className="rounded-3 bgDark text-white" /><br/>

                    <label htmlFor="contenu" className="lora-font text-white">Contenu :</label><br/>
                    <textarea id="contenu" name="contenu" className="rounded-3 w-100 bgDark text-white"></textarea><br/>

                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn mt-4 btn-primary rounded-3 bgBlue text-white lora-font">Modifier</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
