import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CategoryIcon from "@mui/icons-material/Category";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {GoodsItemType} from "../../../../store/reducer";
import {useAppDispatch} from "../../../../store/hooks";
import {addQuantityAC, removeFromCartAC, removeQuantityAC} from "../../../../store/actions";
import {memo} from "react";

type BasketItemPropsType = {
    order: GoodsItemType;
};

export const BasketItem = memo((props: BasketItemPropsType) => {
    const {
        order: {name, price, quantity, id},
    } = props;

    const dispatch = useAppDispatch();

    const remove = () => {
        dispatch(removeFromCartAC(id))
    };
    const addQuantity = () => {
        dispatch(addQuantityAC(id))
    };
    const removeQuantity = () => {
        dispatch(removeQuantityAC(id))
    };

    return (
        <ListItem
            sx={{mb: 2, p: 1}}
            dense={true}
            secondaryAction={
                <IconButton onClick={remove} edge="end" aria-label="delete">
                    <DeleteIcon/>
                </IconButton>
            }
        >
            <ListItemAvatar>
                <Avatar>
                    <CategoryIcon/>
                </Avatar>
            </ListItemAvatar>
            <IconButton onClick={addQuantity}>
                <AddIcon/>
            </IconButton>
            <span>{quantity}</span>
            <IconButton onClick={removeQuantity} disabled={quantity === 0}>
                <RemoveIcon/>
            </IconButton>
            <ListItemText primary={`${name} x ${quantity} = ${price * quantity} руб  `}/>
        </ListItem>
    );
});
