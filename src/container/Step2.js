import React, { useCallback } from 'react';
import { Button } from 'rsuite';
import { useMappedState ,useDispatch} from 'redux-react-hook';

import {
  clickPrevStep,
  clickNextStep,
} from 'store/modules/ui';

import {
  formSelector,
} from 'store/modules/form';

import {
  dishesSelector,
} from 'store/modules/dishes';

const Step2 = () => {
  const { meal } = useMappedState(formSelector);

  const mapState = useCallback((state) => {
    const dishes = dishesSelector(state);
    const restaurants = dishes.filter(d => d.availableMeals.some(m => m === meal))
    return restaurants
  }, [meal]);

  const restaurants = useMappedState(mapState);


  const dispatch = useDispatch();

  return (
    <div>
      <div>Please select a restaurant</div>
      <div>
      <Button
          onClick={()=> { dispatch(clickPrevStep()) }}
        >
          PREV
        </Button>
        <Button
          onClick={()=> { dispatch(clickNextStep()) }}
        >
          NEXT
        </Button>
      </div>
    </div>
  )
}

export default Step2;
