import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const RightNav = ({open}) => {
	const router = useRouter();

	return (
		<>
			<ul className="menu">
				<li>
					<Link href="/experience">
						<a className={router.pathname === '/experience' ? 'active' : ''}>
							Experience
						</a>
					</Link>
				</li>
				<li>
					<Link href="/blog">
						<a className={router.pathname === '/blog' ? 'active' : ''}>Blog</a>
					</Link>
				</li>
				<li>
					<Link href="/skills">
						<a className={router.pathname === '/skills' ? 'active' : ''}>
							Skills
						</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a className={router.pathname === '/about' ? 'active' : ''}>
							About
						</a>
					</Link>
				</li>
			</ul>

			<style jsx>
				{`
					.active {
						@apply bg-white text-black;
					}

					.menu {
						@apply flex justify-end text-white text-xl;
					}

					.menu > li {
						@apply px-5;
					}

					.menu > li > a {
						@apply p-5;
					}

					.menu > li > a:hover {
						@apply active;
					}

					@media (max-width: 768px) {
						.menu {
							flex-direction: column;
                            justify-content: flex-start;
                            align-items: center;
							display: ${open === true ? 'flex' : 'none'};
							position: fixed;
							top: 0;
							left: 0;
                            background-color: #000;
                            height: 100vh;
                            width: 100vw;
                            z-index: 100;
                            padding-top: 5rem;
						}

                        .menu > li {
                            @apply mb-8
                        }
					}
				`}
			</style>
		</>
	);
};

export default RightNav;
