import {AllActionsType} from "./actions";

export type GoodsItemType = {
    id: string;
    name: string;
    description: string;
    price: number;
    full_background: string;
    quantity: number;
};

type initialStateType = {
    goods: GoodsItemType[]
    isLoading: boolean
    order: GoodsItemType[]
    isShow: boolean
    alertName: string
}

const initialState: initialStateType = {
    goods: [],
    isLoading: false,
    order: [],
    isShow: false,
    alertName: ''
}

export const reducer = (state: initialStateType = initialState, action: AllActionsType): initialStateType => {
    switch (action.type) {

        case "SET-GOODS": {
            return {
                ...state,
                goods: action.payload.data || [],
                isLoading: true
            }
        }

        case "ADD-TO-CART": {
            const goodIndex = state.order.findIndex(orderItem => orderItem.id === action.payload.good.id);
            if (goodIndex < 0) {
                return {
                    ...state,
                    order: [...state.order, {...action.payload.good, quantity: 1}],
                    alertName: action.payload.name
                }
            } else {
                return {
                    ...state,
                    order: state.order.map((stateItem, index) => (index === goodIndex ? {
                        ...stateItem,
                        quantity: stateItem.quantity + 1
                    } : stateItem)),
                    alertName: action.payload.name
                }
            }
        }

        case "REMOVE-FROM-CART": {
            return {
                ...state,
                order: state.order.filter(stateItem => stateItem.id !== action.payload.goodID)
            }
        }

        case "ADD-QUANTITY": {
            return {
                ...state,
                order: state.order.map(stateItem => stateItem.id === action.payload.orderID ? {
                    ...stateItem,
                    quantity: stateItem.quantity + 1
                } : stateItem)
            }
        }

        case "REMOVE-QUANTITY": {
            return {
                ...state,
                order: state.order.map(stateItem => stateItem.id === action.payload.orderID ? {
                    ...stateItem,
                    quantity: stateItem.quantity - 1
                } : stateItem)
            }
        }

        case "CLOSE-ALERT": {
            return {
                ...state,
                alertName: ''
            }
        }

        case "SHOW-BASKET": {
            return {
                ...state,
                isShow: !state.isShow
            }
        }

        default:
            return state
    }

}