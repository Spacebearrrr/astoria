// src/routes/api/generate-number.js
import { connectToDatabase } from '$lib/db';
import { json } from '@sveltejs/kit';

export async function GET() {
    const db = await connectToDatabase();
    const collection = db.collection('sequential_numbers');

    try {
        // Find the document that stores the last number
        let doc = await collection.findOne({ _id: 'sequentialNumber' });

        if (!doc) {
            // If no document exists, create one with the initial number
            doc = { _id: 'sequentialNumber', lastNumber: 0 };
            await collection.insertOne(doc);
        }

        // Increment the number
		let newNumber;

		if(doc.lastNumber < 999)
        newNumber = doc.lastNumber + 1;
		if(doc.lastNumber == 1000)
		newNumber = 1;

        await collection.updateOne(
            { _id: 'sequentialNumber' },
            { $set: { lastNumber: newNumber } }
        );

        return json({ number: newNumber });
    } catch (error) {
        return json({ error: 'Failed to generate number' }, { status: 500 });
    }
}
