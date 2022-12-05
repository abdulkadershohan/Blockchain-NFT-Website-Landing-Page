import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import ArrowIcon from "../../assets/svg/ArrowIcon";

export default function InputForm() {
    const [email, setEmail] = React.useState("");
    // input button 
    const InputButton = () => {
        return (

            <Button
                sx={{
                    padding: '25px 15px',
                    bgcolor: '#AD1AAF',
                    borderRadius: '15px',
                    border: 'none',
                }}
                type="submit"

            >
                <ArrowIcon />
            </Button>
        )
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <Stack py={2}
            component="form"
            onSubmit={submitHandler}
        >
            <TextField
                placeholder='info@gmail.com'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                    width: {
                        xs: 300,
                        md: 400,
                        lg: 700,
                    },

                    '& .MuiInputBase-root': {
                        border: '1px solid rgba(173, 26, 175, 1)',
                    },
                    '& .MuiInputBase-input': {
                        //border: '1px solid rgba(173, 26, 175, 1)',
                        color: 'rgba(164, 142, 169, 1)',
                        fontSize: '24px',
                        fontWeight: '400',
                        fontFamily: 'Poppins',
                        opacity: 0.7,
                        py: 3

                    }
                }
                }
                InputProps={{ endAdornment: <InputButton /> }}
            />
        </Stack >
    );
}
