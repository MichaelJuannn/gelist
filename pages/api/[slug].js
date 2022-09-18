import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
	const prisma = new PrismaClient();
	const { slug } = req.query;
	const newMember = req.body.newMember;
try {
	const membersObj = await prisma.event.findFirst({
		where: {
			slug: slug,
		},
		select: {
			members: true,
		},
	});

	const membersArr = membersObj.members.member;

	

	console.log(membersArr);
	const updateUser = await prisma.event.update({
		where: {
			slug: slug,
		},
		data: {
			members: {
				member: [...membersArr, newMember],
			},
		},
	});
	res.redirect(307,`/${slug}`)
}
	
	catch (error) {
	  res.status(400).send(error)
	}
}
