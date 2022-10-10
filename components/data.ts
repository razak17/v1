import { StaticImageData } from 'next/image';
import howdyImg from '/assets/howdy.png';
import ytImg from '/assets/yt.png';
import tiktikImg from '/assets/tiktik.png';
import algovisualImg from '/assets/algo-visual.png';

type ProjectType = {
	title: string;
	description: string;
	image: StaticImageData;
	tech: string[];
	github?: string;
	external?: string;
};

export const navLinks = [
	{
		name: 'Home',
		url: '#'
	},
	{
		name: 'About',
		url: '#about'
	},
	{
		name: 'Projects',
		url: '#projects'
	},
	{
		name: 'Contact',
		url: '#contact'
	}
];

export const socialMedia = [
	{
		name: 'GitHub',
		url: 'https://github.com/razak17'
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/theRazakMo'
	}
];

export const footerLinks = [
	{
		name: 'Blog',
		url: 'https://blog.razakmo.me'
	},
	{
		name: 'Projects',
		url: '#projects'
	},
	{
		name: 'Imprint',
		url: '#'
	},
	{
		name: 'Privacy Policy',
		url: '#'
	}
];

export const projects: ProjectType[] = [
	{
		title: 'Howwdy',
		description:
			'A social media web application (twitter clone) that allows users to post, like, comment on posts and follow other users.',
		tech: [
			'react',
			'mantine',
			'react query',
			'node',
			'express',
			'mongodb',
			'firebase'
		],
		image: howdyImg,
		github: 'https://github.com/razak17/howdy-ui',
		external: 'https://howwdy.razakmo.me'
	},
	{
		title: 'Video sharing platform',
		description:
			'Basically a youtube clone. Users can upload videos, like, dislike, comment on videos and subscribe to channels.',
		tech: [
			'react',
			'material UI',
			'react query',
			'styled components',
			'express',
			'mongodb',
			'firebase'
		],
		image: ytImg,
		github: 'https://github.com/razak17/youtube-clone-frontend',
		external: 'https://youtube.razakmo.me'
	},
	{
		title: 'Tik Tok Clone',
		description:
			'A tik tok clone that allows users to upload videos, like, comment on videos and like videos.',
		tech: ['react', 'material UI', 'redux', 'express', 'mongodb', 'fireabase'],
		image: tiktikImg,
		github: 'https://github.com/razak17/howdy',
		external: 'https://tiktik.razakmo.me'
	},
	{
		title: 'Algorithm Visualizer',
		description:
			'Visualize sorting algorithms like bubble sort, merge sort, quick sort, and more. See how they work step by step.',
		tech: ['react', 'tailwind'],
		image: algovisualImg,
		github: 'https://github.com/razak17/algo-visualizer',
		external: 'https://algo-visualizer.razakmo.me'
	}
];
