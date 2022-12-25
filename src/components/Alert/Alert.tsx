import Alert from "@mui/material/Alert";
import { useEffect } from "react";
type AlertsPropsType = {
  name: string;
  closeAlert: () => void;
};
export const Alerts = (props: AlertsPropsType) => {
  const { name, closeAlert } = props;
  useEffect(() => {
    const timerID = setTimeout(closeAlert, 3000);
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
