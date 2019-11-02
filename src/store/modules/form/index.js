// @flow
import type {
  ActionWithPayloadType,
} from 'types';


const prefix = 'FORM';
const SETMEAL = `${prefix}/SETMEAL`;
const SETRESTAURANT = `${prefix}/SETRESTAURANT`;
const SETORDER = `${prefix}/SETORDER`;

type Dish = {
  id: number,
  name: String,
};

type Order = {
  key: number,
  dish: ?Dish,
  quantity: number,
};

type FormState = {
  meal: ?string,
  number: number,
  restaurant: ?string,
  orders: Array<Order>,
};



type MealData = {| meal: string, number: number |};
type RestaurantData = {| restaurant: ?string |};
type OrderData = {| orders: Array<Order> |};

type SetMealActionType = ActionWithPayloadType<typeof SETMEAL, MealData>;
type SetRestaurantActionType = ActionWithPayloadType<typeof SETRESTAURANT, RestaurantData >;
type SetOrderActionType = ActionWithPayloadType<typeof SETORDER, OrderData >;

type FormAction = SetMealActionType | SetRestaurantActionType | SetOrderActionType


const initState = {
  meal: null,
  number: 1,
  restaurant: null,
  orders: [{ key: 0, dish: null, quantity: 1 }],
}

export const formSelector = (state: Object): FormState => state.form;


const formReducer = (state: FormState = {...initState}, action: FormAction): FormState => {
  switch (action.type) {
    case SETMEAL:
    case SETRESTAURANT:
    case SETORDER:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}


export const setMeal = (mealData: MealData): SetMealActionType => ({
  type: SETMEAL,
  payload: mealData,
});

export const setRestaurant = (restaurantData: RestaurantData ): SetRestaurantActionType => ({
  type: SETRESTAURANT,
  payload: restaurantData,
});

export const setOrder = (orderData: OrderData): SetOrderActionType => ({
  type: SETORDER,
  payload: orderData,
})


export default formReducer;
