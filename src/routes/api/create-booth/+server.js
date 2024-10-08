// src/routes/api/booth.js
import { connectToDatabase } from '$lib/db';
import { json } from "@sveltejs/kit";
import { v4 as guid } from 'uuid';

export async function POST({ request }) {
	const { name } = await request.json();

	if (!name) {
		return json({
			status: 400,
			body: { error: 'Invalid data' }
		});
	}

	const booth = {
		id: guid(),
		name,
		numbers: [],
		alert: false,
		createdAt: new Date()
	};

	try {
		const db = await connectToDatabase();
		const collection = db.collection('booths');
		await collection.insertOne(booth);

		return json({
			status: 201,
			body: { message: 'Booth created', booth }
		});
	} catch (error) {
		return json({
			status: 500,
			body: { error: 'Failed to create booth' }
		});
	}
}
