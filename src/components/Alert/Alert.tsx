import Alert from "@mui/material/Alert";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {closerAlertAC} from "../../store/actions";

export const Alerts = () => {

    const name = useAppSelector((state) => state.alertName);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const timerID = setTimeout(() => dispatch(closerAlertAC()), 3000);
        return () => {
            clearTimeout(timerID);
        };
        // eslint-disable-next-line
    }, [name]);

    return (
        <Alert className="alert" severity="success">
            {name} добавлен в корзину!
        </Alert>
    );
};
