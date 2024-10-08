// src/routes/api/get-current-number.js
import { connectToDatabase } from '$lib/db';
import { json } from '@sveltejs/kit';

export async function GET() {
    const db = await connectToDatabase();
    const collection = db.collection('sequential_numbers');

    try {
        // Find the document that stores the last number
        const doc = await collection.findOne({ _id: 'sequentialNumber' });

        if (!doc) {
            // If no document exists, return an error or initialize it
            return json({ error: 'Number not initialized' }, { status: 404 });
        }

        return json({ number: doc.lastNumber });
    } catch (error) {
        return json({ error: 'Failed to fetch current number' }, { status: 500 });
    }
}
