import IconExternal from './external';
import IconFolder from './folder';
import IconGitHub from './github';
import IconLinkedin from './linkedin';
import IconTwitter from './twitter';

export type IconType =
	| 'GitHub'
	| 'Twitter'
	| 'Linkedin'
	| 'External'
	| 'Folder';

const Icon = (props: { name: IconType }) => {
	if (props.name === 'GitHub') return <IconGitHub />;
	if (props.name === 'Twitter') return <IconTwitter />;
	if (props.name === 'Linkedin') return <IconLinkedin />;
	if (props.name === 'External') return <IconExternal />;
	if (props.name === 'Folder') return <IconFolder />;
	return <IconExternal />;
};

export default Icon;
