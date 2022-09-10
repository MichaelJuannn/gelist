// index.html
import { useState } from 'react';
import Link from 'next/link';
import homeStyles from '../styles/Home.module.css';

export default function Index() {
	return (
		<form action='/api/hello' method='POST' className={homeStyles.container}>
			<div>
				<label htmlFor='organizer'>Organizer</label>
				<input type='text' name='organizer' id='organizer' className='' />
			</div>
			<div>
				<label htmlFor='eventDescription'>Event Name</label>
				<input type='text' name='eventTitle' id='eventDescription' />
			</div>
			<div>
				<label htmlFor='eventDate'>Event Name</label>
				<input type='date' name='eventDate' id='eventDate' />
			</div>
			<div>
				<button type='submit'>Submit</button>
			</div>
		</form>
	);
}
