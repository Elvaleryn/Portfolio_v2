import React from 'react';
import GoToUrl from './GoToUrl';

const CardWithImage = ({ imgSource, description, url, goToName }) => {
	return (
		<div className="card-with-img">
			<img className="w-full" src={imgSource}></img>
			<div className="px-6 py-4">
				<p className="description-paragraph">{description}</p>
			</div>
			<GoToUrl url={url} name={goToName} />

			<style jsx>{`
				.card-with-img {
					@apply max-w-sm rounded overflow-hidden shadow-lg mb-16 border-solid border border-white;
				}

				.card-with-img {
					background-color: #111;
				}

				.description-paragraph {
					@apply text-gray-500 text-base;
				}
			`}</style>
		</div>
	);
};

export default CardWithImage;
