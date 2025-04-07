"use server";
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('http://localhost:3000/publication');
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
    }
}

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

export async function PUT(param) {
    try {
        const id = param.get('id');
        const data = await param.json();
        await fetch(`http://localhost:3000/publication/${id}`, {
            method: 'PUT',
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

export async function DELETE(param) {
    try {
        const id = param.get('id');
        await fetch(`http://localhost:3000/publication/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
    }
}   

