// actions/publication.js
"use server";

export async function modifierPublication(data) {
    const id = data.get('id');
    const titre = data.get('titre');
    const auteur = data.get('auteur');
    const contenu = data.get('contenu');

    try {
        const response = await fetch(`http://localhost:3000/publication/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titre, auteur, contenu }),
        });

        if (!response.ok) throw new Error('Échec de la mise à jour');

        return { success: true, id, titre, auteur, contenu };
    } catch (error) {
        console.error(error);
        return { success: false, error: error.message };
    }
}
