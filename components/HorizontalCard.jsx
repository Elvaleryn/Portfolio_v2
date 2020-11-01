import React from 'react';

const HorizontalCard = ({ head, time, paragraph, imgUrl, websiteLink }) => {
	return (
		<div className="w-full lg:flex single-experience-card mb-16">
			<div className="side-image h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
			<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
				<div className="mb-8">
					<div className="text-white font-bold text-xl mb-2">
						{head} <i>({time})</i>
					</div>
					<p className="text-gray-500 text-base">{paragraph}</p>
				</div>
				<div className="flex items-center">
					<div className="text-sm">
						<a href={websiteLink} target="_blank" rel="noopener noreferrer">
							Go to website
						</a>
					</div>
				</div>
			</div>

			<style jsx>{`
				.side-image {
					background-image: ${`url(${imgUrl})`};
					background-position: center;
					background-repeat: no-repeat;
					background-size: cover;
					border-top: 1px solid #cbd5e0;
					border-left: 1px solid #cbd5e0;
					border-bottom: 1px solid #cbd5e0;
				}

				.single-experience-card {
					background-color: #111;
					color: white;
				}

				a {
					@apply text-white text-base underline cursor-pointer;
				}

				a:hover {
					@apply transform scale-110;
				}
			`}</style>
		</div>
	);
};

export default HorizontalCard;
