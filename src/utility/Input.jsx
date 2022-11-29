import { TextField } from "@mui/material";
export default function Input({
	value,
	name,
	label,
	...rest
}) {
	return (
		<TextField
			name={name}
			label={label}
			value={value}
			size="small"
			fullWidth
			sx={{
				"& label.Mui-focused": {
					color: "#fff",
				},
				"& .MuiInputLabel-root": {
					color: "#fff",
					fontFamily: 'FiraCode',

				},
				input: { color: '#fff' },
				'& .MuiOutlinedInput-root': {
					'& fieldset': {
						borderColor: '#C778DD',
					},
					'&:hover fieldset': {
						borderColor: '#ABB2BF',
					},
					'&.Mui-focused fieldset': {
						borderColor: '#ABB2BF',
					},

				},
				// style for multiline
				'& .MuiOutlinedInput-inputMultiline': {
					padding: 0,
					fontFamily: 'FiraCode',
					color: '#fff',
					backgroundColor: '#2C323C',
				},
			}}

			{...rest}
		/>
	);
}
