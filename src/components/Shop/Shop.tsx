import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../config";
import axios from "axios";
import { GoodsList } from "./GoodsList/GoodsList";
import { GoodsItemType } from "./GoodsList/GoodsItem/GoodsItem";
import Preloader from "../Preloader/Preloader";
import { Cart } from "../Cart/Cart";

export const Shop = () => {
  const [goods, setGoods] = useState<GoodsItemType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [order, setOrder] = useState<GoodsItemType[]>([]);
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then(response => {
        setGoods(response.data.featured);
        setLoading(true);
      });
  }, []);

  const addToCart = (good: GoodsItemType) => {
    const goodIndex = order.findIndex(orderItem => orderItem.id === good.id);
    if (goodIndex < 0) {
      setOrder([...order, { ...good, quantity: 1 }]);
    } else {
      setOrder(
        order.map((orderItem, index) =>
          index === goodIndex ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
        )
      );
    }
  };

  const handleBasketShow = () => {
    setIsShow(true);
  };

  return (
    <Container fixed style={{ flex: "1", paddingTop: "150px" }}>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {isLoading ? <GoodsList goods={goods} addToCart={addToCart} /> : <Preloader />}
    </Container>
  );
};
