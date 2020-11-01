import '../styles/globals.css';
import Navbar from '../components/Navbar/Navbar';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />

			<Component {...pageProps} />

			<style jsx global>{`
				.container {
					@apply py-4 mx-auto text-white;
				}

				.container {
					max-width: 1280px;
				}
			`}</style>
		</>
	);
}

export default MyApp;
