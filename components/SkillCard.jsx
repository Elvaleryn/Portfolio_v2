import React from 'react';

const SkillCard = ({ head, paragraph, iconName }) => {
	return (
		<div className="card max-w-sm rounded overflow-hidden shadow-lg py-5">
			<div className="px-6 py-4">
				<div className="flex justify-center w-full">
					<div className="icon-container mb-6">
						<svg className={`icon icon-${iconName}`}>
							<use xlinkHref={`/sprite.svg#icon-${iconName}`}></use>
						</svg>
					</div>
				</div>
				<div className="font-bold text-xl mb-4 text-center">{head}</div>
				<p className="text-gray-500 text-base text-center">{paragraph}</p>
			</div>
			<style jsx>{`
				.card {
					border: 1px solid white;
                    background-color: #111;
				}

				.icon-container {
					display: flex;
					justify-content: center;
					margin-top: 1rem;
					width: 5rem;
					height: 5rem;
					transform: rotate(45deg);
					background-color: white;
					border: 1px solid #6c4a88;
				}

				.icon {
					width: 3rem;
					height: 3rem;
					margin-top: 1rem;
					transform: rotate(-45deg);
				}
			`}</style>
		</div>
	);
};

export default SkillCard;
