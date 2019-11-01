import React, { useState, useCallback } from 'react';
import { SelectPicker, Button } from 'rsuite';
import { useMappedState ,useDispatch} from 'redux-react-hook';

import {
  clickPrevStep,
  clickNextStep,
} from 'store/modules/ui';

import {
  formSelector,
  setRestaurant,
} from 'store/modules/form';

import {
  dishesSelector,
} from 'store/modules/dishes';

const Step2 = () => {
  const { meal, restaurant } = useMappedState(formSelector);

  const mapState = useCallback((state) => {
    const dishes = dishesSelector(state);
    const restaurants = dishes
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
  

  const dispatch = useDispatch();


  return (
    <div>
      <div>Please select a restaurant</div>
      <div>
        <SelectPicker
          data={restaurants.map(r => ({ label: r, value: r }))}
          searchable={false}
          value={select}
          onChange={(val) => { setSelect(val); }}
        />
      </div>
      {
        !valid.restaurant && <div>Please select a restaurant</div>
      }
      <div>
        <Button
          onClick={()=> { dispatch(clickPrevStep()) }}
        >
          PREV
        </Button>
        <Button
          onClick={()=> { 
            if (!validate()) {
              return
            }
            dispatch(setRestaurant({ restaurant: select }));
            dispatch(clickNextStep())
          }}
        >
          NEXT
        </Button>
      </div>
    </div>
  )
}

export default Step2;
