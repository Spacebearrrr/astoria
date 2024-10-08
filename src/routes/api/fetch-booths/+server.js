// src/routes/api/booth.js
import { connectToDatabase } from '$lib/db';
import { json } from "@sveltejs/kit";

export async function GET() {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('booths');
        const booths = await collection.find({}).toArray();

        return json({
            status: 200,
            body: booths
        });
    } catch (error) {
        return json({
            status: 500,
            body: { error: 'Failed to fetch booths' }
        });
    }
}
