/* eslint-disable react/prop-types */
import { Box, Button, Stack } from "@mui/material";
import * as React from "react";
// import buttonLeft from "../assets/images/buttonLeft.png";
// import buttonRight from "../assets/images/buttonRight.png";
export default function OutlinedBtn({
	children,
	buttonLeftStyle,
	buttonRightStyle,
	btnPadding,
	btnHeight,
	btnBackground,
	btnBorder,
	btnBorderRadius,
	noBar,
	btnTitle,
	...rest
}) {
	return (
		<Stack
			direction={'row'}
			alignItems={'center'}
		>

			{
				!noBar && (
					<Box
						sx={{
							height: '28px',
							width: '4px',
							backgroundColor: '#AD1AAF',
						}}
					/>
				)
			}

			<Button
				sx={{
					background: btnBackground || 'rgba(173, 26, 175, 0.05)',
					height: btnHeight || '50px',
					p: btnPadding || '10px 40px',
					border: btnBorder || '1px solid #AD1AAF',
					fontWeight: 500,
					fontSize: '14px',
					textTransform: 'capitalize',
					fontFamily: 'Oxanium',
					color: '#fff',
					lineHeight: 0,
					borderRadius: btnBorderRadius || '0px',

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
			{
				!noBar && (<Box
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
				/>)
			}

		</Stack>
	);
}

