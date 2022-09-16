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
				className='capitalize grid gap-2 bg-gray-800 border-2 border-emerald-300 shadow shadow-emerald-500 w-3/4 mx-auto my-10 p-2 rounded text-xl'
			>
				<h1 className='ml-2 lg:text-8xl'>{props.title}</h1>
				<div className='ml-8 -mt-2'>by {props.members.organizer}</div>
				<div className='mb-10 mt-2'>{props.date.substring(0, 10)}</div>
				<div className='grid justify-center'>
					{tesmembers.map((member, index) => (
						<Participant key={index} name={member} />
					))}
					<form action='#' method='post'>
						<input
							className='bg-gray-700 border border-emerald-300 text-white text-md rounded-lg focus:ring-emerald-500 focus:border-emerald-500 inline w-48 md:w-2/3 p-1 dark:bg-gray-700 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500'
							type='text'
							name='newMember'
							id=''
							placeholder='New Member'
						/>
						<button type='submit' className='ml-3'>
							✔
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export function Participant(props) {
	return <div className='mb-1'>{props.name}</div>;
}
