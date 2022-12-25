import Grid from "@mui/material/Grid";
import { GoodsItem, GoodsItemType } from "./GoodsItem/GoodsItem";
import Skeleton from "@mui/material/Skeleton";
type GoodsListPropsType = {
  goods: GoodsItemType[];
  isLoading: boolean;
  addToCart: (good: GoodsItemType) => void;
};

export const GoodsList = (props: GoodsListPropsType) => {
  const { goods = [], addToCart, isLoading } = props;

  const goodsItems = (!isLoading ? Array.from(new Array(12)) : goods).map((good, index) => {
    return good ? (
      <Grid item xs={1} sm={4} md={4} height={"100%"} key={good.id}>
        <GoodsItem good={good} addToCart={addToCart} />
      </Grid>
    ) : (
      <Grid key={index} item xs={1} sm={4} md={4} height={"100%"}>
        <Skeleton variant="rectangular" height={550} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
      {goodsItems}
    </Grid>
  );
};
