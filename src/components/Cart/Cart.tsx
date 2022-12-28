import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Paper from "@mui/material/Paper";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {showBasketAC} from "../../store/actions";

export const Cart = () => {

    const quantity = useAppSelector(state => state.order.length)

    const dispatch = useAppDispatch();

    return (
        <div onClick={() => dispatch(showBasketAC())}
             style={{position: "fixed", top: "5rem", right: 40, cursor: "pointer"}}>
            <Paper style={{padding: 10}} elevation={6}>
                <ShoppingCartOutlinedIcon/>
                {quantity ? <span>{quantity}</span> : null}
            </Paper>
        </div>
    );
};
