import styles from '../styles/Mixins.module.css';

interface InputFieldProps {
	type?: string;
	name: string;
	placeholder: string;
	value: string;
	textArea?: boolean;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement> &
			React.ChangeEvent<HTMLTextAreaElement>
	) => void;
	errorMessage?: string;
}

const InputField = (props: InputFieldProps) => {
	const { onChange, textArea, errorMessage, ...inputProps } = props;

	if (textArea) {
		return (
			<div className={styles.input100}>
				<textarea {...inputProps} onChange={onChange}></textarea>
				<span>{errorMessage}</span>
			</div>
		);
	} else {
		return (
			<div className={styles.input100}>
				<input {...inputProps} onChange={onChange} />
				<span>{errorMessage}</span>
			</div>
		);
	}
};

export default InputField;
