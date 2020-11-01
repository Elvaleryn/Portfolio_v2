import React from 'react';
import SkillCard from '../components/SkillCard';
import DevIcon from '../components/DevIcon';

const skills = () => {
	const mySkills = [
		{
			head: 'PSD to HTML/CSS/JS',
			paragraph:
				'I can turn your design templates into living websites. Also I believe every project deserves extra work to find the right color, font and layout.',
			iconName: 'brush',
		},
		{
			head: 'Web Development',
			paragraph:
				'I can develop full stack web apps with various frontend and backend frameworks. I always aim to write clean and reusable code.',
			iconName: 'embed2',
		},
		{
			head: 'Quick Fixes',
			paragraph:
				'As a professional i constantly read, fix or add to other developers codes. So, you are in the right address if you looking for a quick fix.',
			iconName: 'tools',
		},
	];

	const devIcons = [
		{
			name: 'javascript',
			iconName: 'javascript',
		},
		{
			name: 'react',
			iconName: 'react',
		},
		{
			name: 'vue',
			iconName: 'vue-dot-js',
		},
		{
			name: 'next',
			iconName: 'next-dot-js',
		},
		{
			name: 'graphql',
			iconName: 'graphql',
		},
		{
			name: 'bootstrap',
			iconName: 'bootstrap',
		},
		{
			name: 'tailwind',
			iconName: 'tailwindcss',
		},
		{
			name: 'sass',
			iconName: 'sass',
		},
		{
			name: 'node',
			iconName: 'node-dot-js',
		},
		{
			name: 'laravel',
			iconName: 'laravel',
		},
	];

	return (
		<div className="container mt-5">
			<h5 className="text-5xl mb-5">My Skills</h5>

			<p className="text-xl text-gray-500 mb-8">
				Here are my skills in general. But i am not limited with these languages
				and frameworks, i can swiftly learn any new programming language or
				framework for the needs of the project.
			</p>

			<div className="flex justify-between flex-wrap">
				{mySkills.map((skill) => (
					<SkillCard
						head={skill.head}
						paragraph={skill.paragraph}
                        iconName={skill.iconName}
                        key={skill.head}
					/>
				))}
			</div>
			<div className="dev-icons flex justify-between flex-wrap mt-16">
				{devIcons.map((icon) => (
					<DevIcon iconName={icon.iconName} techName={icon.name} key={icon.iconName} />
				))}
			</div>
		</div>
	);
};

export default skills;
