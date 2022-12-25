import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../config";
import axios from "axios";
import { GoodsList } from "./GoodsList/GoodsList";
import { GoodsItemType } from "./GoodsList/GoodsItem/GoodsItem";
import Preloader from "../Preloader/Preloader";
import { Cart } from "../Cart/Cart";
import { BasketList } from "../Cart/BasketList/BasketList";
import { Alerts } from "../Alert/Alert";

export const Shop = () => {
  const [goods, setGoods] = useState<GoodsItemType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [order, setOrder] = useState<GoodsItemType[]>([]);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [alertName, setAlertName] = useState<string>("");

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

  useEffect(() => {
    isShow && (document.body.style.overflow = "hidden");
    !isShow && (document.body.style.overflow = "unset");
  }, [isShow]);

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
    setAlertName(good.name);
  };

  const removeFromCart = (goodID: string) => {
    setOrder(order.filter(o => o.id !== goodID));
  };

  const handleBasketShow = () => {
    setIsShow(!isShow);
  };

  const addQuantity = (orderID: string) => {
    const orders = order.map(item => (item.id === orderID ? { ...item, quantity: item.quantity + 1 } : item));
    setOrder(orders);
  };

  const removeQuantity = (orderID: string) => {
    const orders = order.map(item => (item.id === orderID ? { ...item, quantity: item.quantity - 1 } : item));
    setOrder(orders.filter(item => item.quantity >= 1));
  };

  const closeAlert = () => {
    setAlertName("");
  };

  return (
    <Container fixed style={{ flex: "1", paddingTop: "150px" }}>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {isLoading ? <GoodsList goods={goods} addToCart={addToCart} /> : <Preloader />}
      {isShow && (
        <BasketList
          orders={order}
          removeFromCart={removeFromCart}
          handleBasketShow={handleBasketShow}
          addQuantity={addQuantity}
          removeQuantity={removeQuantity}
        />
      )}
      {alertName && <Alerts name={alertName} closeAlert={closeAlert} />}

      {isShow && <div onClick={handleBasketShow} className="background"></div>}
    </Container>
  );
};
