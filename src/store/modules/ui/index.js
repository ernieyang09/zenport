// @flow
import type {
  ActionWithoutPayloadType,
} from 'types';

const prefix = 'UI';

const PREVSTEP = `${prefix}/PREVSTEP`;
const NEXTSTEP = `${prefix}/NEXTSTEP`;


type UIState = {
  step: number,
};

type PrevStepActionType = ActionWithoutPayloadType<typeof PREVSTEP>;
type NextStepActionType = ActionWithoutPayloadType<typeof NEXTSTEP>;

type UIAction = PrevStepActionType | NextStepActionType

export const uiSelector = (state: Object): UIState => state.ui;


const initState: UIState = {
  step: 0
}


const uiReducer = (state: UIState = {...initState}, action: UIAction): UIState => {
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


export const clickPrevStep = (): PrevStepActionType => ({
  type: PREVSTEP,
})

export const clickNextStep = (): NextStepActionType => ({
  type: NEXTSTEP,
})


export default uiReducer;
