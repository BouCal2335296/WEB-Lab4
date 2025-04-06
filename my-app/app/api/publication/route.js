export function GET(request){
    return new Response("Hello, Next.js!");
}


import { NextResponse } from 'next/server';

// Gérer la requête POST
export async function POST(param) {
    try {
        const data = await param.json();

        await fetch('http://localhost:3000/publication', {
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

