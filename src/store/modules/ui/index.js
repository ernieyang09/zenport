
const initState = {
  step: 0
}

export const uiSelector = state => state.ui;

const prefix = 'UI';

const PREVSTEP = `${prefix}/PREVSTEP`;
const NEXTSTEP = `${prefix}/NEXTSTEP`;


const uiReducer = (state = {...initState}, action = {}) => {
  switch (action.type) {
    case PREVSTEP:
      return {
        ...state,
        step: state.step - 1,
      }
    case NEXTSTEP:
      return {
        ...state,
        step: state.step + 1,
      }
    default:
      return state;
  }
}


export const clickPrevStep = () => ({
  type: PREVSTEP,
})

export const clickNextStep = () => ({
  type: NEXTSTEP,
})


export default uiReducer;
