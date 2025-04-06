"use server"
import { NextResponse } from 'next/server';

// Gérer la requête POST
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