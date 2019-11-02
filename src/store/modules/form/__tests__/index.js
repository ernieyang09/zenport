import {
  setMeal,
  SETMEAL,
  initState,
} from '../';

import reducer from '../';

describe('actions', () => {
  it('setMeal', () => {
    const payload = { meal: 'dinner', number: 5};
    expect(setMeal(payload)).toEqual({
      type: SETMEAL,
      payload
    })
  });
});

describe('reducers', () => {
  it('INIT state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  })
  it(SETMEAL, () => {
    const action = { type: SETMEAL, payload: { meal: 'dinner', number: 5}};
    expect(reducer(undefined, action)).toEqual({
      ...initState,
      meal: 'dinner',
      number: 5,
    })
  });
});
