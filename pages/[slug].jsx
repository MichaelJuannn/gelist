import { PrismaClient } from '@prisma/client';

export async function getServerSideProps(context) {
	const key = context.params.slug;
	console.log(key);
	const prisma = new PrismaClient();
	const event = await prisma.event.findUnique({
		where: {
			slug: key,
		},
	});
	return { props: event };
}

export default function Display(props) {
	return <h1 className=''>TESTING</h1>;
}
