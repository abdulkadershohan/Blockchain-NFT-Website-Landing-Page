/* eslint-disable react/prop-types */
import { Box, Button, Stack } from "@mui/material";
import * as React from "react";
// import buttonLeft from "../assets/images/buttonLeft.png";
// import buttonRight from "../assets/images/buttonRight.png";
export default function OutlinedBtn({
	children,
	buttonLeftStyle,
	buttonRightStyle,
	btnTitle,
	...rest
}) {
	return (
		<Stack
			direction={'row'}
			alignItems={'center'}
		>

			<Box
				//component="img"
				//src={buttonLeft}
				// alt="button-left"
				// sx={buttonLeftStyle || {
				// 	height: 50
				// }}
				sx={{
					height: '28px',
					width: '4px',
					backgroundColor: '#AD1AAF',
				}}
			/>
			<Button
				sx={{
					background: 'rgba(173, 26, 175, 0.05)',
					height: '50px',
					p: '10px 40px',
					border: '1px solid #AD1AAF',
					fontWeight: 500,
					fontSize: '14px',
					textTransform: 'capitalize',
					fontFamily: 'Oxanium',
					color: '#fff',
					lineHeight: 0,
					borderRadius: '0px',
				}}
				{...rest}
			>
				{btnTitle}{children}
			</Button>
			{/* <Box
				component="img"
				src={buttonRight}
				alt="button-right"
				sx={buttonRightStyle || {
					height: 50
				}}
			/> */}
			<Box
				//component="img"
				//src={buttonLeft}
				// alt="button-left"
				// sx={buttonLeftStyle || {
				// 	height: 50
				// }}
				sx={{
					height: '28px',
					width: '4px',
					backgroundColor: '#AD1AAF',
				}}
			/>

		</Stack>
	);
}

