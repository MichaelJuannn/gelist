import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
	// const { slug } = req.query;
	const prisma = new PrismaClient();
	const result = await prisma.event.findMany();
	console.log(result);
	res.status(200).json(result);
}
