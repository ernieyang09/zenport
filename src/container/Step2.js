// @flow
import React, { useState, useCallback } from 'react';
import { SelectPicker, Button } from 'rsuite';
import { useMappedState ,useDispatch} from 'redux-react-hook';

import {
  clickPrevStep,
  clickNextStep,
} from 'store/modules/ui';

import type {
  UIAction,
} from 'store/modules/ui';

import {
  formSelector,
  setRestaurant,
} from 'store/modules/form';

import type {
  FormAction,
} from 'store/modules/form';

import {
  dishesSelector,
} from 'store/modules/dishes';

import type {
  Dish
} from 'store/modules/dishes';

import {
  ButtonPanel,
  ErrMsg,
} from 'styles/pages';





const Step2 = () => {
  const { meal, restaurant } = useMappedState(formSelector);

  const mapState = useCallback((state) => {
    const dishes: Array<Dish> = dishesSelector(state);
    const restaurants: Array<string> = dishes
      .filter(d => d.availableMeals.some(m => m === meal))
      .map(d => d.restaurant)
    return [...new Set(restaurants)]
  }, [meal]);

  const restaurants = useMappedState(mapState);

  const [select, setSelect] = useState(restaurant);
  const [valid, setValid] = useState({ restaurant: true });

  const validate = () => {
    const restaurant = (select !== null);
    setValid({ restaurant });
    return restaurant;
  }
  

  const dispatch: ((FormAction | UIAction) => void) = useDispatch();


  return (
    <div>
      <div>Please select a restaurant</div>
      <div>
        <SelectPicker
          data={restaurants.map(r => ({ label: r, value: r }))}
          searchable={false}
          value={select}
          onChange={(val: string) => { setSelect(val); }}
        />
      </div>
      {
        !valid.restaurant && <ErrMsg>Please select a restaurant</ErrMsg>
      }
      <ButtonPanel>
        <Button
          onClick={()=> {
            dispatch(setRestaurant({ restaurant: select }));
            dispatch(clickPrevStep());
          }}
        >
          PREV
        </Button>
        <Button
          data-test-id='next'
          onClick={()=> { 
            if (!validate()) {
              return
            }
            dispatch(setRestaurant({ restaurant: select }));
            dispatch(clickNextStep());
          }}
        >
          NEXT
        </Button>
      </ButtonPanel>
    </div>
  )
}

export default Step2;
