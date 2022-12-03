import { Box } from "@mui/system";
import React from "react";

export default function Card({ background, borderWidth, borderRadius, borderColor, backdropFilter, children, noHover, ...rest }) {
    return (
        <Box
            sx={{
                background: background || 'linear-gradient(160.61deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 101.7%);',
                borderWidth: borderWidth || '2.5px 0px',
                borderStyle: 'solid',
                borderColor: borderColor || 'rgba(255, 255, 255, 0.4)',
                backdropFilter: backdropFilter || 'blur(17.915px)',
                borderRadius: borderRadius || '41.6667px',
                width: 'fit-content',
                ...(!noHover && {
                    '&:hover': {
                        background: 'linear-gradient(160.61deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 101.7%);',
                        borderColor: 'rgba(255, 255, 255, 0.6)',
                    },
                })
            }}
            {...rest}
        >{children}</Box>
    );
}
