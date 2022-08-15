import IconExternal from './external';
import IconGitHub from './github';
import IconLinkedin from './linkedin';
import IconTwitter from './twitter';

const Icon = (props: { name: string }) => {
	if (props.name === 'GitHub') return <IconGitHub />;
	if (props.name === 'Twitter') return <IconTwitter />;
	if (props.name === 'Linkedin') return <IconLinkedin />;
	if (props.name === 'External') return <IconExternal />;
	return <IconExternal />;
};

export default Icon;
