
const initState = {
  meal: null,
  number: 0,
  restaurant: '',
  orders: [],
}

export const formSelector = state => state.form;

const prefix = 'FORM';
const SETMEAL = `${prefix}/SETMEAL`


const formReducer = (state = {...initState}, action = {}) => {
  switch (action.type) {
    case SETMEAL:
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
  payload: mealData
})

// export const clickNextStep = () => ({
//   type: NEXTSTEP,
// })


export default formReducer;
