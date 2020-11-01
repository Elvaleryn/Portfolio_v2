import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Home = () => {
	return (
		<div className="container main">
			<div>
				<div className="flex flex-col px-3 items-center">
					<p>Hi! 👋🏽I'm Eray Kaya</p>
					<div className="flex">
						<p className="mr-4">Web</p>
						<Typewriter
							options={{
								strings: ['Developer', 'Enthusiast'],
								autoStart: true,
								loop: true,
							}}
						/>
					</div>
				</div>
				<div className="flex justify-around mt-8">
					<Link href="/skills">
						<button>My Skills</button>
					</Link>
					<Link href="/experience">
						<button>Experience</button>
					</Link>
				</div>

				<div className="icon-container mt-6">
					<a href="https://twitter.com/eraywebdev" target="_blank">
						<svg className="icon-twitter w-10 h-10">
							<use xlinkHref="/sprite.svg#icon-twitter" />
						</svg>
					</a>
					<a href="https://github.com/Elvaleryn" target="_blank">
						<svg className="icon-github w-10 h-10">
							<use xlinkHref="/sprite.svg#icon-github" />
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/in/eray-kaya-17955b1a9/"
						target="_blank"
					>
						<svg className="icon-linkedin w-10 h-10">
							<use xlinkHref="/sprite.svg#icon-linkedin" />
						</svg>
					</a>
					<a href="https://dev.to/eraywebdev" target="_blank">
						<svg className="icon-dev-dot-to w-10 h-10">
							<use xlinkHref="/sprite.svg#icon-dev-dot-to" />
						</svg>
					</a>
				</div>
                <div className="mt-16">
                    <p className="text-xl">Send an email to <span className="underline">eraykaya121@gmail.com</span> to hire me.</p>
                </div>
			</div>
			<style jsx>{`
				.main {
					@apply text-5xl flex items-center justify-center mt-16;
				}

				.main {
					height: 60vh;
				}

				button {
					@apply bg-white text-black text-3xl p-6;
				}

				button:hover {
					@apply transform scale-110;
				}

				.icon-container {
					@apply flex justify-around;
				}

				.icon-github {
					fill: #fff;
				}

				.icon-dev-dot-to {
					fill: #fff;
				}

				@media (max-width: 768px) {
					.main {
						@apply text-3xl;
					}

					button {
						@apply text-xl p-3;
					}
				}
			`}</style>
		</div>
	);
};
//twitter linkedin github devto
//javascript sass react next vue bootstrap tailwind graphql node laravel
//brush tool code burger close eye
export default Home;
