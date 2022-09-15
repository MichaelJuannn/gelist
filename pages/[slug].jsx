import { PrismaClient } from '@prisma/client';

export async function getServerSideProps(context) {
	const key = context.params.slug;
	const prisma = new PrismaClient();
	const event = await prisma.event.findUnique({
		where: {
			slug: key,
		},
	});
	return { props: event };
}

export default function App(props) {
	const tesmembers = props.members.member;

	return (
		<div>
			<div className='border-2 w-1/2 mx-auto my-10 p-2 rounded'>
				<div>{props.title}</div>
				<div>{props.members.organizer}</div>
				<div>{props.date.substring(0, 10)}</div>
				<div>
					{tesmembers.map((member, index) => (
						<Participant key={index} name={member} />
					))}
				</div>
			</div>
		</div>
	);
}

export function Participant(props) {
	return <div>{props.name}</div>;
}
