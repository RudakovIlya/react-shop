import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import {GoodsItem} from "./GoodsItem/GoodsItem";
import {useAppSelector} from "../../../store/hooks";

export const GoodsList = () => {

    const goods = useAppSelector((state) => state.goods)
    const isLoading = useAppSelector((state) => state.isLoading)

    const goodsItems = (!isLoading ? Array.from(new Array(12)) : goods).map((good, index) => {
        return good ? (
            <Grid item xs={1} sm={4} md={4} height={"100%"} key={good.id}>
                <GoodsItem good={good}/>
            </Grid>
        ) : (
            <Grid key={index} item xs={1} sm={4} md={4} height={"100%"}>
                <Skeleton variant="rectangular" height={550}/>
            </Grid>
        );
    });

    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 1, sm: 8, md: 12}}>
            {goodsItems}
        </Grid>
    );
};
