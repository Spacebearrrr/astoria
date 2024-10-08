// src/routes/api/update-booth.js
import { connectToDatabase } from '$lib/db';
import { json } from '@sveltejs/kit';

export async function PATCH({ request }) {
    const { id, queueNumber } = await request.json();

    if (!id || queueNumber === undefined) {
        return json({
            status: 400,
            body: { error: 'Invalid data' }
        });
    }

    try {
        const db = await connectToDatabase();
        const collection = db.collection('booths');

        // Update the booth document by pushing the queueNumber to the numbers array
        const result = await collection.updateOne(
            { id },
            { $push: { numbers: queueNumber } }
        );

        if (result.modifiedCount === 0) {
            return json({
                status: 404,
                body: { error: 'Booth not found' }
            });
        }

        return json({
            status: 200,
            body: { message: 'Booth updated successfully' }
        });
    } catch (error) {
        return json({
            status: 500,
            body: { error: 'Failed to update booth' }
        });
    }
}
