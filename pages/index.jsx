// index.html
import { useState } from 'react';
import Link from 'next/link';

export default function Index() {
	return (
		<h1>
			Read <Link href='/archive/first'>Try this</Link>
		</h1>
	);
}
