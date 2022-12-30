import React from "react";
import Container from "@mui/material/Container";
import {useEffect} from "react";
import {API_KEY, API_URL} from "../../config";
import axios from "axios";
import {GoodsList} from "./GoodsList/GoodsList";
import {Cart} from "../Cart/Cart";
import {BasketList} from "../Cart/BasketList/BasketList";
import {Alerts} from "../Alert/Alert";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setGoodsAC, showBasketAC} from "../../store/actions";

export const Shop = () => {

    const {isShow, alertName} = useAppSelector((state) => state)
    const dispatch = useAppDispatch();

    useEffect(() => {
        try {
            axios
                .get(API_URL, {
                    headers: {
                        Authorization: API_KEY,
                    },
                })
                .then(response => {
                    dispatch(setGoodsAC(response.data.featured))
                }).catch(error => {
                console.log(error)
            });
        } catch (error) {
        }

    }, [dispatch]);

    useEffect(() => {
        isShow && (document.body.style.overflow = "hidden");
        !isShow && (document.body.style.overflow = "unset");
    }, [isShow]);

    return (
        <Container fixed style={{flex: "1", paddingTop: "150px"}}>
            <Cart/>
            <GoodsList/>
            {isShow && (
                <BasketList
                />
            )}
            {alertName && <Alerts/>}
            {isShow && <div onClick={() => dispatch(showBasketAC())} className="background"></div>}
        </Container>
    );
};
