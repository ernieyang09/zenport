
const initState = {
  meal: null,
  number: 1,
  restaurant: null,
  orders: [{ key: 0, dish: null, quantity: 1 }],
}

export const formSelector = state => state.form;

const prefix = 'FORM';
const SETMEAL = `${prefix}/SETMEAL`;
const SETRESTAURANT = `${prefix}/SETRESTAURANT`;
const SETORDER = `${prefix}/SETORDER`;



const formReducer = (state = {...initState}, action = {}) => {
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


export const setMeal = (mealData) => ({
  type: SETMEAL,
  payload: mealData,
});

export const setRestaurant = (restaurantData) => ({
  type: SETRESTAURANT,
  payload: restaurantData,
});

export const setOrder = (orderData) => ({
  type: SETORDER,
  payload: orderData,
})


export default formReducer;
