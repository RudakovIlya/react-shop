import {GoodsItemType} from "./reducer";

export const addToCartAC = (good: GoodsItemType) => {
    return {
        type: 'ADD-TO-CART',
        payload: {
            good,
            name: good.name
        }
    } as const
}

export const removeFromCartAC = (goodID: string) => {
    return {
        type: 'REMOVE-FROM-CART',
        payload: {
            goodID
        }
    } as const
}

export const addQuantityAC = (orderID: string) => {
    return {
        type: 'ADD-QUANTITY',
        payload: {
            orderID
        }
    } as const
}

export const showBasketAC = () => {
    return {
        type: 'SHOW-BASKET'
    } as const
}

export const removeQuantityAC = (orderID: string) => {
    return {
        type: 'REMOVE-QUANTITY',
        payload: {
            orderID
        }
    } as const
}

export const closerAlertAC = () => {
    return {
        type: 'CLOSE-ALERT'
    } as const
}

export const setGoodsAC = (data: GoodsItemType[]) => {
    return {
        type: 'SET-GOODS',
        payload: {
            data,
        }
    } as const
}

export type AllActionsType =
    ReturnType<typeof addToCartAC>
    | ReturnType<typeof removeFromCartAC>
    | ReturnType<typeof addQuantityAC>
    | ReturnType<typeof showBasketAC>
    | ReturnType<typeof removeQuantityAC>
    | ReturnType<typeof closerAlertAC>
    | ReturnType<typeof setGoodsAC>