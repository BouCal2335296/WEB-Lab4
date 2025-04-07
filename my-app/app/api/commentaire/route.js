"use server"
import { NextResponse } from 'next/server';

// Affiche tous les commentaires
export async function GET() {
    try {

        const response = await fetch('http://localhost:3000/commentaire'); 
        const data = await response.json();       
        return NextResponse.json(data);
    }
    catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
    }
}

// Publie un commentaire associé à un blog
export async function POST(param) {
    try {
        const data = await param.json();

        await fetch('http://localhost:3000/commentaire', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
    }
}