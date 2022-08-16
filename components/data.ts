import { StaticImageData } from "next/image";
import firstImage from '/assets/113.png';

type ProjectType = {
	title: string;
	description: string;
	image: StaticImageData;
	tech: string[];
	github?: string;
	external?: string;
};

export const projects: ProjectType[] = [
	{
		title: 'First Project',
		description:
			'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
		tech: ['react', 'tailwind', 'node', 'express', 'mongodb'],
		image: firstImage,
		github: 'https://github.com/razak17',
		external: 'https://www.google.com'
	},
	{
		title: 'First Project',
		description:
			'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
		tech: ['react', 'tailwind', 'node', 'express', 'mongodb'],
		image: firstImage,
		external: 'https://www.google.com'
	},
	{
		title: 'First Project',
		description:
			'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
		tech: ['react', 'tailwind', 'node', 'express', 'mongodb'],
		image: firstImage,
		github: 'https://github.com/razak17'
	}
];
