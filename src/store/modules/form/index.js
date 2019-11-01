
const initState = {
  meal: null,
  number: 0,
  restaurant: null,
  orders: [],
}

export const formSelector = state => state.form;

const prefix = 'FORM';
const SETMEAL = `${prefix}/SETMEAL`;
const SETRESTAURANT = `${prefix}/SETRESTAURANT`;



const formReducer = (state = {...initState}, action = {}) => {
  switch (action.type) {
    case SETMEAL:
    case SETRESTAURANT:
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


export default formReducer;
