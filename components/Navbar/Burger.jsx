import React, { useState, useEffect } from 'react';
import RightNav from './RightNav';
import { useRouter } from 'next/router';

const Burger = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = () => {
			setOpen(false);
		};

		router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, []);

	return (
		<>
			<svg
				className={open === true ? 'hidden' : 'icon-menu w-10 h-10'}
				onClick={() => setOpen(true)}
			>
				<use xlinkHref="/sprite.svg#icon-menu" />
			</svg>

			<svg
				className={open === true ? 'icon-cross w-10 h-10' : 'hidden'}
				onClick={() => setOpen(false)}
			>
				<use xlinkHref="/sprite.svg#icon-cross" />
			</svg>

			<RightNav open={open} />

			<style jsx>{`
				svg[class*='icon-'] {
					display: none;
					fill: #fff;
					z-index: 20;
				}

				@media (max-width: 768px) {
					svg[class*='icon-'] {
						display: block;
						fill: #fff;
						z-index: 20;
					}
				}
			`}</style>
		</>
	);
};

export default Burger;
