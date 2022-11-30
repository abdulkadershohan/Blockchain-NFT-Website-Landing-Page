/* eslint-disable react/prop-types */
import { Box, Button, Stack } from "@mui/material";
import * as React from "react";
import buttonLeft from "../assets/images/buttonLeft.png";
import buttonRight from "../assets/images/buttonRight.png";
export default function CButton({
	children,
	buttonLeftStyle,
	buttonRightStyle,
	btnTitle,
	...rest
}) {
	return (
		<Stack
			direction={'row'}
			sx={{
				p: 0,
				m: 0,
			}}
		>

			<Box
				component="img"
				src={buttonLeft}
				alt="button-left"
				sx={buttonLeftStyle || {
					height: 50
				}}
			/>
			<Button
				sx={{
					backgroundColor: '#AD1AAF',
					p: '10px 16px',
					border: 'none',
					fontWeight: 400,
					fontSize: '14px',
					textTransform: 'capitalize',
					color: '#fff',
					lineHeight: 0,
					borderRadius: '0px',
					fontFamily: 'Oxanium',

				}}
				{...rest}
			>
				{btnTitle}{children}
			</Button>
			<Box
				component="img"
				src={buttonRight}
				alt="button-right"
				sx={buttonRightStyle || {
					height: 50
				}}
			/>

		</Stack>
	);
}

