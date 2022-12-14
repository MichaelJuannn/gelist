// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from '@prisma/client';

let crypto = require('crypto');
const prisma = new PrismaClient();

export default async function handler(req, res) {
	try {
		const data = req.body;
		const user = await prisma.event.create({
			data: {
				slug: crypto.randomBytes(10).toString('hex'),
				title: data.eventTitle,
				date: new Date(data.eventDate).toISOString(),
				members: { member: [] },
				organizer: data.organizer,
				category: 'will be added category',
			},
		});
		res.status(200).redirect(`/${user.slug}`);
	} catch (err) {
		res.status(500).json({ error: `${err}` });
	}
}
