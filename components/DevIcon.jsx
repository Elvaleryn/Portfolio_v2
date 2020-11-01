import React from 'react';

const DevIcon = ({ techName, iconName }) => {
	return (
		<div className="flex flex-col items-center mb-8">
			<svg className={`icon-${iconName} w-10 h-10 mb-3`}>
				<use xlinkHref={`/sprite.svg#icon-${iconName}`} />
			</svg>
			<span>{techName}</span>
		</div>
	);
};

export default DevIcon;
