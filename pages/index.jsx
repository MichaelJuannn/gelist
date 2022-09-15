// index.html
import { useState } from 'react';
import Link from 'next/link';
import homeStyles from '../styles/Home.module.css';

export default function Index() {
	return (
		<div>
			<Header />
			<Formevent />
		</div>
	);
}

export function Header() {
	return (
		<div className='text-center text-emerald-500 '>
			<div className='text-5xl  m-4'>GeList</div>
			<div className='text-3xl m-4'>Your Favorite Event Scheduler</div>
		</div>
	);
}

export function Formevent() {
	return (
		<div className='w-full w-max-sm'>
			<form
				action='/api/hello'
				method='POST'
				className={`${homeStyles.container}`}
			>
				<div className='p-4'>
					<label
						htmlFor='eventDescription'
						className='block mb-2 text-md font-medium text-gray-300 '
					>
						Event Name
					</label>
					<input
						required
						type='text'
						name='eventTitle'
						id='eventDescription'
						className='bg-gray-700 border border-emerald-300 text-white text-md rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500'
					/>
				</div>
				<div className='p-4'>
					<label
						htmlFor='organizer'
						className='block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300'
					>
						Organizer
					</label>
					<input
						required
						type='text'
						name='organizer'
						id='organizer'
						className='bg-gray-700 border border-emerald-300 text-gray-300 text-md rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-emerald-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500'
					/>
				</div>
				<div className='p-4'>
					<label
						htmlFor='eventDate'
						className='block mb-2 text-md font-medium text-gray-300 '
					>
						Event Date
					</label>
					<input
						required
						type='date'
						name='eventDate'
						id='eventDate'
						className='bg-gray-700 border border-emerald-300 text-gray-300 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500'
					/>
				</div>
				<button type='submit' className='bg-emerald-500 rounded p-4 ml-5'>
					Submit
				</button>
			</form>
		</div>
	);
}
