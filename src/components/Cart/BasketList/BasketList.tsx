import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { GoodsItemType } from "../../Shop/GoodsList/GoodsItem/GoodsItem";
import { BasketItem } from "./BasketItem/BasketItem";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import { useState } from "react";

type BasketListPropsType = {
  orders: GoodsItemType[];
  handleBasketShow: () => void;
  removeFromCart: (goodID: string) => void;
  addQuantity: (goodID: string) => void;
  removeQuantity: (goodID: string) => void;
};
export const BasketList = (props: BasketListPropsType) => {
  const { orders, handleBasketShow, removeFromCart, addQuantity, removeQuantity } = props;
  const totalPrice = orders.reduce((accum, order) => (accum + order.price) * order.quantity, 0);

  const [buy, setBuy] = useState<boolean>(false);

  const checkout = () => {
    setBuy(!buy);
  };

  return (
    <Grid sx={{ p: "0 15px" }} maxWidth={600} item xs={6} md={6} className={"basket"}>
      <Paper style={{ padding: 15 }} elevation={6}>
        <Typography
          style={{ display: "flex", justifyContent: "space-between" }}
          sx={{ mb: 2 }}
          variant="h6"
          component="div"
        >
          <span>{orders.length ? "Корзина" : "Корзина пуста"}</span>
          <IconButton aria-label="delete" color="default" onClick={handleBasketShow}>
            <ClearIcon />
          </IconButton>
        </Typography>

        <List dense={true}>
          <Paper elevation={6}>
            {orders.map(order => {
              const remove = () => {
                removeFromCart(order.id);
              };
              const addQuantityCallback = () => {
                addQuantity(order.id);
              };
              const removeQuantityCallback = () => {
                removeQuantity(order.id);
              };
              return (
                <BasketItem
                  key={order.id}
                  order={order}
                  remove={remove}
                  addQuantity={addQuantityCallback}
                  removeQuantity={removeQuantityCallback}
                />
              );
            })}
          </Paper>
          <ListItem sx={{ mb: 2 }}>Общая стоимость: {totalPrice} руб</ListItem>
          <Button
            onClick={checkout}
            disabled={!orders.length}
            color="success"
            variant={buy ? "contained" : "outlined"}
            sx={{ ml: 2 }}
          >
            Оформить
          </Button>
        </List>
      </Paper>
    </Grid>
  );
};
