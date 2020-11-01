import React from 'react';
import axios from 'axios';
import CardWithImage from '../components/CardWithImage';

const blog = (props) => {
	return (
		<>
			<div className="container mt-5">
				<h5 className="text-5xl mb-5">Blogs</h5>
				<p className="text-xl text-gray-500 mb-8">
					I was writing about javascript for a long time but i never published,
					i decided to edit and publish them on dev to. I write them both in Turkish and English. Here you can find all of
					my posts in{' '}
					<a
						href="https://dev.to/eraywebdev"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white font-extrabold hover:underline"
					>
						DEV TO.
					</a>
				</p>
				<div className="flex flex-wrap justify-between ">
					{props.articles.map((article) => (
						<CardWithImage
							imgSource={article.social_image}
							description={article.description}
							url={article.canonical_url}
							goToName="Go to this post"
							key={article.id}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export async function getStaticProps(context) {
    const res = await axios.get(
			'https://dev.to/api/articles?username=eraywebdev'
        );
    const articles = res.data;
	return {
		props: { articles } 
	};
}


export default blog;
