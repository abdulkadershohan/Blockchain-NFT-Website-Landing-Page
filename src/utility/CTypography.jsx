import { Stack, Typography } from "@mui/material";
import * as React from "react";
export default function CTypography({
    children,
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    text,
    color,
    ...rest
}) {
    return (
        <Stack spacing={1}>
            <Typography
                align={align}
                gutterBottom={gutterBottom}
                noWrap={noWrap}
                paragraph={paragraph}
                fontWeight={800}
                //sx={sx ? sx : { fontWeight: 700, py: 0 }}
                //  variant={variant ? variant : "h6"}
                text={text}
                color={color ? color : "#fff"}
                //  component={component ? component : "h1"}
                {...rest}
            >
                {text}{children}
            </Typography>
        </Stack>
    );
}
