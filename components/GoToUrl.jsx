import React from 'react';

const GoToUrl = ({ url, name }) => {
	return (
		<div className="px-6 pt-4 pb-2">
			<a
				href={url}
				target="_blank"
				className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
			>
				{name}
			</a>
		</div>
	);
};

export default GoToUrl;
