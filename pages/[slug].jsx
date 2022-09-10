export async function getServerSideProps(context) {
	const key = context.params;
	console.log(key.slug);
	const res = await fetch(`./api/${key.slug}`);
	console.log(res);
	return { props: key };
}

export default function Display(props) {
	return <h1>{JSON.stringify(props.slug)}</h1>;
}
