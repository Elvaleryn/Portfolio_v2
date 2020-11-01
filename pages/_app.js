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

                @media (max-width: 768px) {
                    .container {
                        @apply px-4;
                    }
                }

			`}</style>
		</>
	);
}

export default MyApp;
