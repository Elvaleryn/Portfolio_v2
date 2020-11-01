import React from 'react';
import Link from 'next/link';
import Burger from './Burger';
const Navbar = () => {
	return (
		<nav className="container flex justify-between items-center mx-auto mt-4 sm:px-4">
			<span className="home">
				<Link href="/">
					<a className="highlighted-logo">
						EK
					</a>
				</Link>
			</span>
			<Burger />

			<style jsx>{`

				.home {
					@apply mr-auto;
				}

				.highlighted-logo {
					@apply text-white font-extrabold text-4xl;
				}

                @media (max-width: 768px) {
                    .nav {
                        @apply px-4;
                    }
                }

			`}</style>
		</nav>
	);
};
export default Navbar;
