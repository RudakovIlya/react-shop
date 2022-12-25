import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Paper from "@mui/material/Paper";

type CartPropsType = {
  quantity: number;
  handleBasketShow: () => void;
};

export const Cart = (props: CartPropsType) => {
  const { quantity, handleBasketShow } = props;

  return (
    <div onClick={handleBasketShow} style={{ position: "fixed", top: "5rem", right: 40, cursor: "pointer" }}>
      <Paper style={{ padding: 10 }} elevation={6}>
        <ShoppingCartOutlinedIcon />
        {quantity ? <span>{quantity}</span> : null}
      </Paper>
    </div>
  );
};
