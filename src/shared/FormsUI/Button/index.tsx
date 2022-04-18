import React from 'react';
import Button from '@mui/material/Button';
import { useFormikContext } from 'formik';
import {ButtonProps} from "@mui/material";



const ButtonWrapper: React.FC<ButtonProps> = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();
  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: submitForm
  } as const

  return (
    <Button
      {...configButton}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default ButtonWrapper;
