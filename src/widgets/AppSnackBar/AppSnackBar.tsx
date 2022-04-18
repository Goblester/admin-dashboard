import React, {memo} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {appActions} from "../../app/appReducer";
import {Alert, AlertColor, Snackbar} from "@mui/material";


export const AppSnackBar: React.FC = memo(() => {
    const dispatch = useAppDispatch()
    const status = useAppSelector(state => state.app.status)
    const message = useAppSelector(state => state.app.message)

    let severity: AlertColor;

    switch (status) {
        case "error":
            severity = 'error'
            break;
        case "success":
            severity = 'success'
            break;
        default:
            severity = 'info'
    }


    return <Snackbar open={status !== 'idle'} onClose={() => dispatch( appActions.changeStatus({status: 'idle'}))}
                     autoHideDuration={6000}>
        <Alert severity={severity}>{message}</Alert>
    </Snackbar>
})