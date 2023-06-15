import { Actions } from "./actions";
import { CoffeeListProps } from "@/utils/coffeeList";
import { NewOrderFormData } from "@/context/CoffeeContext";
import { produce } from "immer";

export interface CartProductsProps {
  coffee: CoffeeListProps;
  quantity: number;
}

export interface OrderState {
  cartProducts: CartProductsProps[];
  newOrderData?: NewOrderFormData;
}

export function OrderReducer(state: OrderState, action: any) {

  switch (action.type) {
    case Actions.ADD_ITEM: {
      const existingProductIndex = state.cartProducts.findIndex(
        (product) => product.coffee.id === action.payload.coffee.id
      );

      if (existingProductIndex >= 0) {
        return produce(state, (draft) => {
          draft.cartProducts[existingProductIndex].quantity +=
            action.payload.quantity;
        });
      } else {
        return produce(state, (draft) => {
          draft.cartProducts.push(action.payload);
        });
      }
    }
    case Actions.INCREMENT_ITEM: {
      const index = state.cartProducts.findIndex(
        (item) => item.coffee.id === action.payload
      );

      if (index === -1) return state;

      return produce(state, (draft) => {
        draft.cartProducts[index].quantity += 1;
      });
    }
    case Actions.DECREMENT_ITEM: {
      const index = state.cartProducts.findIndex(
        (item) => item.coffee.id === action.payload
      );

      if (index === -1) return state;

      return produce(state, (draft) => {
        draft.cartProducts[index].quantity -= 1;

        if (draft.cartProducts[index].quantity <= 0) {
          draft.cartProducts.splice(index, 1);
        }
      });
    }
    case Actions.REMOVE_ITEM: {
      const index = state.cartProducts.findIndex(
        (item) => item.coffee.id === action.payload
      );

      if (index === -1) return state;

      return produce(state, (draft) => {
        draft.cartProducts.splice(index, 1);
      });
    }
    case Actions.SET_ORDER_DATA: {
      return produce(state, (draft) => {
        draft.newOrderData = { ...action.payload };
      });
    }
    case Actions.RESET_DATA: {
      return produce(state, (draft) => {
        draft.cartProducts = [];
      });
    }
    default:
      return state;
  }
}
