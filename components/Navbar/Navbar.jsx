import React from 'react';
import Link from 'next/link';
import Burger from './Burger';
import { useRouter } from 'next/router';

const Navbar = () => {
	const router = useRouter();
    console.log(router.pathname);
	return (
		<nav className="container flex justify-between items-center mx-auto mt-4 sm:px-4">
			<span className="home">
				<Link href="/">
					<a className="highlighted-logo text-white font-extrabold text-4xl">
						EK
					</a>
				</Link>
			</span>
			<Burger />

			<style jsx>{`
				.highlighted-logo {
					@apply border border-solid border-white p-2;
				}

				.highlighted-logo {
					background-color: ${router.pathname === '/' ? 'white' : ''};
					color: ${router.pathname === '/' ? 'black' : ''};
				}

				.home {
					@apply mr-auto;
				}

                .home {
                    z-index: 120;
                }

				@media (max-width: 768px) {
					nav {
						@apply px-4;
					}
				}
			`}</style>
		</nav>
	);
};
export default Navbar;
