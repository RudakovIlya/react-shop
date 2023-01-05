import {FC, memo} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {GoodsItemType} from "../../../../store/reducer";
import {useAppDispatch} from "../../../../store/hooks";
import {addToCartAC} from "../../../../store/actions";

type GoodsItemPropsType = {
    good: GoodsItemType;
};

export const GoodsItem: FC<GoodsItemPropsType> = memo(({good}) => {
    const {name, description, price, full_background} = good;
    const dispatch = useAppDispatch();

    return (
        <Card>
            <CardMedia component="img" alt={name} image={full_background}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions/>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 16px 16px 16px"
                }}
            >
                <Button
                    onClick={() => dispatch(addToCartAC(good))}
                    style={{color: "#000000", border: "1px solid #000000"}}
                    variant="outlined"
                    size="small"
                >
                    Купить
                </Button>
                <Typography style={{display: "inline-block", fontSize: "1.8rem", marginLeft: "auto"}}
                            variant="subtitle1">
                    {price}&nbsp;руб.
                </Typography>
            </div>
        </Card>
    );
});
