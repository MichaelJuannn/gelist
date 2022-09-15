import { PrismaClient } from '@prisma/client';
import { Header } from './index';

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
			<Header />
			<div
				id='boxEvent'
				className='grid gap-2 border-2 border-emerald-300 shadow shadow-emerald-500 w-3/4 mx-auto my-10 p-2 rounded text-xl'
			>
				<h1 className='text-8xl ml-2'>{props.title}</h1>
				<div className='ml-8 -mt-2'>by {props.members.organizer}</div>
				<div className='mb-32 mt-4'>{props.date.substring(0, 10)}</div>
				<div className='grid justify-center'>
					{tesmembers.map((member, index) => (
						<Participant key={index} name={member} />
					))}
				</div>
			</div>
		</div>
	);
}

export function Participant(props) {
	return <div className='mb-1'>{props.name}</div>;
}
