import React from 'react';
import HorizontalCard from '../components/HorizontalCard';

const experience = () => {
	const experiences = [
		{
			id: 1,
			head: 'BiletBayisi.com',
			time: '2020 - present',
			paragraph:
				'I currently work here. I am coding frontend part of this website from scratch. This is a e-commerce website which sells plane tickets from various airlines.',
			imgUrl: '/biletbayisi.png',
			websiteLink: 'https://biletbayisi.com/',
		},
		{
			id: 2,
			head: 'BrainBuffet.com',
			time: 'Project based work',
			paragraph:
				'They are remaking their website and I turn design templates into html/css/javascript for this website. Since it is an on going project, i still do their work.',
			imgUrl: '/brainbuffet.png',
			websiteLink: 'https://brainbuffet.com/',
		},
		{
			id: 3,
			head: 'Microlancer.io',
			time: 'March 2019 - August 2019',
			paragraph:
				'I worked remotely for this project as a frontend developer. This was the place where i learnt how to work with a team and work with a large code base. I mainly used Preact for this project.',
			imgUrl: '/microlancer.png',
			websiteLink: 'https://microlancer.io/',
		},
		{
			id: 4,
			head: 'Other freelance projects and trivial projects',
			time: '2017 - present',
			paragraph:
				'Since 2017 i do freelancing for small to large scaled project also, i do trivial projects to learn new technologies. Here is an example of a spa react project where i list movies from an api with a search input.',
			imgUrl: '/trivial.png',
			websiteLink: 'https://elvalerynmoviedbapp.herokuapp.com',
		},
	];

	return (
		<div className="experiences-container container mt-8">
			<h5 className="text-5xl mb-5">My Experience</h5>

			{experiences.map((experience) => (
				<HorizontalCard
					head={experience.head}
					time={experience.time}
					paragraph={experience.paragraph}
                    imgUrl={experience.imgUrl}
                    key={experience.id}
                    websiteLink={experience.websiteLink}
				/>
			))}
		</div>

		//mirolancer
		//biletbayisi
		//adobexd to html for brain buffet website
		//various freelance projects and trivial ones
	);
};

export default experience;
