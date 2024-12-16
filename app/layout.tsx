import { ReactNode } from 'react';
import '../styles/globals.css';

export const metadata = {
	title: {
		default: 'Razak Mo',
		template: '%s | Razak Mo',
	},
	description: 'Razak Mo is a full-stack developer.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
