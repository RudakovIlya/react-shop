import Grid from "@mui/material/Grid";
import { GoodsItem, GoodsItemType } from "./GoodsItem/GoodsItem";

type GoodsListPropsType = {
  goods: GoodsItemType[];
  addToCart: (good: GoodsItemType) => void;
};

export const GoodsList = (props: GoodsListPropsType) => {
  const { goods = [], addToCart } = props;
  const goodsItems = goods.map(good => {
    return (
      <Grid item xs={1} sm={4} md={4} height={"100%"} key={good.id}>
        <GoodsItem good={good} addToCart={addToCart} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
      {goodsItems}
    </Grid>
  );
};
