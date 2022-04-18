import React from "react";
import {styled, useTheme} from '@mui/material/styles';
import {AppThemeType, PaletteKeyType} from "../app/theme";

type SeverityPillRootProps = {
    theme: AppThemeType
    ownerState: { color: PaletteKeyType }
}

type SeverityPillProps = {
    color?: PaletteKeyType
}


const SeverityPillRoot = styled('span')(({theme, ownerState}: SeverityPillRootProps) => {
    const backgroundColor = theme.palette[ownerState.color].main;
    const color = theme.palette[ownerState.color].contrastText;

    return {
        alignItems: 'center',
        backgroundColor,
        borderRadius: 12,
        color,
        cursor: 'default',
        display: 'inline-flex',
        flexGrow: 0,
        flexShrink: 0,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(12),
        lineHeight: 2,
        fontWeight: 600,
        justifyContent: 'center',
        letterSpacing: 0.5,
        minWidth: 20,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        textTransform: 'uppercase',
        whiteSpace: 'nowrap'
    };
});

export const SeverityPill: React.FC<SeverityPillProps> = (props) => {
    const {
        color = 'primary',
        children,
        ...rest
    } = props;
    const theme = useTheme()
    const ownerState = {color};

    return (
        <SeverityPillRoot
            theme={theme}
            ownerState={ownerState}
            {...rest}>
            {children}
        </SeverityPillRoot>
    );
};

